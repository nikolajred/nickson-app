import React from 'react';
import classes from './Navbar.module.css';
import {BrowserRouter, Link, NavLink, Outlet} from "react-router-dom";
import {Route, Router, Routes} from "react-router-dom";
import Content from "../Content/Content";


const Navbar = () => {
    return (
        <BrowserRouter>
            <div className={classes.nav}>
                <div className={classes.item}>
                    <NavLink to="/" activeClassName="current">Profile</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/dialogs" end>Dialogs</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/news" >News</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/music" >Music</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/settings" >Settings</NavLink>
                </div>
            </div>
        </BrowserRouter>




    )
};
export default Navbar;