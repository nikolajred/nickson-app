import React from 'react';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
    return(
        <div className={classes.dialogs}>
            <div className={classes.dialog}>
                <div className={classes.item +' '+ classes.activeItem}>Nikolay</div>
                <div className={classes.item}>Ivan</div>
                <div className={classes.item}>Sveta</div>
                <div className={classes.item}>Maxim</div>
                <div className={classes.item}>Masha</div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi!</div>
                <div className={classes.message}>How are you?</div>
                <div className={classes.message}>Glad to see you!</div>
            </div>
        </div>

    )
}

export default Dialogs;