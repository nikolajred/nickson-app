import React from 'react';
import classes from './Posts.module.css';
import Post from './Post/Post'


const Posts = (props) => {

    const PostsElements = props.posts.map(posts =>
        <Post message={posts.post} like={posts.like}/>
    );

    let newRef = React.createRef();

    let addPost = () => {
        props.addNewPost();

    };

    let onChangePost = () => {
        let text = newRef.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={classes.posts}>
            <p>My posts</p>
            <textarea ref={newRef} onChange={onChangePost} value={props.newPostText}/>
            <br/>
            <button onClick={addPost}>Submit</button>
            {PostsElements}
        </div>)
};
export default Posts;