import React from 'react';
import classes from './Navbar.module.css';
import {Link} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <nav>
                <Link className={classes.item} to="/content">Profile</Link>
                <Link className={classes.item} to="/dialogs">Dialogs</Link>
                <Link className={classes.item} to="/news">News</Link>
                <Link className={classes.item} to="/music">Music</Link>
                <Link className={classes.item} to="/settings">Settings</Link>
            </nav>
        </nav>


    )
};
export default Navbar;