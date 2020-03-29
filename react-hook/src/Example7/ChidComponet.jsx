import React, { useMemo } from 'react';

function ChidComponet({name, children}) {
  function changeXiaohong(name) {
    console.log('她来了，她来了。小红向我们走来了');
    return name + '小红向我们走来了'
  }
  // useMemo使用类似子组件的shouldComponentUpdate生命周期
  const actionXiaohong = useMemo(() => changeXiaohong(name), [name]);
  return (
    <div>
      <div>{ actionXiaohong }</div>
      <div>{ children }</div>
    </div>
  )
}
export default ChidComponet;