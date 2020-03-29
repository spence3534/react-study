import {
  CHANGE_INPUT,
  ADD_ITEM,
  DELETE_ITEM,
  GET_LIST
} from "./actionTypes";
// 默认数据
const defaultState = {
  inputValue: "Write something",
  list: []
}
export default (state = defaultState, action) => { // 一个方法函数
  // state：指的是原始仓库里的状态。action：指的是action新传递的状态
  if (action.type === CHANGE_INPUT) {
    let newState = JSON.parse(JSON.stringify(state)) // 深度拷贝state
    // Reducer里只能接收state，不能改变state;
    newState.inputValue = action.value;
    return newState;
  }

  // 往list里添加数据
  if (action.type === ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue);
    newState.inputValue = ''
    return newState;
  }

  // 删除list里的数据
  if (action.type === DELETE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState
  }
  if (action.type === GET_LIST) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data.list;
    return newState;
  }
  return state
}