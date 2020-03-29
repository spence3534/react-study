import React, { Fragment, useState } from 'react';
import ChidComponet from './ChidComponet';

function Example7() {
  const [xiaohong, setXiaohong] = useState('小红待客状态');
  const [zhiling, setZhiling] = useState('志玲待客状态')
  return(
    <Fragment>
      <button onClick={ () => { setXiaohong(new Date().getTime()) } }>
        小红
      </button>
      <button onClick={() => { setZhiling(new Date().getTime() + '志玲向我们走来了') }}>
        志玲
      </button>
      <ChidComponet name={ xiaohong }>{ zhiling }</ChidComponet>
    </Fragment>
  )
}
export default Example7;