import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {addNewPost} from './../src/redux/state';
import {addNewMessage, updateNewMessageText, updateNewPostText} from "./redux/state";

export let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addNewPost={addNewPost}
                 addNewMessage={addNewMessage}
                 updateNewPostText ={updateNewPostText}
                 updateNewMessageText={updateNewMessageText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}





