import React from 'react';
import {Col, Button, Layout, Menu, Row} from "antd";
import {links} from "./additional/service";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {unlog} from "../../store/user/userActions";

const {Header} = Layout;

export const Navbar = () => {

    const dispatch = useDispatch();
    const user = useSelector(store => store.user);

    const handleUnlog = () => {
        dispatch(unlog())
    }

    return (
        <Header>
            <div className="logo"/>
            <Row>
                <Col span={20}>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
                        {links(user)
                            .map((link, index) =>
                                <Menu.Item key={index}>
                                    <Link to={link.path}>
                                        {link.label}
                                    </Link>
                                </Menu.Item>
                            )}
                    </Menu>
                </Col>
                <Col span={4}>
                    {!!user.userCredentials ?
                        <Button
                            onClick={handleUnlog}
                            type="dashed"
                            ghost>
                            Вийти
                        </Button>
                        : null}
                </Col>
            </Row>
        </Header>
    )
}