import React, {useState} from 'react';
import {Space, Row, Button, Input, Layout} from "antd";
import {MainForm} from "../../components/forms/MainForm";
import {formData, keyWord} from "./additional/service";

const {Content} = Layout;

//TODO create CUD operations
export const RegistrationPage = () => {
    const [key, setKey] = useState('');
    const [hasKey, setHasKey] = useState(false);

    const keyHandler = (e) => {
        setKey(e.target.value);
    }

    const keySubmit = () => {
        const isKeyCorrect = key === keyWord;
        if (isKeyCorrect) {
            setHasKey(true);
        } else {
            alert("Ключ-слово некоректне")
        }
    }

    const handleChange = () => {

    }

    const handleSubmit = () => {

    }

    return (
        <Content style={{minHeight: window.innerHeight}}>
            {!hasKey &&
            <>
                <h3 className="text-center m-1">
                    If you want to create an admin account firstly input the keyword
                </h3>
                <Row className="form-padding ">
                    <Space className="mx-auto">
                        <Input
                            style={{width: window.innerWidth / 2}}
                            onChange={keyHandler}
                        />
                        <Button
                            onClick={keySubmit}
                            type="dashed"
                            ghost>
                            Прийняти
                        </Button>
                    </Space>
                </Row>
            </>}
            {hasKey &&
            <MainForm
                formData={formData}
                hasSelector={false}
                hasCheckBox={false}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
            />}
        </Content>
    );
}