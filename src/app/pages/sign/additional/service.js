import {DatePicker, Input} from "antd";
import {TimePicker} from "antd/es";


export const columns = [
    {
        title: "Record Time",
        dataIndex: "recordTime",
        key: "recordTime"
    },
    {
        title: "Procedure Start",
        dataIndex: "procedureStart",
        key: "procedureStart"
    },
    {
        title: "Procedure Finish",
        dataIndex: "procedureFinish",
        key: "procedureFinish"
    },
]

export const signFormData = [
    {
        label: "Record day",
        name: "day",
        message: "",
        inputComponent: DatePicker
    },
    {
        label: "Record time",
        name: "time",
        message: "",
        inputComponent: TimePicker
    }
]

export const getSignsTime = allSign => allSign.map(sign => transformTimeData(sign.recordTime));

export const getDefaultSignsTime = allSign => allSign.map(sign => sign.recordTime);

const transformTimeData = time => {
    return time.replace("T", "\n").replace("Z", "").split('.')[0]
};

export const validate = (time) => {
    console.log(time);
    const correctDay = time.day !== "";
    const correctTime = time.time !== "";
    return correctDay && correctTime;
}

export const transform = data => {
    data.recordTime = transformTimeData(data.recordTime);
    data.procedureStart = transformTimeData(data.procedureStart);
    data.procedureFinish = transformTimeData(data.procedureFinish);
    return data;
}
