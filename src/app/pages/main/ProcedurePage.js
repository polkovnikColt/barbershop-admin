import React, {useState} from 'react';
import {Layout,Table} from "antd";
import {columns, getNames, procedureFormData} from "../main/additional/service";
import {usePreload} from "../../hooks/usePreLoad";
import {deleteProcedure, loadAllProcedures, updateProcedure} from "../../store/user/userActions";
import {useSelector} from "react-redux";
import {Accordion} from "../../components/accordion/Collapse";
import {MainForm} from "../../components/forms/MainForm";
import {Manipulator} from "../../components/items/Manipulator";

const {Content}= Layout;

//TODO create CUD operations
export const ProcedurePage = () => {

    const user = useSelector(store => store.user);

    usePreload(loadAllProcedures);

    const changeHandler = () => {

    }

    const submitHandler = () => {

    }

    const selectorHandler = () => {
    }

    return (
        <Content style={{minHeight:window.innerHeight}}>
            <div className="form-padding">
                <div className="m-1">
                    <Accordion text="Update procedure">
                        <MainForm
                            formData={procedureFormData}
                            hasSelector={true}
                            hasCheckBox={false}
                            handleChange={changeHandler}
                            handleSubmit={submitHandler}
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
                            handleSubmit={submitHandler}
                        />
                    </Accordion>
                    <Accordion text="Delete procedure">
                        <Manipulator
                            values={getNames(user.allProcedures)}
                            name="Delete"
                            id={0}
                            buttonText="Delete"
                            dispatchFunction={deleteProcedure}
                            handler={selectorHandler}
                            message="Delete procedure"
                            />
                    </Accordion>
                </div>
                <Table dataSource={user.allProcedures} columns={columns} />;
            </div>
        </Content>
    )
}