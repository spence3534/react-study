import React, { useState } from 'react';
import dynamic from 'next/dynamic'; // 使用dynamic实现组件懒加载

// 使用dynamic
const LazyComponent = dynamic(import('./component/LazyComponent'));

function Time() {
  const [nowtime, setTime] = useState(Date.now());

  const changeTime = async () => { // 把方法变成异步模式
    // next.js实现懒加载
    const moment = await import('moment'); // 等待moment加载完成
    setTime(moment.default(Date.now()).format()) // 注意使用default
  }

  return(
    <div>
      <div>现在的时间是：{ nowtime }</div>
      <LazyComponent />
      <button onClick={ changeTime }>改变时间</button>
    </div>
  )
}

export default Time;