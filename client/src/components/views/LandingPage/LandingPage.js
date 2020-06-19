import React from 'react';
import { Table, Menu } from 'antd';
import logo from './Mtest.png';
import "./LandingPage.css";

const SubMenu = Menu.SubMenu;

function LandingPage(props) {

    const renderContent = (value, row, index) => {
        const obj = {
            children: value,
            props: {},
        };
        return obj;
    };

    const columns = [
        {
            title: '사고력 (무료)',
            dataIndex: 'first',
            className: 'first',
            render: renderContent,
        },
        {
            title: '연산',
            dataIndex: 'second',
            className: 'second',
            render: renderContent,
        },
        {
            title: '교과',
            dataIndex: 'third',
            className: 'third',
            render: renderContent,
        },
        {
            title: '경시/심화',
            dataIndex: 'fourth',
            className: 'fourth',
            render: renderContent,
        },
    ];

    const data = [
        {
            key: '1',
            first: '초등 A',
            second:
                <Menu mode='horizontal'>
                    <SubMenu title={<span>1~6 단계</span>}>
                        <Menu.Item><a href='/test/a1'>1단계</a></Menu.Item>
                        <Menu.Item>2단계</Menu.Item>
                        <Menu.Item>3단계</Menu.Item>
                        <Menu.Item>4단계</Menu.Item>
                        <Menu.Item>5단계</Menu.Item>
                        <Menu.Item>6단계</Menu.Item>
                    </SubMenu>
                </Menu>
            ,
            third:
                <Menu mode='horizontal'>
                    <SubMenu title={<span>1~6 단계</span>}>
                        <Menu.Item>1단계</Menu.Item>
                        <Menu.Item><a href='/test/d2'>2단계</a></Menu.Item>
                        <Menu.Item>3단계</Menu.Item>
                        <Menu.Item>4단계</Menu.Item>
                        <Menu.Item>5단계</Menu.Item>
                        <Menu.Item>6단계</Menu.Item>
                    </SubMenu>
                </Menu>
            ,
            fourth: '초등 하'
        },
        {
            key: '2',
            first: '초등 B',
            second:
                <Menu mode='horizontal'>
                    <SubMenu title={<span>7~12 단계</span>}>
                        <Menu.Item>7단계</Menu.Item>
                        <Menu.Item>8단계</Menu.Item>
                        <Menu.Item>9단계</Menu.Item>
                        <Menu.Item>10단계</Menu.Item>
                        <Menu.Item>11단계</Menu.Item>
                        <Menu.Item>12단계</Menu.Item>
                    </SubMenu>
                </Menu>
            ,
            third:
                <Menu mode='horizontal'>
                    <SubMenu title={<span>7~12 단계</span>}>
                        <Menu.Item>7단계</Menu.Item>
                        <Menu.Item>8단계</Menu.Item>
                        <Menu.Item>9단계</Menu.Item>
                        <Menu.Item>10단계</Menu.Item>
                        <Menu.Item>11단계</Menu.Item>
                        <Menu.Item>12단계</Menu.Item>
                    </SubMenu>
                </Menu>
            ,
            fourth: '초등 중'
        },
        {
            key: '3',
            second:
                <Menu mode='horizontal'>
                    <SubMenu title={<span>13~18 단계</span>}>
                        <Menu.Item>13단계</Menu.Item>
                        <Menu.Item>14단계</Menu.Item>
                        <Menu.Item>15단계</Menu.Item>
                        <Menu.Item>16단계</Menu.Item>
                        <Menu.Item>17단계</Menu.Item>
                        <Menu.Item>18단계</Menu.Item>
                    </SubMenu>
                </Menu>
            ,
            third:
                <Menu mode='horizontal'>
                    <SubMenu title={<span>13~18 단계</span>}>
                        <Menu.Item>13단계</Menu.Item>
                        <Menu.Item>14단계</Menu.Item>
                        <Menu.Item>15단계</Menu.Item>
                        <Menu.Item>16단계</Menu.Item>
                        <Menu.Item>17단계</Menu.Item>
                        <Menu.Item>18단계</Menu.Item>
                    </SubMenu>
                </Menu>
            ,
            fourth: '초등 상'
        },
        {
            key: '4',
            second:
                <Menu mode='horizontal'>
                    <SubMenu title={<span>19~24 단계</span>}>
                        <Menu.Item>19단계</Menu.Item>
                        <Menu.Item>20단계</Menu.Item>
                        <Menu.Item>21단계</Menu.Item>
                        <Menu.Item>22단계</Menu.Item>
                        <Menu.Item>23단계</Menu.Item>
                        <Menu.Item>24단계</Menu.Item>
                    </SubMenu>
                </Menu>
            ,
            third:
                <Menu mode='horizontal'>
                    <SubMenu title={<span>19~24 단계</span>}>
                        <Menu.Item>19단계</Menu.Item>
                        <Menu.Item>20단계</Menu.Item>
                        <Menu.Item>21단계</Menu.Item>
                        <Menu.Item>22단계</Menu.Item>
                        <Menu.Item>23단계</Menu.Item>
                        <Menu.Item>24단계</Menu.Item>
                    </SubMenu>
                </Menu>
            ,
            fourth: '중등 1'
        },
        {
            key: '5',
            second:
                <Menu mode='horizontal'>
                    <SubMenu title={<span>25~30 단계</span>}>
                        <Menu.Item>25단계</Menu.Item>
                        <Menu.Item>26단계</Menu.Item>
                        <Menu.Item>27단계</Menu.Item>
                        <Menu.Item>28단계</Menu.Item>
                        <Menu.Item>29단계</Menu.Item>
                        <Menu.Item>30단계</Menu.Item>
                    </SubMenu>
                </Menu>
            ,
            third:
                <Menu mode='horizontal'>
                    <SubMenu title={<span>25~30 단계</span>}>
                        <Menu.Item>25단계</Menu.Item>
                        <Menu.Item>26단계</Menu.Item>
                        <Menu.Item>27단계</Menu.Item>
                        <Menu.Item>28단계</Menu.Item>
                        <Menu.Item>29단계</Menu.Item>
                        <Menu.Item>30단계</Menu.Item>
                    </SubMenu>
                </Menu>
            ,
            fourth: '중등 2'
        },
        {
            key: '6',
            third:
                <Menu mode='horizontal'>
                    <SubMenu title={<span>31~36 단계</span>}>
                        <Menu.Item>31단계</Menu.Item>
                        <Menu.Item>32단계</Menu.Item>
                        <Menu.Item>33단계</Menu.Item>
                        <Menu.Item>34단계</Menu.Item>
                        <Menu.Item>35단계</Menu.Item>
                        <Menu.Item>36단계</Menu.Item>
                    </SubMenu>
                </Menu>
            ,
            fourth: '중등 3'
        },
    ];
    return (
        <div style={{ textAlign: "center" }}>
            <img
                src={logo}
                alt="Canvas Logo"
            />
            <Table columns={columns} dataSource={data} bordered
                pagination={{ hideOnSinglePage: true }}
                className='time-table-row-select'
                onRow={(record, rowIndex) => {
                    return {
                        onClick: event => { }, // click row
                        onDoubleClick: event => { }, // double click row
                        onContextMenu: event => { }, // right button click row
                        onMouseEnter: event => { }, // mouse enter row
                        onMouseLeave: event => { }, // mouse leave row
                    };
                }}
                onHeaderRow={column => {
                    return {
                        onClick: () => { }, // click header row
                    };
                }}
            />
        </div>
    )
}

export default LandingPage
