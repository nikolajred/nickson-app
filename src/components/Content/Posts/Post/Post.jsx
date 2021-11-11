import React from 'react';
import classes from './Post.module.css'
import ava from "../../../../img/ava.png";

const Post = (props) =>{
    return(
        <div className = {classes.item}>
            <img src={ava} className={classes.ava} alt="avatar"/>
            <span>
                {props.message}
            </span>
            <div className={classes.like}>
               like {props.like}
            </div>
        </div>
    )};

export default Post;