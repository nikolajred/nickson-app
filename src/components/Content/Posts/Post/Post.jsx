import React from 'react';
import classes from './Post.module.css'

const Post = (props) =>{
    return(
        <div className = {classes.item}>
            <span>
                {props.message}
            </span>
        </div>
    )};

export default Post;