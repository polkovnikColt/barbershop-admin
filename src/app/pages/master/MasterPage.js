import React from "react";
import {Table, Layout} from "antd";
import {column} from "./additional/service";
import {useSelector} from "react-redux";
import {usePreload} from "../../hooks/usePreLoad";
import {loadAllMasters, updateProcedure} from "../../store/user/userActions";
import {Accordion} from "../../components/accordion/Collapse";
import {MainForm} from "../../components/forms/MainForm";
import {getNames} from "./additional/service";
import {Manipulator} from "../../components/items/Manipulator";

const {Content} = Layout;

//TODO create CUD operations
export const MasterPage = () => {

    const user = useSelector(store => store.user);

    usePreload(loadAllMasters);

    const changeHandler = () => {

    }

    const submitHandler = () => {

    }

    const selectorHandler = () => {

    }

    return (
        <Content
            style={{minHeight: window.innerHeight}}>
            <div className="form-padding">
                <div className="m-1">
                    <Accordion text="Update master credentials">
                        <MainForm
                            formData={[]}
                            hasSelector={true}
                            hasCheckBox={false}
                            handleChange={changeHandler}
                            handleSubmit={submitHandler}
                            selectorHandler={selectorHandler}
                            values={getNames(user.allMasters)}
                            keys="Master's name"
                        />
                    </Accordion>
                    <Accordion text="Add master">
                        <MainForm
                            formData={[]}
                            hasSelector={false}
                            hasCheckBox={false}
                            handleChange={changeHandler}
                            handleSubmit={submitHandler}
                        />
                    </Accordion>
                    <Accordion text="Delete master">
                        <Manipulator
                            values={getNames(user.allMasters)}
                            name="Delete"
                            id={0}
                            buttonText="Delete"
                            dispatchFunction={updateProcedure}
                            handler={selectorHandler}
                            message="Delete master"
                        />
                    </Accordion>
                </div>
                <Table
                    dataSource={user.allMasters}
                    columns={column}/>
            </div>
        </Content>
    )
}