import React from 'react';
import classes from './Navbar.module.css';
import {Link, Outlet} from "react-router-dom";


const Navbar = () => {
    return (

        <nav className={classes.nav}>
            <View className={classes.item}>
                <Link to='/content'>Profile</Link>
            </View>
            <View className={classes.item}>
                <Link to='/dialogs'>Messages</Link>
            </View>
            <View className={classes.item}>
                <Link to="/news">News</Link>
            </View>
            <View className={classes.item}>
                <Link to="/music">Music</Link>
            </View>
            <View className={classes.item}>
                <Link to="/settings">Settings</Link>
            </View>

            <Outlet />
        </nav>

    )
};
export default Navbar;