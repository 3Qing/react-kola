import React from 'react';
import { Link } from 'react-router-dom';
import './header.less';
import { Menu, Dropdown, Icon } from 'antd';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { Item } = Menu;
        const center = (
            <Menu>
                <Item>我的优惠券</Item>
                <Item>我的红包</Item>
            </Menu>
        );
        return (
            <div className="header">
                <div className="header-wrapper">
                    <div className="hd-left">
                        <span>考拉欢迎你！</span>
                        <Link to="/">登录</Link>
                        <Link to="/">免费注册</Link>
                    </div>
                    <div className="hd-right">
                        <Link>我的订单</Link>
                        <Dropdown overlay={center}>
                            <Link>个人中心<Icon type="down" /></Link>
                        </Dropdown>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
