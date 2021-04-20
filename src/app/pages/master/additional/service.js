import {Input} from "antd";

export const column = [
    {
        title: "First Name",
        dataIndex: "firstName",
        key: "firstName"
    },
    {
        title: "Last Name",
        dataIndex: "lastName",
        key: "lastName"
    },
    {
        title: "Work Experience",
        dataIndex: "workExperience",
        key: "workExperience"
    },
    {
        title: "Rating",
        dataIndex: "rating",
        key: "rating"
    },
]

export const masterFormData = [
    {
        label: "FirstName",
        name: "firstName",
        message: "",
        inputComponent: Input
    },
    {
        label: "Last Name",
        name: "lastName",
        message: "",
        inputComponent: Input
    },
    {
        label: "Age",
        name: "age",
        message: "",
        inputComponent: Input
    },
    {
        label: "Gender",
        name: "gender",
        message: "",
        inputComponent: Input
    },
    {
        label: "Email",
        name: "email",
        message: "",
        inputComponent: Input
    },
    {
        label: "Password",
        name: "price",
        message: "",
        inputComponent: Input.Password
    },
    {
        label: "Work Experience",
        name: "workExperience",
        message: "",
        inputComponent: Input
    },
    {
        label: "Rating",
        name: "rating",
        message: "",
        inputComponent: Input
    },
    {
        label: "Phone",
        name: "phoneNumber",
        message: "",
        inputComponent: Input
    }
]

export const masterCred = {
    firstName:"",
    lastName:"",
    age:"",
    gender:"",
    email:"",
    password:"",
    workExperience:"",
    rating:"",
    phoneNumber:""
}

export const getNames = allMasters => {
    return allMasters.map(master => master.firstName.concat(" ", master.lastName));
}