import React from 'react';
import { Route, Link } from 'react-router-dom';
import Vue from './video/Vue';
import ReactPage from './video/ReactPage';
import Flutter from './video/Flutter';
import '../index.css';

function Video() {
  return (
    <div>
      <div className="topNav">
        <ul>
          <li>
            <Link to="/video/vue">Vue教程</Link>
          </li>
          <li>
            <Link to="/video/reactpage">React教程</Link>
          </li>
          <li>
            <Link to="/video/flutter">Flutter教程</Link>
          </li>
        </ul>
      </div>
      <div>
        <Route path="/video/vue" component={ Vue } />
        <Route path="/video/reactpage" component={ ReactPage } />
        <Route path="/video/flutter" component={ Flutter } />
      </div>
    </div>
  )
}

export default Video;