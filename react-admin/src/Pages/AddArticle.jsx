import React, { useState, useEffect } from 'react';
import marked from 'marked';
import '../static/css/AddArticle.css';
import { Row, Col, Input, Select, Button, DatePicker, message } from 'antd';
import locale from "antd/es/date-picker/locale/zh_CN";
import axios from 'axios';
import servicePath from '../config/apiUrl';
import { OmitProps } from 'antd/lib/transfer/renderListBody';
const { TextArea } = Input;
const { Option } = Select;

function AddArticle() {

  const [articleId, setArticleId] = useState(0) // 文章ID，如果是0说明是新增加，如果不是0，说明是修改
  const [articleTitle, setArticleTitle] = useState('') // 文章标题
  const [articleContent, setArticleContent] = useState('') // markdown的编辑内容
  const [markdownContent, setMarkdownContent] = useState('预览内容') // html内容
  const [introducemd, setIntroducemd] = useState() // 简介的markdown内容
  const [introducehtml, setIntroducehtml] = useState('等待编辑') // 简介的html内容
  const [showDate, setShowDate] = useState() // 发布日期
  const [updateDate, setUpdateDate] = useState() // 修改日志的日期
  const [typeInfo, setTypeInfo] = useState([]) // 文章类别信息
  const [selecteType, setSeleceType] = useState("请选择类型") // 选择的文章类别

  marked.setOptions({
    renderer: marked.Renderer(),
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
  });

  // 文章内容change事件
  const changeContent = (e) => {
    setArticleContent(e.target.value);
    let html = marked(e.target.value);
    setMarkdownContent(html);
  }

  // 文章简介change事件
  const changeIntroduce = (e) => {
    setIntroducemd(e.target.value);
    let html = marked(e.target.value);
    setIntroducehtml(html);
  }

  // 选择类别后的事件
  const selecteTypeHandler = (value) => {
    setSeleceType(value);
  }

  // 从中台得到文章类别的信息
  const getTypeInfo = () => {
    axios({
      method: 'get',
      url:servicePath.getTypeInfo,
      header: { 'Access-Control-Allow-Origin':'*' },
      withCredentials: true
    }).then(res => {
      if (res.data.data == "没有登录") {
        localStorage.removeItem("openId");
        OmitProps.history.push('/');
      } else {
        console.log("返回数据成功", res.data);
        setTypeInfo(res.data.data);
      }
    })
  }

  const saveAtricle = () => {
    if (!selecteType) {
      message.error("请选择文章类别");
      return false
    } else if (!articleTitle) {
      message.error("文章名称不能为空");
      return false
    } else if (!articleContent) {
      message.error("文章内容不能为空");
      return false
    } else if(!introducemd) {
      message.error("简介不能为空")
      return false
    } else if (!showDate) {
      message.error("发布日期不能为空")
      return false
    }
    let dataProps = {} // 传递到接口的参数
    dataProps.type_id = selecteType;
    dataProps.title = articleTitle;
    dataProps.article_content = articleContent;
    dataProps.introduce = introducemd;

    let datetext = showDate.replace('-', '/') // 把字符串转换成时间戳
    dataProps.addTime = (new Date(datetext).getTime()) / 1000

    if (articleId == 0) {
      console.log("articleId=：" + articleId);
      dataProps.view_count = Math.ceil(Math.random() * 100) + 1000
      axios({
        method: 'post',
        url:servicePath.addArticle,
        data:dataProps,
        withCredentials: true
      }).then(res => {
        setArticleId(res.data.insertId)
        if (res.data.isSuccess) {
          message.success("文章保存成功");
        } else {
          console.log("进入0")
          message.error("文章保存失败");
        }
      })
    } else {
      dataProps.id = articleId;
      axios({
        method: 'post',
        url: servicePath.updateArticle,
        header: { 'Access-Control-Allow-Origin': '*' },
        data:dataProps,
        withCredentials: true
      }).then(res => {
        if (res.data.isSuccess) {
          message.success("文章保存成功");
        } else {
          console.log("进入1");
          message.error("文章保存失败");
        }
      })
    }
  }
  // React Hooks声明周期
  useEffect(()=> {
    getTypeInfo()
  }, [])

  return (
    <div>
      <Row gutter={5}>
        <Col span={18}>
          <Row gutter={10} className="header-input">
            <Col span={20}>
              <Input 
                placeholder="博客标题" 
                size="large"
                onChange= {
                  e =>{ setArticleTitle(e.target.value) }
                }
              />
            </Col>
            <Col span={4}>
              <Select defaultValue={selecteType} size="large" onChange={ selecteTypeHandler }>
                {
                  typeInfo.map((item, index) => {
                    return (<Option key={ index } value={ item.Id }>{ item.typeName }</Option>)
                  })
                }
              </Select>
            </Col>
          </Row>
          <Row gutter={10}>
            <Col span={12}>
              <TextArea
                className="markdown-content"
                placeholder="文章内容"
                onChange={changeContent}
                rows={35}
              />
            </Col>
            <Col span={12}>
              <div 
                className="show-html"
                dangerouslySetInnerHTML={{ __html: markdownContent }}
              >
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={6}>
          <Row>
            <Col span={24} className="AddArticle-btn">
              <Button size="large" style={{ marginRight: "10px" }}>
                暂存文章
              </Button>
              <Button type="primary" size="large" onClick={saveAtricle }>
                发布文章
              </Button>
            </Col>
            <Col span={24}>
              <TextArea
                className="Article-profiles"
                rows={4}
                placeholder="文章简介"
                onChange={changeIntroduce}
              />
              <div 
                className="introduce-html"
                dangerouslySetInnerHTML={{ __html:'文章简介' + introducehtml }}
              ></div>
            </Col>
            <Col span={12}>
              <div className="date-selece">
                <DatePicker
                  onChange={(date, dateString) => setShowDate(dateString)}
                  locale={locale}
                  placeholder="发布日期"
                  size="large"
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default AddArticle;