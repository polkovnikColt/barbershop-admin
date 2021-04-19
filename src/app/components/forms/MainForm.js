import React from "react";
import  {Checkbox,Form, Button, Select} from "antd";
import {Selector} from "../items/Selector";
import {FormItem} from "../items/FormItem";
import "../styles/styles.scss"

export const MainForm = ({
 formData,
 handleChange = () => {},
 handleSubmit = () => {},
 values = [],
 selectorHandler = () => {},
 keys = [],
 hasSelector,
 hasCheckBox,
 checkBoxHandler = () => {},
 checkboxMessage = ""
 }) => {
    return(
        <>
            <div
                className="form-padding mx-auto">
                {hasSelector && <Selector
                    message={keys}
                    values={values}
                    name={keys}
                    key={keys}
                    changeHandler={selectorHandler}/>}
                {formData.map((item, index) =>
                    <FormItem
                        name={item.name}
                        label={item.label}
                        message={item.message}
                        InputComponent={item.inputComponent}
                        key={index}
                        changeHandler={handleChange}/>
                )}
            </div>
            {hasCheckBox &&
            <div className="m-1">
                <Checkbox onClick={checkBoxHandler}/>
                <span>{checkboxMessage}</span>

            </div>}
            <div className="w-100">
                <Button
                    className="mx-auto"
                    onClick={handleSubmit}
                    type="primary">
                    Submit
                </Button>
            </div>
        </>
    )
}