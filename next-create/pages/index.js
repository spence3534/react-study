import React, { Fragment } from 'react';
import Link from 'next/link';
import Router from 'next/router';

/**
  路由-- 六个钩子事件
  Router.events.on('routerChangeStart', (...args) => {
    console.log('1.routerChangeStart->路由开始变化，参数为', ...args);
  })
  Router.events.on('routerChangeComplete', (...args) => {
    console.log('2.routerChangeComplete->路由结束变化，参数为', ...args);
  })
  Router.events.on('beforeHistoryChange', (...args) => {
    console.log('3.beforeHistoryChange->在改变浏览器history之前触发，参数为', ...args);
  })
  Router.events.on('routeChangeError', (...args) => {
    // 如果页面是404这个钩子是不会执行的，这个钩子也不好测试
    console.log('4.routeChangeError->跳转发生错误，参数为', ...args);
  })
  Router.events.on('hashChangeStart', (...args) => {
    // 如果页面是404这个钩子是不会执行的，这个钩子也不好测试
    console.log('5.hashChangeStart->hash跳转开始时执行，参数为:', ...args);
  })
  Router.events.on('hashChangeComplete', (...args) => {
    // 如果页面是404这个钩子是不会执行的，这个钩子也不好测试
    console.log('6.hashChangeComplete->hash跳转完成时，参数为:', ...args);
  })
 */
const Home = () => {
  function gotoPage (name, query) {
    Router.push({
      pathname: name,
      query: {
        name:query
      }
    });
  }
  
  return (
    <Fragment>
      <div>
        我是首页
      </div>
      <Link href={{ pathname:'/vuePage', query:{ name: 'vue' } }}>
        <a>选择vue.js</a>
      </Link>
      <br/>
      < Link href={{ pathname:'/vuePage', query:{ name: 'react' } }}>
        <a>选择react.js</a> 
      </Link>
      <button onClick={()=>{gotoPage('/vuePage','vue')}}>选择vue</button>
      <button onClick={()=>{gotoPage('/vuePage','react')}}>选择react</button>
      <div>
        <Link href="#javascript">
          <a>
            选JavaScript
          </a>
        </Link>
      </div>
    </Fragment>
  )
}

export default Home;