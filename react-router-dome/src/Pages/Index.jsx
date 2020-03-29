import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      list:[
        {
          cid: 123,
          title: 'javascript'
        },
        {
          cid: 456,
          title: 'vue.js'
        },
        {
          cid: 789,
          title: 'react.js'
        }
      ]
    }
    // 编程式重定向导航
    // this.props.history.push('/home/');
  }
  render() { 
    return ( 
      <div>
        {/* 组件式重定向 */}
        <Redirect to='/home/' />
        <div>hello world</div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li key={ index }>
                  <Link to={'/list/' + item.cid}>{ item.title }</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}
 
export default Index;
