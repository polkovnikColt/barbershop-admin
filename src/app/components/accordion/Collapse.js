import React from 'react';
import {Collapse} from "antd";

const {Panel} = Collapse;

export const Accordion = ({children,text}) => {
    return(
        <Collapse
            defaultActiveKey={[]} >
            <Panel header={text} key="1">
                <div>{children}</div>
            </Panel>
        </Collapse>
    )
}