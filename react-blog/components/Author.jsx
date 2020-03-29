import React from 'react'
import { Avatar, Divider } from 'antd'
import '../static/styles/components/author.css';

const Author = () => {
  return (
    <div className="author-div comm-box">
      <div className="author-login">
        <Avatar size={90} src="../static/images/login.jpg" />
      </div>
      <div className="author-introduction">
        WEB前端工程师
        <Divider>社交账号</Divider>
        <Avatar size={28} icon="github" className="account" />
        <Avatar size={28} icon="qq" className="account" />
        <Avatar size={28} icon="wechat" className="account" />
      </div>
    </div>
  );
}

export default Author;