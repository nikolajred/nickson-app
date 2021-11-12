import React from 'react';
import classes from './Posts.module.css';
import Post from './Post/Post'

const Posts = () => {
    const PostsData = [
        {id: '1', post: 'Hello!', like : '10' },
        {id: '2', post: 'How are you?', like : '13' },
    ];
    const PostsElements = PostsData.map(post =>
        <Post message={post.post} like= {post.like}/>
    );
    return (
        <div className={classes.posts}>
            <p>My posts</p>
            <textarea></textarea>
            <button>Submit</button>
            {PostsElements}
        </div>);
}
export default Posts;