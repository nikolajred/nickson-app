import React from 'react';
import eagle from "../../img/eagle.png";
import classes from './Header.module.css';

const Header = () =>{
    return(
        <header className={classes.header}>
            <img src={eagle} alt="eagle" />
            <h1>Eagles</h1>
    </header>);
}
export default Header;