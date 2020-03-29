import React, { Component } from 'react';
import store from './store';
import {
  getMyListAction,
  changInputAction,
  addItemAction,
  deleteItemAction,
} from "./store/actionCreators";
import TodoListUI from "./TodoListUI"

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.changeInput = this.changeInput.bind(this);
    this.storeChange = this.storeChange.bind(this);
    this.handleBtn = this.handleBtn.bind(this);
    store.subscribe(this.storeChange);
  }
  render() {
    return (
      <TodoListUI
        list={this.state.list}
        inputValue={this.state.inputValue}
        changeInput={this.changeInput}
        handleBtn={this.handleBtn}
        deleteItem={this.deleteItem}
      />
    );
  }
  componentDidMount() {
    const action = getMyListAction();
    store.dispatch(action);
    console.log(action);
    // const action = getTodoList();
    // store.dispatch(action);
  }
  changeInput(e) {
    // 想要改变redux里State的值就要创建Action，Action是一个对象，里面有两个属性
    // 一个是type：对action的描述。第二个是要改变的值
    const action = changInputAction(e.target.value)
    // 通过dispatch()方法传递给store
    store.dispatch(action);
  }
  // 重新setState一次实现组件改变
  storeChange() {
    this.setState(store.getState());
  }
  // 增加按钮点击事件
  handleBtn() {
    const action = addItemAction();
    store.dispatch(action);
  }
  // 删除列表
  deleteItem(index) {
    const action = deleteItemAction(index);
    store.dispatch(action);
  }
}
 
export default TodoList;