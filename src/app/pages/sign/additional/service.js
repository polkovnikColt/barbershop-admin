import {DatePicker, Input} from "antd";
import {TimePicker} from "antd/es";


export const columns = [
    {
        title:"Record Time",
        dataIndex:"recordTime",
        key:"recordTime"
    },
    {
        title:"Procedure Start",
        dataIndex:"procedureStart",
        key:"procedureStart"
    },
    {
        title:"Procedure Finish",
        dataIndex:"procedureFinish",
        key:"procedureFinish"
    },
]

export const signFormData = [
    {
        label: "Record day",
        name: "recordDay",
        message: "",
        inputComponent: DatePicker
    },
    {
        label: "Record time",
        name: "recordTime",
        message: "",
        inputComponent: TimePicker
    }
]

export const getSignsTime = allSign => allSign.map(sign => transformTimeData(sign.recordTime));

export const getDefaultSignsTime = allSign => allSign.map(sign => sign.recordTime);

const transformTimeData = time => time.replace("T","\n").replace("Z", "").split('.')[0];

export const transform = data => {
    data.recordTime = transformTimeData(data.recordTime);
    data.procedureStart = transformTimeData(data.procedureStart);
    data.procedureFinish = transformTimeData(data.procedureFinish);
    return data;
}
