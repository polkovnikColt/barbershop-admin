import React, {useState} from 'react';
import {Layout,Table} from "antd";
import {columns, getDefaultSignsTime, getSignsTime, signFormData, transform, validate} from "./additional/service";
import {useDispatch, useSelector} from "react-redux";
import {usePreload} from "../../hooks/usePreLoad";
import {addSign, deleteSign, loadAllSign, updateProcedure, updateSign} from "../../store/user/userActions";
import {Accordion} from "../../components/accordion/Collapse";
import {MainForm} from "../../components/forms/MainForm";
import {getNames} from "../main/additional/service";
import {Manipulator} from "../../components/items/Manipulator";

const {Content}= Layout;

//TODO create CUD operations
export const SignPage = () => {

    const user = useSelector(store => store.user);
    const dispatch = useDispatch();
    const [recordId, setRecordId] = useState(0);
    const [record,setRecord] = useState({
        day:"",
        time:""
    });


    usePreload(loadAllSign)

    const changeHandler = (name,value) => {
        setRecord({...record, [name]:value})
    }

    const updateHandler = () => {
        if(!validate(record)){
            alert("All field must be filled");
            return;
        }
        record.recordId = recordId;
        dispatch(updateSign(record))
    }

    const selectorHandler = (_,time) => {
        const sign = user.allSign.filter(sign => {
           return sign.recordTime === time
        })[0]
        setRecordId(sign.recordId);
        setRecord(sign);
    }

    return (
        <Content style={{minHeight:window.innerHeight}}>
            <div className="form-padding">
                <div className="m-1">
                    <Accordion text="Update record">
                        <MainForm
                            formData={signFormData}
                            hasSelector={true}
                            hasCheckBox={false}
                            handleChange={changeHandler}
                            handleSubmit={updateHandler}
                            selectorHandler={selectorHandler}
                            values={getDefaultSignsTime(user.allSign)}
                            keys="Time of record"
                        />
                    </Accordion>
                    <Accordion text="Delete record">
                        <Manipulator
                            values={getDefaultSignsTime(user.allSign)}
                            name="Delete"
                            id={recordId}
                            buttonText="Delete"
                            dispatchFunction={deleteSign}
                            handler={selectorHandler}
                            message="Delete record"
                        />
                    </Accordion>
                </div>
                <Table
                    dataSource ={user.allSign.map(sign => transform(sign))}
                    columns = {columns}
                />
            </div>

        </Content>
    )
}