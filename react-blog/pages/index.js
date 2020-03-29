import React, { Fragment, useState, useEffect } from 'react';
import Head from 'next/head';
import { Row, Col, List, Icon, Affix } from 'antd';
import Link from 'next/link';
import axios from 'axios';
import moment from 'moment';
import Header from '../components/header';
import Author from '../components/Author';
import Advert from '../components/Advert';
import Footer from '../components/Footer';
import '../static/styles/pages/comm.css';
import servicePath from '../config/api';
import marked from 'marked';
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";

const Home = (list) => {
  const renderer = new marked.Renderer();
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }
  });
  const [mylist, setMylist] = useState(list.data);
  return (
    <Fragment>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Affix offsetTop={ 0 }>
        <Header />
      </Affix>
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={ 24 } sm={ 24 } md={ 16 } lg={ 18 } xl={ 14 }>
          <List
            header={ <h2>最近日志</h2> }
            itemLayout="vertical"
            dataSource={ mylist }
            renderItem={ item=>(
              <List.Item>
                <div className="list-title">
                  <Link href={ {pathname: "/detailed", query:{ id: item.id } }}>
                    <a>{ item.title }</a>
                  </Link>
                </div>
                <div className="list-icon">
                  <span><Icon type="calendar" />
                  &nbsp;&nbsp;{ moment(parseInt(item.addTime * 1000)).format("YYYY-MM-DD") }
                  </span>
                  <span><Icon type="folder" />&nbsp;&nbsp;视频教程</span>
                  <span><Icon type="fire" />&nbsp;&nbsp;{ item.view_count }人</span>
                </div>
                <div className="list-context"
                  dangerouslySetInnerHTML={{__html:marked(item.introduce)}}
                ></div>
              </List.Item>
            ) }
          />
        </Col>
        <Col className="comm-right" xs={ 0 } sm={ 0 } md={ 7 } lg={ 5 } xl={ 4 }>
          <Author />
          <Advert />
        </Col>
      </Row>
      <Footer />
    </Fragment>
  );
}

Home.getInitialProps = async ()=> {
  let promise = new Promise((resolve, reject) => {
    axios.get(servicePath.getArticleList)
    .then(res => {
      console.log("返回数据成功", res.data);
      resolve(res.data);
    })
    .catch(err => {
      alert(err, '网络连接失败')
    })
  })

  return promise;
}

export default Home;
