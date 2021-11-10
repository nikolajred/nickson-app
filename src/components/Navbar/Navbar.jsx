import React from 'react';
import classes from './Navbar.module.css';
import {Link} from "react-router-dom";


const Navbar = () => {

    
    return (
        <nav className={classes.nav}>
            <nav>
                <div className={classes.item}>
                    <Link   to="/content" activeClassName={classes.active} >
                        Profile
                    </Link>
                </div>

                <div className={classes.item}>
                    <Link   to="/dialogs" activeClassName={classes.active}>
                        Dialogs
                    </Link>
                </div>

                <div className={classes.item}>
                    <Link  to="/news">News</Link>
                </div>

                <div className={classes.item}>
                    <Link  to="/music">Music</Link>
                </div>

                <div className={classes.item}>
                    <Link  to="/settings">Settings</Link>
                </div>

            </nav>
        </nav>


    )
};
export default Navbar;