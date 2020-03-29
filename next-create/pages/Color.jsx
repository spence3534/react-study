import React, { useState } from 'react';

function Color() {
  const [color, setColor] = useState('blue');

  const changeColor=()=>{
    setColor(color=='blue' ? 'red': 'blue');
  }

  return (
    <div>
      <div>学习Next.js</div>
      <div>
        <button onClick={changeColor}>改变字体颜色</button>
      </div>
      {/* next.js使用css样式 */}
      <style jsx>
        {`
          div {
            color: ${color};
          }
        `}
      </style>
    </div>
  );
}
export default Color;