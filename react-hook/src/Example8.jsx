import React, { useRef, useState, useEffect, Fragment } from 'react';

function Example8() {
  // useRef的用法 和ref的用法都差不多 但是比ref要好
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.value = "Hello React";
  }
  const [text, setText] = useState('React.js');
  const textRef = useRef();
  useEffect(() => {
    textRef.current = text;
    console.log(textRef.current);
  })
  return (
    <Fragment>
      <input ref={ inputEl } type="text"/>
      <button onClick={ onButtonClick }>在input上展示文字</button>
      <br/>
      <br/>
      <input value={ text } onChange={ (e) => { setText(e.target.value) } } type="text"/>
    </Fragment>
  )
};

export default Example8;