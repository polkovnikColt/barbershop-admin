import React, {useState} from "react";
import {Row,Layout} from "antd";
import {Label} from "../../components/labels/Label";
import {MainForm} from "../../components/forms/MainForm";
import '../../components/styles/styles.scss';
import {formData} from "./additional/service";
import {useDispatch} from "react-redux";
import {login} from "../../store/user/userActions";

const {Content} = Layout;

export const HomePage = () => {

    const dispatch = useDispatch();
    const [user,setUser] = useState({
        email:"",
        password: ""
    });

    const handleSubmit = () => {
        dispatch(login(user));
    }

    const handleChange = (name,value) => {
        setUser({...user, [name]: value})
    }

    return (
        <Content style={{minHeight: window.innerHeight}}>
            <h3
                className="text-center m-1">
                Hello! You don't have an account? So,
                <Label
                    type="link"
                    path="/registration">
                    create it!
                </Label>
            </h3>
                <MainForm
                    formData={formData}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    hasCheckBox={false}
                    hasSelector={false}
                />
        </Content>
    )

}