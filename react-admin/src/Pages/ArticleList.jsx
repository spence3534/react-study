import React, { useState, useEffect } from "react";
import { List, Row, Modal, Col, message, Button, Switch } from "antd";
import axios from 'axios';
import servicePath from '../config/apiUrl';
const { confirm } = Modal;

function ArticleList(props) {
  const [list, setList] = useState([])
  return (
    <div>
      <List
        header={
          <Row className="list-div">
            <Col span={8}>
              <b>标题</b>
            </Col>
            <Col span={3}>
              <b>类别</b>
            </Col>
            <Col span={3}>
              <b>发布时间</b>
            </Col>
            <Col span={3}>
              <b>集数</b>
            </Col>
            <Col span={3}>
              <b>浏览量</b>
            </Col>
            <Col span={3}>
              <b>操作</b>
            </Col>
          </Row>
        }
        bordered
        dataSource={list}
        renderItem={item => (
          <List.Item>
            <Row className="list-div">
              <Col span={8}>{item.title}</Col>
              <Col span={3}>{item.typeName}</Col>
              <Col span={3}>{item.addTime}</Col>
              <Col span={3}>{item.part_count}</Col>
              <Col span={3}>{item.view_cout}</Col>
              <Col span={4}>
                <Button type="primary">修改</Button>&nbsp;&nbsp;
                <Button type="primary">删除</Button>
              </Col>
            </Row>
          </List.Item>
        )}
      />
    </div>
  );
}

export default ArticleList;