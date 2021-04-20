import React, {useState} from "react";
import {Table, Layout} from "antd";
import {column, masterCred, masterFormData} from "./additional/service";
import {useDispatch, useSelector} from "react-redux";
import {usePreload} from "../../hooks/usePreLoad";
import {addMaster, deleteMaster, loadAllMasters, updateMaster} from "../../store/user/userActions";
import {Accordion} from "../../components/accordion/Collapse";
import {MainForm} from "../../components/forms/MainForm";
import {getNames} from "./additional/service";
import {Manipulator} from "../../components/items/Manipulator";

const {Content} = Layout;

//TODO create CUD operations
export const MasterPage = () => {

    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const [masterId,setMasterId] = useState(0);
    const [master,setMaster] = useState(masterCred);

    usePreload(loadAllMasters);

    const changeHandler = (name,value) => {
        setMaster({...master, [name]:value});
    }

    const addHandler = () => {
        dispatch(addMaster(master));
    }

    const updateHandler = () => {
        master.accountId = masterId;
        dispatch(updateMaster(master));
    }

    const selectorHandler = (_,masterName) => {
        const masterF = user.allMasters.filter(
            master => {
              return  master.firstName.concat(" ", master.lastName) === masterName
            }
        )[0];
        setMasterId(masterF.accountId);
        setMaster({...master,...masterF})
    }

    return (
        <Content
            style={{minHeight: window.innerHeight}}>
            <div className="form-padding">
                <div className="m-1">
                    <Accordion text="Update master credentials">
                        <MainForm
                            formData={masterFormData}
                            hasSelector={true}
                            hasCheckBox={false}
                            handleChange={changeHandler}
                            handleSubmit={updateHandler}
                            selectorHandler={selectorHandler}
                            values={getNames(user.allMasters)}
                            keys="Master's name"
                        />
                    </Accordion>
                    <Accordion text="Add master">
                        <MainForm
                            formData={masterFormData}
                            hasSelector={false}
                            hasCheckBox={false}
                            handleChange={changeHandler}
                            handleSubmit={addHandler}
                        />
                    </Accordion>
                    <Accordion text="Delete master">
                        <Manipulator
                            values={getNames(user.allMasters)}
                            name="Delete"
                            id={masterId}
                            buttonText="Delete"
                            dispatchFunction={deleteMaster}
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