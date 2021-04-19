import {Input} from "antd";

export const formData = [
    {
        label:"Email",
        name:"email",
        message:"",
        inputComponent: Input
    },
    {
        label:"Пароль",
        name:"password",
        message:"",
        inputComponent: Input.Password
    },
]