import React, { useState, useEffect } from 'react';
import { Row, Col, Menu, Icon } from 'antd';
import '../static/styles/components/header.css';
import servicePath from '../config/api';
import axios from 'axios';
import Router from 'next/router';
import Link from 'next/link';

const Header = () => {
  const [navArray, setNavArray] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(servicePath.getTypeInfo).then(
        res => {
        return res.data.data
      })
      .catch(err => {
        alert(err, "网络出错");
      })
      setNavArray(result);
    }
    fetchData();
  },[]);

  const handleClick = (e) => {
    if (e.key == 0) { 
      Router.push('/index');
     } else {
      Router.push('/list?id=' + e.key);
    }
  }

  return (
    <div className="header">
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <span className="header-logo">技术胖</span>
          <span className="header-txt">专注前端开发，每年100集免费视频</span>
        </Col>
        <Col xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal" onClick={ handleClick }>
            {
              navArray.map((item, index) => {
                return(
                  <Menu.Item key={ index }>
                    <Icon type={ item.icon } />
                    { item.typeName }
                  </Menu.Item>
                )
              })
            }
          </Menu>
        </Col>
      </Row>
    </div>
  );
}

export default Header;