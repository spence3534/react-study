import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Index() {
  useEffect(() => {
    console.log("useEffect=> 老弟，你来了！Index页面")
    return () => {
      console.log("老弟，你走了！Index页面");
    }
  }, [])
  return (
    <div>Index</div>
  );
}

function List() {
  useEffect(() => {
    console.log("useEffect => 老弟，你来了！List页面")
    return () => {
      console.log("老弟，你走了！List页面");
    }
  }, [])
  return (
    <div>List page</div>
  )
}

function Example() {
  const [count, setCount] = useState(0);
  // useEffect用法 代替了生命周期函数
  useEffect(() => {
    console.log(`useEffect=> You clicked ${count} times`);
  },[count])
  // hook重写后
  return (
    <div>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => { setCount(count + 1) }}>click me</button>
      </div>
      <Router>
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/list/">列表</Link>
          </li>
        </ul>
        <Route path="/" exact component={ Index }/>
        <Route path="/list/" component={ List } />
      </Router>
    </div>
  );
}

/**
  原始写法
  class Example extends Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 }
    }
    render() {
      return (
        <div>
          <p>You clicked { this.state.count } times</p>
          <button onClick={ this.handleCount.bind(this) }>click me</button>
        </div>
      );
    }
    handleCount() {
      this.setState({
        count:this.state.count + 1
      })
    }
  }
*/
export default Example;