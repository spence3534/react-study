import React, { Fragment, useState, useEffect } from "react";
import Head from "next/head";
import { Row, Col, List, Icon, Breadcrumb, Affix } from "antd";
import Header from "../components/header";
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import "../static/styles/pages/comm.css";
import axios from 'axios';
import moment from 'moment';
import servicePath from '../config/api';
import Link from 'next/link';

const MyList = (list) => {
  const [mylist, setMylist] = useState([]);
  useEffect(() => {
    setMylist(list.data);
  })
  return (
    <Fragment>
      <Head>
        <title>List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Affix offsetTop={0}>
        <Header />
      </Affix>
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div className="bread-div">
            <Breadcrumb>
              <Breadcrumb.Item>
                <a href="/">首页</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>视频列表</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <List
            header={<h2>文章列表</h2>}
            itemLayout="vertical"
            dataSource={mylist}
            renderItem={item => (
              <List.Item>
                <div className="list-title">
                  <Link href={ {pathname: '/detailed', query:{ id:item.id } }}>
                    <a>{item.title}</a>
                  </Link>
                </div>
                <div className="list-icon">
                  <span>
                    <Icon type="calendar" />
                    &nbsp;&nbsp;
                    {moment(parseInt(item.addTime * 1000)).format("YYYY-MM-DD")}
                  </span>
                  <span>
                    <Icon type="folder" />
                    &nbsp;&nbsp;文章
                  </span>
                  <span>
                    <Icon type="fire" />
                    &nbsp;&nbsp;{ item.view_count }人
                  </span>
                </div>
                <div className="list-context">{item.introduce}</div>
              </List.Item>
            )}
          />
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
      </Row>
      <Footer />
    </Fragment>
  );
};
MyList.getInitialProps = async (context) => {
  let id = context.query.id;
  const promise = new Promise(resolve => {
    axios(servicePath.getListById + id)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        alert(err, "网络出错");
      });
  });
  return await promise;
};

export default MyList;
