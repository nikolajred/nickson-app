import React from 'react';
import classes from './Posts.module.css';
import Post from './Post/Post'

const Posts = () =>{
    return(
        <div  className = {classes.posts}>

            <form action="post">
                <p>My posts</p>
                <input type="text"/>
                <br/>
                <button type= "submit">Submit</button>
            </form>
            <Post message = 'Hello!'/>
            <Post message = 'How are you?'/>
        </div>);
}
export default Posts;