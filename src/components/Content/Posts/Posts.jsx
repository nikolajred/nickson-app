import React from 'react';
import classes from './Posts.module.css';
import Post from './Post/Post'

const Posts = (props) => {

    const PostsElements = props.posts.map(posts =>
        <Post message={posts.post} like= {posts.like}/>
    );
    return (
        <div className={classes.posts}>
            <p>My posts</p>
            <textarea></textarea>
            <button>Submit</button>
            {PostsElements}
        </div>)
};
export default Posts;