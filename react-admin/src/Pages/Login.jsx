import React, { useState } from 'react';
import { Button, Icon, Spin, Input, Card, message } from 'antd';
import "antd/dist/antd.css";
import "../static/css/login.css";
import axios from 'axios';
import servicePath from '../config/apiUrl';
function Login(props) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoding] = useState(false); 

  // 登录按钮点击事件
  const handleLogin = () => {
    setIsLoding(true);
    if (!userName) {
      message.error('用户名不能为空');
      setIsLoding(false);
      return false;
    } else if (!password) {
      message.error('密码不能为空');
      setIsLoding(false);
      return false;
    }
    let dataProps = {
      'userName': userName,
      'password': password
    }
    axios({
      method: 'post',
      url: servicePath.checkLogin,
      data: dataProps,
      withCredentials: true
    })
    .then(res => {
      console.log('返回数据成功', res.data);
      setIsLoding(false);
      if (res.data.data === '登录成功') {
        localStorage.setItem('openId', res.data.openId);
        props.history.push('/index');
      } else {
        message.error('用户名密码错误');
      }
    })
    .catch(err => {
      console.log(err);
      setIsLoding(false);
    })
  }
  return (
    <div className="login-div">
      <Spin tip="Loading..." spinning={ isLoading }>
        <Card bordered={ true } title="xiaoLi Blog System" style={{ width:400 }}>
          <Input
            id="userName"
            size="large"
            placeholder="Enter your userName"
            prefix={ <Icon type="user" style={{ color:'rgba(0,0,0,0.25)' }}/> }
            onChange={ (e)=>{ setUserName(e.target.value) } } 
          />
          <br/><br/>
          <Input.Password
            id="password"
            size="large"
            placeholder="Enter your password"
            prefix={ <Icon type="lock" style={{ color:'rgba(0,0,0,0.25)' }}/> }
            onChange={ (e)=>{ setPassword(e.target.value) } } 
          />
          <br/><br/>
          <Button block type="primary" size="large" onClick={ handleLogin }>Login in</Button>
        </Card>
      </Spin>
    </div>
  )
};

export default Login;