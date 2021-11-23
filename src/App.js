import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import Dialogs from './components/Dialogs/Dialogs';

import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import {BrowserRouter, Routes, Route} from "react-router-dom";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/" element={<Content state={props.state.contentPage}
                                                          newPostText={props.state.contentPage.newPostText}
                                                          updateNewPostText={props.updateNewPostText}
                                                          addNewPost={props.addNewPost}

                        />}/>
                        <Route path="/dialogs" element={<Dialogs state={props.state.dialogsPage}
                                                                 newMessage={props.state.dialogsPage.newMessage}
                                                                 addNewMessage={props.addNewMessage}
                                                                 updateNewMessageText={props.updateNewMessageText}
                        />}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
};

export default App;
