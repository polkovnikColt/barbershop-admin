import {Input} from "antd";

export const columns = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name"
    },
    {
        title: "Duration",
        dataIndex: "duration",
        key: "duration"
    },
    {
        title: "Price",
        dataIndex: "price",
        key: "price"
    },
]

export const procedureFormData = [
    {
        label: "Name",
        name: "name",
        message: "",
        inputComponent: Input
    },
    {
        label: "Duration",
        name: "duration",
        message: "",
        inputComponent: Input
    },
    {
        label: "Price",
        name: "price",
        message: "",
        inputComponent: Input
    }
]

export const getNames = (procedures) => {
    return procedures.map(proc => proc.name);
}