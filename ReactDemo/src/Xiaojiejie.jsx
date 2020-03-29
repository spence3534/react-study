import React, { Component, Fragment } from 'react';
import XiaojiejieItem from './XiaojiejieItem';
import Boss from "./Boss";
import axios from 'axios';
import './style.styl';
import { CSSTransition, TransitionGroup } from "react-transition-group"

class Xiaojiejie extends Component {
  constructor(props) {
    super(props);
    this.inputChange = this.inputChange.bind(this);
    this.addList = this.addList.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.state = {
      inputValue: "",
      list: []
    };
  }
  /**
   * React 生命周期函数-- Mounting阶段(挂载阶段)
   * componentWillMount：组件即将被挂载到页面的时刻执行
   * render：页面state或props发生变化时执行
   * componentDidMount：组件挂载完成时刻执行
   */
  componentWillMount() {}
  componentDidMount() {
    axios
      .get(
        "https://www.easy-mock.com/mock/5dbc5d131e7593458081addc/ReactDataMock/xiaojiejie"
      )
      .then(res => {
        console.log("返回数据成功", res.data.data);
        this.setState({
          list: res.data.data
        })
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    // render函数是只要state和props变化就会执行
    console.log("3-render---------组件挂载中");
    return (
      <Fragment>
        <div>
          {/* 使用ref获取input里的值 */}
          <input
            className="input"
            value={this.state.inputValue}
            onChange={this.inputChange}
            ref={input => {
              this.input = input;
            }}
          />
          <button onClick={this.addList}>增加服务</button>
        </div>
          {/* 使用ref获取list里有多少个children */}
        <ul ref={ul => (this.ul = ul)}>
          <TransitionGroup>
            {this.state.list.map((item, index) => {
              return (
                <CSSTransition
                  timeout={ 1000 }
                  classNames="boss-text"
                  unmountOnExit
                  appear={ true }
                  key={ index + item }
                >
                  <XiaojiejieItem
                    content={item}
                    key={index + item}
                    index={index}
                    deleteItem={this.deleteItem}
                  />
                </CSSTransition>
              );
              {
                /*
                  (
                    <li 
                      key={index + item}
                      onClick={ this.deleteItem.bind(this, index) }
                      dangerouslySetInnerHTML={{__html:item}}
                    >
                    </li>
                  );
                */
              }
            })}
          </TransitionGroup>
        </ul>
        <Boss />
      </Fragment>
    );
  }

  /**
   * React 生命周期函数 -- Updation阶段(组件发生改变的更新阶段)
   * 有两部分，一个是props属性改变，一个是state状态改变
   * showldComponentUpdate：组件发生改变执行
   * componentWillUpdate：组件更新前执行 showldComponentUpdate函数之后执行
   * render：开始挂载渲染
   * componentDidUpdate：组件更新之后执行
   * componentWillReceiveProps：子组件接收到父组件传递过来的参数，父组件render函数
   * 重新执行，这个生命周期才会被执行
   */
  shouldComponentUpdate() {
    /**
     * 要求返回一个布尔类型的结果，必须返回值，这里就直接返回一个true了 其实在真实开发中，
     * 有很大的用处。简单点说，返回true就是同意组件更新，false就是返回组件更新
     */
    console.log("1-showldComponentUpdate-------组件发生改变执行");
    return true;
  }
  componentWillUpdate() {
    // 如果shouldComponentUpdate返回false，componentWillUpdate函数不会执行
  }
  componentDidUpdate() {
    // 组件更新之后执行
  }
  componentWillReceiveProps() {
    /**
     * 这个生命周期在render初始化的时候不会执行，它会在组件接受新状态(Props)时被触发
     * 一般用于父组件状态更新子组件重新渲染时使用。因而这个组件是顶级组件所以在这里不
     * 会触发，把它放到子组件里面去就能看到效果
     */
  }
  /**
   * React生命周期函数 -- Unmounting(组件去除时执行)
   * componentWillUnmount：组件去除时执行
   */
  componentWillUnmount() {
    // 这里做个展示 我就写到子组件里面去了。
  }
  // input事件
  inputChange() {
    this.setState({
      inputValue: this.input.value
    });
  }
  // 添加服务
  addList() {
    this.setState(
      {
        list: [...this.state.list, this.state.inputValue]
      },
      () => {
        // 需要在setState里的回调函数里去打印。因为setState是异步函数，
        // 如果你是在setState外面打印会造成未知的bug。
        console.log(this.ul.querySelectorAll("div").length);
      }
    );
  }
  // 删除单项服务
  deleteItem(index) {
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list: list
    });
  }
}

export default Xiaojiejie