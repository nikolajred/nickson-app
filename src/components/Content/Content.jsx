import React from 'react';
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./Posts/Post/Post";

const Content = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <Posts posts={props.state.posts}/>
        </div>);
}
export default Content;