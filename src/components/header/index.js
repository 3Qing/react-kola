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
                <div className="header-wrapper clear">
                    <ul className="hd-left left clear">
                        <li><span>考拉欢迎你！</span></li>
                        <li><Link to="/">登录</Link></li>
                        <li><Link to="/">免费注册</Link></li>
                    </ul>
                    <ul className="hd-right right clear">
                        <li><Link to="#">我的订单</Link></li>
                        <li>
                            <Dropdown overlay={center}>
                                <Link to="#">个人中心<Icon type="down" /></Link>
                            </Dropdown>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;
