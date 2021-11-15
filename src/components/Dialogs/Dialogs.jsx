import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";





const Dialogs = (props) => {
    const DialogsElements = props.dialogs.map(dialog =>
        <DialogItem id = {dialog.id} name = {dialog.name}/>
    );


    const MessagesElements = props.messages.map(message =>
        <MessageItem message={message.message}/>
    );

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