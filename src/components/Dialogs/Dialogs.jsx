import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) =>{
    return(
        <div className={classes.item}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )};

const MessageItem = (props) => {
    return(
        <div className={classes.item} >{props.message}</div>
    )
}

const Dialogs = (props) => {
    return(
        <div className={classes.dialogs}>
            <div className={classes.dialog}>
                <DialogItem name='Nikolai' id='1'/>
                <DialogItem name='Ivan' id='2'/>
                <DialogItem name='Sveta' id='3'/>
                <DialogItem name='Maxim' id='4'/>
                <DialogItem name='Masha' id='5'/>
                <DialogItem name='Valera' id='6'/>
            </div>
            <div className={classes.messages}>
                <MessageItem message='Hi!'/>
                <MessageItem message='How are you?'/>
                <MessageItem message='Glad to see you!'/>
            </div>
        </div>

    )
}

export default Dialogs;