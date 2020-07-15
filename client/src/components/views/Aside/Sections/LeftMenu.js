import React from 'react';
import { Menu } from 'antd';
import { useSelector } from 'react-redux';
const SubMenu = Menu.SubMenu;

function LeftMenu(props) {
    const user = useSelector(state => state.user)


    if (user.userData && !user.userData.isAuth) {
        return (
            <Menu mode={props.mode}>
                <Menu.Item key="1"><a href="/test">온라인 학습</a></Menu.Item>
                <SubMenu key="sub2" title="성적 열람">
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <SubMenu key="sub21" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu key="sub3" title="출석 체크">
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" title="일정/달력"></SubMenu>
                <SubMenu key="sub5" title="상담(문의)"></SubMenu>
                <SubMenu key="sub6" title="결제 내역"></SubMenu>
                <SubMenu key="sub7" title="게시판"></SubMenu>
            </Menu>
        )
    } else {
        return (
            <Menu mode={props.mode}>
                <SubMenu key="sub1" title="원 생">
                    <Menu.ItemGroup key="g1" title="Item 1">
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup key="g2" title="Item 2">
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <SubMenu key="sub2" title="수 업">
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <SubMenu key="sub21" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu key="sub3" title="강 사">
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" title="일정/달력"></SubMenu>
                <SubMenu key="sub5" title="평 가"></SubMenu>
                <SubMenu key="sub6" title="문 의"></SubMenu>
                <SubMenu key="sub7" title="자료실"></SubMenu>
                <SubMenu key="sub8" title="게시판"></SubMenu>
            </Menu>
        )
    }
}

export default LeftMenu