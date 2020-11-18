import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div style={{ textAlign: 'center', color: 'white' }}>
    <h1>REACT IS WORKING THOUGH</h1>
    <p>We can almost do anything here</p>
  </div>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
