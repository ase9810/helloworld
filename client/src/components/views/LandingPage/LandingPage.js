import React from 'react';
import { Table, Menu, Dropdown } from 'antd';
import logo from './Mtest.png';
import "./LandingPage.css";
import { Link } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';

function LandingPage() {

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
                <Dropdown overlay={
                    <Menu>
                        <Menu.Item><Link to='/test/a1'>1단계</Link></Menu.Item><Menu.Divider />
                        <Menu.Item><Link to='/test/a2'>2단계</Link></Menu.Item><Menu.Divider />
                        <Menu.Item><Link to='/test/a3'>3단계</Link></Menu.Item><Menu.Divider />
                        <Menu.Item><Link to='/test/a4'>4단계</Link></Menu.Item><Menu.Divider />
                        <Menu.Item><Link to='/test/b1'>5단계</Link></Menu.Item><Menu.Divider />
                        <Menu.Item><Link to='/test/b2'>6단계</Link></Menu.Item>
                    </Menu>
                } trigger={['click']}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()} href="#/">
                        1~6단계 <DownOutlined />
                    </a>
                </Dropdown>,
            third:
                <Dropdown overlay={
                    <Menu>
                        <Menu.Item>1단계</Menu.Item><Menu.Divider />
                        <Menu.Item>2단계</Menu.Item><Menu.Divider />
                        <Menu.Item>3단계</Menu.Item><Menu.Divider />
                        <Menu.Item>4단계</Menu.Item><Menu.Divider />
                        <Menu.Item>5단계</Menu.Item><Menu.Divider />
                        <Menu.Item>6단계</Menu.Item>
                    </Menu>
                } trigger={['click']}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()} href="#/">
                        1~6단계 <DownOutlined />
                    </a>
                </Dropdown>,
            fourth: '초등 하'
        },
        {
            key: '2',
            first: '초등 B',
            second:
                <Dropdown overlay={
                    <Menu>
                        <Menu.Item><Link to='/test/b3'>7단계</Link></Menu.Item><Menu.Divider />
                        <Menu.Item><Link to='/test/b4'>8단계</Link></Menu.Item><Menu.Divider />
                        <Menu.Item><Link to='/test/c1'>9단계</Link></Menu.Item><Menu.Divider />
                        <Menu.Item><Link to='/test/c2'>10단계</Link></Menu.Item><Menu.Divider />
                        <Menu.Item><Link to='/test/c3'>11단계</Link></Menu.Item><Menu.Divider />
                        <Menu.Item><Link to='/test/c4'>12단계</Link></Menu.Item>
                    </Menu>
                } trigger={['click']}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()} href="#/">
                        7~12단계 <DownOutlined />
                    </a>
                </Dropdown>
            ,
            third:
                <Dropdown overlay={
                    <Menu>
                        <Menu.Item>7단계</Menu.Item><Menu.Divider />
                        <Menu.Item>8단계</Menu.Item><Menu.Divider />
                        <Menu.Item>9단계</Menu.Item><Menu.Divider />
                        <Menu.Item>10단계</Menu.Item><Menu.Divider />
                        <Menu.Item>11단계</Menu.Item><Menu.Divider />
                        <Menu.Item>12단계</Menu.Item>
                    </Menu>
                } trigger={['click']}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()} href="#/">
                        7~12단계 <DownOutlined />
                    </a>
                </Dropdown>,
            fourth: '초등 중'
        },
        {
            key: '3',
            second:
                <Dropdown overlay={
                    <Menu>
                        <Menu.Item><Link to='/test/d1'>13단계</Link></Menu.Item><Menu.Divider />
                        <Menu.Item><Link to='/test/d2'>14단계</Link></Menu.Item><Menu.Divider />
                        <Menu.Item><Link to='/test/d3'>15단계</Link></Menu.Item><Menu.Divider />
                        <Menu.Item><Link to='/test/d4'>16단계</Link></Menu.Item><Menu.Divider />
                        <Menu.Item><Link to='/test/e1'>17단계</Link></Menu.Item><Menu.Divider />
                        <Menu.Item><Link to='/test/e2'>18단계</Link></Menu.Item>
                    </Menu>
                } trigger={['click']}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()} href="#/">
                        13~18단계 <DownOutlined />
                    </a>
                </Dropdown>,
            third:
                <Dropdown overlay={
                    <Menu>
                        <Menu.Item>13단계</Menu.Item><Menu.Divider />
                        <Menu.Item>14단계</Menu.Item><Menu.Divider />
                        <Menu.Item>15단계</Menu.Item><Menu.Divider />
                        <Menu.Item>16단계</Menu.Item><Menu.Divider />
                        <Menu.Item>17단계</Menu.Item><Menu.Divider />
                        <Menu.Item>18단계</Menu.Item>
                    </Menu>
                } trigger={['click']}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()} href="#/">
                        13~18단계 <DownOutlined />
                    </a>
                </Dropdown>,
            fourth: '초등 상'
        },
        {
            key: '4',
            second:
                <Dropdown overlay={
                    <Menu>
                        <Menu.Item><Link to='/test/e3'>19단계</Link></Menu.Item><Menu.Divider />
                        <Menu.Item><Link to='/test/e4'>20단계</Link></Menu.Item><Menu.Divider />
                        <Menu.Item><Link to='/test/f1'>21단계</Link></Menu.Item><Menu.Divider />
                        <Menu.Item><Link to='/test/f2'>22단계</Link></Menu.Item><Menu.Divider />
                        <Menu.Item><Link to='/test/f3'>23단계</Link></Menu.Item><Menu.Divider />
                        <Menu.Item><Link to='/test/f4'>24단계</Link></Menu.Item>
                    </Menu>
                } trigger={['click']}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()} href="#/">
                        19~24단계 <DownOutlined />
                    </a>
                </Dropdown>,
            third:
                <Dropdown overlay={
                    <Menu>
                        <Menu.Item>19단계</Menu.Item><Menu.Divider />
                        <Menu.Item>20단계</Menu.Item><Menu.Divider />
                        <Menu.Item>21단계</Menu.Item><Menu.Divider />
                        <Menu.Item>22단계</Menu.Item><Menu.Divider />
                        <Menu.Item>23단계</Menu.Item><Menu.Divider />
                        <Menu.Item>24단계</Menu.Item>
                    </Menu>
                } trigger={['click']}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()} href="#/">
                        19~24단계 <DownOutlined />
                    </a>
                </Dropdown>,
            fourth: '중등 1'
        },
        {
            key: '5',
            second:
                <Dropdown overlay={
                    <Menu>
                        <Menu.Item>25단계</Menu.Item><Menu.Divider />
                        <Menu.Item>26단계</Menu.Item><Menu.Divider />
                        <Menu.Item>27단계</Menu.Item><Menu.Divider />
                        <Menu.Item>28단계</Menu.Item><Menu.Divider />
                        <Menu.Item>29단계</Menu.Item><Menu.Divider />
                        <Menu.Item>30단계</Menu.Item>
                    </Menu>
                } trigger={['click']}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()} href="#/">
                        25~30단계 <DownOutlined />
                    </a>
                </Dropdown>,
            third:
                <Dropdown overlay={
                    <Menu>
                        <Menu.Item>25단계</Menu.Item><Menu.Divider />
                        <Menu.Item>26단계</Menu.Item><Menu.Divider />
                        <Menu.Item>27단계</Menu.Item><Menu.Divider />
                        <Menu.Item>28단계</Menu.Item><Menu.Divider />
                        <Menu.Item>29단계</Menu.Item><Menu.Divider />
                        <Menu.Item>30단계</Menu.Item>
                    </Menu>
                } trigger={['click']}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()} href="#/">
                        25~30단계 <DownOutlined />
                    </a>
                </Dropdown>,
            fourth: '중등 2'
        },
        {
            key: '6',
            third:
                <Dropdown overlay={
                    <Menu>
                        <Menu.Item key="0">31단계</Menu.Item><Menu.Divider />
                        <Menu.Item key="1">32단계</Menu.Item><Menu.Divider />
                        <Menu.Item key="2">33단계</Menu.Item><Menu.Divider />
                        <Menu.Item key="3">34단계</Menu.Item><Menu.Divider />
                        <Menu.Item key="4">35단계</Menu.Item><Menu.Divider />
                        <Menu.Item key="5">36단계</Menu.Item>
                    </Menu>
                } trigger={['click']}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()} href="#/">
                        31~36단계 <DownOutlined />
                    </a>
                </Dropdown>,
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
