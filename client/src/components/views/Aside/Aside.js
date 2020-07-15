import React from 'react';
import { Drawer, Button, Icon } from 'antd';
import { useState } from 'react';
import LeftMenu from './Sections/LeftMenu';

function Aside() {

    const [visible, setVisible] = useState(false)

    const showDrawer = () => {
        setVisible(true)
    };

    const onClose = () => {
        setVisible(false)
    };

    return (
        <div className="menu__container">
            <div className="menu_left" style={{width:256}}>
            <LeftMenu mode="inline"/>
            </div>
            <Button
                className="menu__mobile-button"
                type="primary"
                onClick={showDrawer}
                style={{ float: "left" }}
            >
                <Icon type="align-left" />
            </Button>
            <Drawer
                title="Basic Drawer"
                placement="left"
                className="menu_drawer"
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                <LeftMenu mode="inline"/>
            </Drawer>
        </div>
    )
}

export default Aside
