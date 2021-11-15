import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {addNewPost} from './../src/redux/state';

// addNewPost('I am here');

ReactDOM.render(

  <React.StrictMode>
    <App state={state} addNewPost={addNewPost}/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
