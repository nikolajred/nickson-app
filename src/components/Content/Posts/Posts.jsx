import React from 'react';
import classes from './Posts.module.css';
import Post from './Post/Post'

const Posts = () => {
    const PostsData = [
        {id: '1', post: 'Hello!', like : '10' },
        {id: '2', post: 'How are you?', like : '13' },
    ]
    return (
        <div className={classes.posts}>
            <p>My posts</p>
            <textarea></textarea>
            <button>Submit</button>

            <Post message={PostsData[0].post} like= {PostsData[0].like}/>
            <Post message={PostsData[1].post} like= {PostsData[1].like}/>
        </div>);
}
export default Posts;