import React, { useState, createContext, useContext } from 'react';

function Count() {
  // 使用useContext接收上下文变量
  const count = useContext(CountContext);
  return (
    <h2>{count}</h2>
  )
}
// creactContext用于允许变量跨层级实现传递和使用，就是实现上下文的意思
// 当父组件的变量count发生变化，子组件的也会发生变化
const CountContext = createContext();

function Example2() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => { setCount(count + 1) }}>click me</button>
      <CountContext.Provider value={ count }>
        <Count />
      </CountContext.Provider>
    </div>
  )
}
export default Example2;