import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const posts = [
    {id: '1', post: 'Hello!', like : '10' },
    {id: '2', post: 'How are you?', like : '13' },
];

const DialogsData = [
    {id: '1', name: 'Nikolas'},
    {id: '2', name: 'Ivan'},
    {id: '3', name: 'Sandra'},
    {id: '4', name: 'Maxim'},
    {id: '5', name: 'Masha'},
    {id: '6', name: 'Valera'},
];

const MessagesData = [
    {id: '1', message: 'Hi!'},
    {id: '2', message: 'How are you?'},
    {id: '3', message: 'Glad to see you!'}
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={DialogsData} messages={MessagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
