import React from 'react';
import { Route, Link } from 'react-router-dom';
import '../index.css';
import Money from './workPlace/Money';
import Getup from './workPlace/Getup'

function WorkPlace() {
  return (
    <div>
      <div className="topNav">
        <ul>
          <li>
            <Link to='/workplace/money'>程序员加薪秘籍</Link>
          </li>
          <li>
            <Link to='/workplace/getup'>程序员早起攻略</Link>
          </li>
        </ul>
      </div>
      <div className="videoContent">
        <Route path="/workplace/money" component={ Money } />
        <Route path="/workplace/getup" component={ Getup } />
      </div>
    </div>
  );
}
export default WorkPlace;