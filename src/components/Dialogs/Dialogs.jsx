import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={classes.item}>
            <NavLink to={'/dialogs/' + props.id}>
                {props.name}
            </NavLink>
        </div>

    )
};

const MessageItem = (props) => {
    return (
        <div className={classes.item}>{props.message}</div>
    )
}

const DialogsData = [
    {id: '1', name: 'Nikolas'},
    {id: '2', name: 'Ivan'},
    {id: '3', name: 'Sandra'},
    {id: '4', name: 'Maxim'},
    {id: '5', name: 'Masha'},
    {id: '6', name: 'Valera'},
];

const MessagesData = [
    {id: '1', message: 'Hi!'},
    {id: '2', message: 'How are you?'},
    {id: '3', message: 'Glad to see you!'}
]

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog}>
                <DialogItem id={DialogsData[0].id} name={DialogsData[0].name}/>
                <DialogItem id={DialogsData[1].id} name={DialogsData[1].name}/>
                <DialogItem id={DialogsData[2].id} name={DialogsData[2].name}/>
                <DialogItem id={DialogsData[3].id} name={DialogsData[3].name}/>
                <DialogItem id={DialogsData[4].id} name={DialogsData[4].name}/>
                <DialogItem id={DialogsData[5].id} name={DialogsData[5].name}/>
            </div>
            <div className={classes.messages}>
                <MessageItem message={MessagesData[0].message}/>
                <MessageItem message={MessagesData[1].message}/>
                <MessageItem message={MessagesData[2].message}/>
            </div>
        </div>

    )
}

export default Dialogs;