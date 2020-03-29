import { takeEvery, put } from 'redux-saga/effects';
import { GET_MY_LIST } from './actionTypes';
import axios from 'axios'
import { getListAction } from './actionCreators';

function* mySaga() {
  // 等待捕获action
  yield takeEvery(GET_MY_LIST, getList);
}
// eslint-disable-next-line require-yield
function* getList() {
  const res = yield axios.get("/mock/getList.json");
  const action = getListAction(res.data.data);
  yield put(action);
}
export default mySaga;