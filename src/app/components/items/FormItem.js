import React, {Component, ForwardRefExoticComponent} from 'react';
import {DatePicker, Form, Input} from "antd";
import {Moment} from 'moment';



export const FormItem =
    ({name,label,message,InputComponent, changeHandler,}) => {

    const handleChange = (e) => {
        changeHandler(name, e.target.value);
    }

    const handleMoment = (value, dateString) => {
        changeHandler(name, dateString);
    }

    return (
        <Form.Item
            label={label}
            name={name}
            rules={[{required: true, message: message}]}
        >
            <InputComponent onChange={name === 'day' || name === 'time' ? handleMoment : handleChange}/>
        </Form.Item>)
}