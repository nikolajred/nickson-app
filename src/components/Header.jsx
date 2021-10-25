import React from 'react';
import eagle from "../eagle.png";

const Header = () =>{
    return(
        <header className="header">
            <img src={eagle} className="App-eagle" alt="eagle" />
            <h1>Eagles</h1>
    </header>);
}
export default Header;