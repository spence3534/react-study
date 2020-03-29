import React, { Component } from 'react';
import PropTypes from "prop-types"; // 父组件向子组件传值校验
class XiaojiejieItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    console.log("children----render");
    return (
      <div onClick={this.handleClick}>
        {this.props.avname}为你做-{this.props.content}
      </div>
    );
  }
  /**
   * nextProps：变化后的属性
   * nextState：变化后的状态
   */
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true;
    } else {
      return false;
    }
  }
  // 点击事件
  handleClick() {
    this.props.deleteItem(this.props.index);
  }
}

XiaojiejieItem.propTypes = {
  avname:PropTypes.string.isRequired, // 必须传递对应的值
  content:PropTypes.string,
  deleteItem:PropTypes.func,
  index:PropTypes.number
}

// 默认值
XiaojiejieItem.defaultProps = {
  avname: "松岛枫"
}
export default XiaojiejieItem;