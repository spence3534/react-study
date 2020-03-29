import { createStore, applyMiddleware, compose } from 'redux'; // 引入createStore方法
// import thunk from "redux-thunk"; redux中间件
import renducer from './reducer';
import createSagaMiddleware from 'redux-saga'; // redux中间件
import mySages from './sagas'

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
// 注意 createStore()方法只接收两个参数
const store = createStore(
  renducer,
  enhancer
  // 如果浏览器安装了redux devtools 这里需要配置
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); // 创建数据存储仓库

sagaMiddleware.run(mySages);
export default store // 暴露出去