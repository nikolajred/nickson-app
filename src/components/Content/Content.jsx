import React from 'react';
import ocean from "../../img/ocean.jpg";
import avatar from "../../img/avatar.jpg";
import classes from './Content.module.css';
import Posts from "./Posts/Posts";

const Content = () =>{
    return(
        <div>
        <img src={ocean} className={classes.content_ocean} alt="ocean" />
        <div>
            <img src={avatar} className={classes.content_avatar} alt="avatar"/>
            <div className={classes.description}>
                <h2>Василий Петренко</h2>
                <h3>Дата рождения: 01 августа 1983г.</h3>
                <h3>г. Харьков</h3>
                <h3>Украина</h3>
                <h3>Харьковский полетехнический институт</h3>
            </div>
        </div>
        <Posts/>
    </div>);
}
export default Content;