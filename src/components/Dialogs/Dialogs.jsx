import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return(
        <div className={classes.item}>
            <NavLink to={'/dialogs/'+ props.id} >
                {props.name}
            </NavLink>
        </div>

    )
};

const MessageItem = (props) => {
    return(
        <div className={classes.item}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return(
        <div className={classes.dialogs}>
            <div className={classes.dialog}>
                <DialogItem id='1' name='Nikolas'/>
                <DialogItem id='2' name='Ivan'/>
                <DialogItem id='3' name='Sandra'/>
                <DialogItem id='4' name='Maxim'/>
                <DialogItem id='5' name='Masha'/>
                <DialogItem id='6' name='Valera'/>
            </div>
            <div className={classes.messages}>
                <MessageItem message = 'Hi!'/>
                <MessageItem message = 'How are you?'/>
                <MessageItem message = 'Glad to see you!'/>
            </div>
        </div>

    )
}

export default Dialogs;