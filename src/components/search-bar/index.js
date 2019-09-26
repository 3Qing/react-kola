import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './img/logo.png';
import Cart from './img/cart.png';
import { Input, Icon } from 'antd';
import './index.less';

class SearchBar extends React.Component {
    render() {
        return (
            <div className="search-bar">
                <Link to="/" className="logo"><img src={Logo} alt="Logo"/></Link>
                <div className="search-wrapper">
                    <Input className="input" prefix={<Icon type="search" />} suffix={<Icon type="search" />}></Input>
                    <ul className="tag-list clear">
                        <li className="left"><Link to="/">面膜</Link></li>
                    </ul>
                </div>
                <Link className="shop-cart" to="/"><img src={Cart} alt="cart"/><span>购物车</span></Link>
            </div>
        );
    }
}
export default SearchBar;
