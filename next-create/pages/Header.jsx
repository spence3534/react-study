//import Head from 'next/head';
// next.js 定义Head 有利于SEO next.js的最大特点
import { Button } from 'antd';
/** 
 * 这里不安装@zeit/next-css的话，直接在组件引入css会报错
 * 还要在根目录创建一个next.config.js进行配置
 */
import "./test.css";

import Myhead from './component/Myhead' // 这里是全局Head组件
function Header() {
  return (
    <div>
      <Myhead/>
      <Button>我是一个按钮</Button>
      <div className="text">next.com</div>
    </div>
  );
}

export default Header;