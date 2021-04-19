import React from 'react';
import {useDispatch} from "react-redux";
import {Selector} from "./Selector";
import {Button} from "antd";

export const Manipulator = ({
    handler,
    dispatchFunction,
    id,
    message,
    name,
    buttonText,
    values
    }) => {

    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(dispatchFunction(id));
    }

    return (
        <>
            <Selector
                message={message}
                name={name}
                values={values}
                changeHandler={handler}/>
            <div className="w-100">
                <Button
                    className="ant-btn mx-auto"
                    onClick={handleSubmit}
                    type="primary">
                    {buttonText}
                </Button>
            </div>
        </>
    )
}