import React from 'react';
import { Table } from 'antd';
import logo from './Mtest.png';

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
            title: '사고력(무료)',
            dataIndex: 'first',
            render: renderContent,
        },
        {
            title: '연산',
            dataIndex: 'second',
            render: renderContent,
        },
        {
            title: '교과',
            dataIndex: 'third',
            render: renderContent,
        },
        {
            title: '경시/심화',
            dataIndex: 'fourth',
            render: renderContent,
        },
    ];

    const data = [
        {
            key: '1',
            first: '초등 A',
            second: '1~6 단계',
            third: '1~6 단계',
            fourth: '초등 하'
        },
        {
            key: '2',
            first: '초등 B',
            second: '7~12 단계',
            third: '7~12 단계',
            fourth: '초등 중'
        },
        {
            key: '3',
            second: '13~18 단계',
            third: '13~18 단계',
            fourth: '초등 상'
        },
        {
            key: '4',
            second: '19~24 단계',
            third: '19~24 단계',
            fourth: '중등 1'
        },
        {
            key: '5',
            second: '25~30 단계',
            third: '25~30 단계',
            fourth: '중등 2'
        },
        {
            key: '6',
            third: '31~36 단계',
            fourth: '중등 3'
        },
    ];
    return (
        <div style={{textAlign:"center"}}>
            <img
                src={logo}
                alt="Canvas Logo"
            />
        <Table columns={columns} dataSource={data} bordered />
        </div>
    )
}

export default LandingPage
