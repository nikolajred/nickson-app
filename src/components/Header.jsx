import React from 'react';
import eagle from "../eagle.png";

const Header = () =>{
    return(
        <header className="header">
        <div>
            <img src={eagle} className="App-eagle" alt="eagle" />
        </div>
    </header>);
}
export default Header;