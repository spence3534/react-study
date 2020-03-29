import React, { Fragment } from 'react';
import Link from 'next/link';
import Router from 'next/router';

const Home = () => {
  function gotoPage(path) {
    Router.push(path);
  }
  return (
    <Fragment>
      <div>我是首页</div>
      <div>
        {/* 
        Link标签有个小坑，不支持兄弟标签并列的情况 
        比如：
        <Link href='/vuePage'>
          <span>去vue页面</span>
          <span>去vue页面</span>
        </Link>
        需要在两个标签外边套多一个父标签 用a标签最好不过
      */}
        <Link href='/vuePage'><a>去vue页面</a></Link>
        <Link href='/reactPage'><a>去react页面</a></Link>
      </div>
      {/* next的编程式跳转，也可以用一个函数来封装，达到复用效果 */}
      <button onClick={() => { gotoPage('/vuePage') }}>去vue页面</button>
      <button onClick={() => { gotoPage('/reactPage') }}>去react页面</button>
    </Fragment>
  )
}

export default Home;
