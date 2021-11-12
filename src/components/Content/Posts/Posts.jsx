import React from 'react';
import classes from './Posts.module.css';
import Post from './Post/Post'

const Posts = () => {
    return (
        <div className={classes.posts}>
            <p>My posts</p>
            <textarea></textarea>
            <br/>
            <button>Submit</button>

            <Post message='Hello!' like='10'/>
            <Post message='How are you?' like='3'/>
        </div>);
}
export default Posts;