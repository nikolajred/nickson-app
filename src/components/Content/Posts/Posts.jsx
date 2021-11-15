import React from 'react';
import classes from './Posts.module.css';
import Post from './Post/Post'

const Posts = (props) => {

    const PostsElements = props.posts.map(posts =>
        <Post message={posts.post} like= {posts.like}/>
    );
    let newRef = React.createRef(), addPost = () => {
        // let post = document.getElementById('post-area').value;
        let newPost = newRef.current.value;
        alert(newPost);
    };
    return (
        <div className={classes.posts}>
            <p>My posts</p>
            <textarea ref={newRef}></textarea>
            <br/>
            <button onClick={addPost}>Submit</button>
            {PostsElements}
        </div>)
};
export default Posts;