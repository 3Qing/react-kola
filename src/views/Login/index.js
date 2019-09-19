import React from 'react';
import './login.less';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="login" >
        <div className="form-wrapper">
          <p className="form-title">登录</p>
        </div>
      </div>
    );
  }
}

export default Login;
