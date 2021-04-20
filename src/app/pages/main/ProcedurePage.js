import React, {useState} from 'react';
import {Layout, Table} from "antd";
import {columns, getNames, procedureFormData, validate} from "../main/additional/service";
import {usePreload} from "../../hooks/usePreLoad";
import {addProcedure, deleteProcedure, loadAllProcedures, updateProcedure} from "../../store/user/userActions";
import {useDispatch, useSelector} from "react-redux";
import {Accordion} from "../../components/accordion/Collapse";
import {MainForm} from "../../components/forms/MainForm";
import {Manipulator} from "../../components/items/Manipulator";

const {Content} = Layout;

//TODO create CUD operations
export const ProcedurePage = () => {

    const user = useSelector(store => store.user);
    const dispatch = useDispatch();
    const [procedureId, setProcedureId] = useState(0);
    const [procedure, setProcedure] = useState({
        name: "",
        duration: "",
        price: ""
    })

    usePreload(loadAllProcedures);

    const changeHandler = (name, value) => {
        setProcedure({...procedure, [name]: value})
    }

    const addHandler = () => {
        if(validate(procedure)){
            alert("All fields must be correct");
            return;
        }
        dispatch(addProcedure(procedure))
    }

    const updateHandler = () => {
        if(!validate(procedure)){
            alert("All fields must be correct");
            return;
        }
        procedure.procedureId = procedureId;
        console.log(procedure)
        dispatch(updateProcedure(procedure))
    }

    const selectorHandler = (_, procName) => {
        const procedure = user.allProcedures.filter(proc => {
            return proc.name === procName
        })[0];
        setProcedureId(procedure.procedureId);
        setProcedure(procedure)
    }


    return (
        <Content style={{minHeight: window.innerHeight}}>
            <div className="form-padding">
                <div className="m-1">
                    <Accordion text="Update procedure">
                        <MainForm
                            formData={procedureFormData}
                            hasSelector={true}
                            hasCheckBox={false}
                            handleChange={changeHandler}
                            handleSubmit={updateHandler}
                            selectorHandler={selectorHandler}
                            values={getNames(user.allProcedures)}
                            keys="Name of procedure"
                        />
                    </Accordion>
                    <Accordion text="Add procedure">
                        <MainForm
                            formData={procedureFormData}
                            hasSelector={false}
                            hasCheckBox={false}
                            handleChange={changeHandler}
                            handleSubmit={addHandler}
                        />
                    </Accordion>
                    <Accordion text="Delete procedure">
                        <Manipulator
                            values={getNames(user.allProcedures)}
                            name="Delete"
                            id={procedureId}
                            buttonText="Delete"
                            dispatchFunction={deleteProcedure}
                            handler={selectorHandler}
                            message="Delete procedure"
                        />
                    </Accordion>
                </div>
                <Table dataSource={user.allProcedures} columns={columns}/>
            </div>
        </Content>
    )
}