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



const App = () => {
    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <BrowserRouter>
                    <Routes>
                        <Route path="/"  element={<Content/>}/>
                        <Route path="/dialogs"  element={<Dialogs/>}/>
                        <Route path="/news"  element={<News/>}/>
                        <Route path="/music"  element={<Music/>}/>
                        <Route path="/settings"  element={<Settings/>}/>
                    </Routes>
                </BrowserRouter>
            </div>

        </div>


    )
};

export default App;
