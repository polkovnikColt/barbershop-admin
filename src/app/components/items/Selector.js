import React from "react";
import {Select} from "antd";

export const Selector = ({message, values, name, changeHandler}) => {

    const handleChange = (e) => {
        if (changeHandler && name) changeHandler(name, e.toString());
    }

    return (
        <div
            className="mx-auto selector-width ">
            <span className="m-1">{message}</span>
            <Select
                className="m-1 selector-width"
                onChange={handleChange}
                defaultValue="none"
            >
                {values && values.map((item, i) => {
                    return <Select.Option value={item} key={i}>{item}</Select.Option>
                })}
            </Select>
        </div>
    )
}