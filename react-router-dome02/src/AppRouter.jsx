import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from './Page/index';
import Video from './Page/Video';
import WorkPlace from './Page/WorkPlace';
import './index.css';

function AppRouter() {
  let routerConfig = [
    {
      path: "/",
      title: "博客首页",
      exact:true,
      component: Index
    },
    {
      path: "/video/",
      title: "视频教程",
      exact: false,
      component: Video
    },
    {
      path: "/workplace/",
      title: "职场技能",
      exact: false,
      component: WorkPlace
    }
  ]
  return (
    <Router>
      <div className="mainDiv">
        <div className="leftNav">
          <h3>一级导航</h3>
          <ul>
              {/* Link组件是进行路由之间的导航 */}
              {
                routerConfig.map((item, index) => {
                  return(
                    <li key={ index }>
                      <Link to={ item.path }>
                        { item.title }
                      </Link>
                    </li>
                  )
                })
              }
          </ul>
        </div>
        <div className="rightMain">
          {/* Route组件是定义路由匹配和渲染内容 */}
          {
            routerConfig.map((item, index) => {
              return (
                <Route 
                  path={ item.path } 
                  exact={ item.exact } 
                  component={ item.component } 
                />
              )
            })
          }
        </div>
      </div>
    </Router>
  )
}
 
export default AppRouter;