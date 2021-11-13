import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";


const DialogsData = [
    {id: '1', name: 'Nikolas'},
    {id: '2', name: 'Ivan'},
    {id: '3', name: 'Sandra'},
    {id: '4', name: 'Maxim'},
    {id: '5', name: 'Masha'},
    {id: '6', name: 'Valera'},
];

const DialogsElements = DialogsData.map(dialog =>
        <DialogItem id = {dialog.id} name = {dialog.name}/>
    );




const MessagesData = [
    {id: '1', message: 'Hi!'},
    {id: '2', message: 'How are you?'},
    {id: '3', message: 'Glad to see you!'}
];

const MessagesElements = MessagesData.map(message =>
    <MessageItem message={message.message}/>
);

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog}>
                {DialogsElements}
            </div>
            <div className={classes.messages}>
                {MessagesElements}
            </div>
        </div>

    )
}

export default Dialogs;