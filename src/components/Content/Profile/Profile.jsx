import ocean from "../../../img/ocean.jpg";
import classes from "../Content.module.css";
import avatar from "../../../img/avatar.jpg";
import React from "react";

const Profile = () => {
    return (
        <div>
            <div className={classes.content_ocean}>
                <img src={ocean}  alt="ocean"/>
            </div>
            <div className={classes.content_avatar}>
                <img src={avatar}  alt="avatar"/>
            </div>

            <div className={classes.description}>
                <h2>Василий Петренко</h2>
                <h3>Дата рождения: 01 августа 1983г.</h3>
                <h3>г. Харьков</h3>
                <h3>Украина</h3>
                <h3>Харьковский полетехнический институт</h3>
            </div>
        </div>

    )
}

export default Profile;