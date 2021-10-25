import React from 'react';
import ocean from "../ocean.jpg";
import avatar from "../avatar.jpg";
import classes from './Content.module.css';

const Content = () =>{
    return(
        <div className={classes.content}>
        <img src={ocean} className={classes.content_ocean} alt="ocean" />
        <div>
            <img src={avatar} className={classes.content_avatar} alt="avatar"/>
            <div>
                <h2>Василий Петренко</h2>
                <h3>Дата рождения: 01 августа 1983г.</h3>
                <h3>г. Харьков</h3>
                <h3>Украина</h3>
                <h3>Харьковский полетехнический институт</h3>
            </div>
        </div>
        <div>My posts
            <div>newPost1</div>
            <div>newPost2</div>
        </div>
    </div>);
}
export default Content;