import React, {useState} from 'react';
import {Layout,Table} from "antd";
import {columns, getDefaultSignsTime, getSignsTime, signFormData, transform} from "./additional/service";
import {useSelector} from "react-redux";
import {usePreload} from "../../hooks/usePreLoad";
import {deleteSign, loadAllSign, updateProcedure} from "../../store/user/userActions";
import {Accordion} from "../../components/accordion/Collapse";
import {MainForm} from "../../components/forms/MainForm";
import {getNames} from "../main/additional/service";
import {Manipulator} from "../../components/items/Manipulator";

const {Content}= Layout;

//TODO create CUD operations
export const SignPage = () => {

    const user = useSelector(store => store.user);
    const [recordId, setRecordId] = useState(0);


    usePreload(loadAllSign)

    const changeHandler = () => {

    }

    const submitHandler = () => {

    }

    const selectorHandler = (time) => {
        const id = user.allSign.filter(sign => {
           return  sign.recordTime === time
        })[0].recordID
        setRecordId(id)
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
                            handleSubmit={submitHandler}
                            selectorHandler={selectorHandler}
                            values={getDefaultSignsTime(user.allSign)}
                            keys="Time of record"
                        />
                    </Accordion>
                    <Accordion text="Add record">
                        <MainForm
                            formData={signFormData}
                            hasSelector={false}
                            hasCheckBox={false}
                            handleChange={changeHandler}
                            handleSubmit={submitHandler}
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