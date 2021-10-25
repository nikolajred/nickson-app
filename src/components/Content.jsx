import React from 'react';
import ocean from "../ocean.jpg";

const Content = () =>{
    return(
        <div className="content">
        <img src={ocean} className="App-ocean" alt="ocean" />
        <div>Avatar + discription</div>
        <div>My posts
            <div>newPost1</div>
            <div>newPost2</div>
        </div>
    </div>);
}
export default Content;