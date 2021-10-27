import React from 'react';
import eagle from "../../eagle.png";
import classes from './Header.module.css';

const Header = () =>{
    return(
        <header className={classes.header}>
            <img src={eagle} className={classes.App-eagle} alt="eagle" />
            <h1>Eagles</h1>
    </header>);
}
export default Header;