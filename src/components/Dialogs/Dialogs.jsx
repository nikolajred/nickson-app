import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";





const Dialogs = (props) => {
    const DialogsElements = props.state.dialogs.map(dialog =>
        <DialogItem id = {dialog.id} name = {dialog.name}/>
    );


    const MessagesElements = props.state.messages.map(message =>
        <MessageItem message={message.message}/>
    );

    let newRef = React.createRef();
    let addMessage = () =>{
        let newMessage = newRef.current.value;
        props.addNewMessage(newMessage);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog}>
                {DialogsElements}
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>
                    {MessagesElements}
                </div>
                <div className={classes.messageArea}>
                    <p>message</p>
                    <textarea ref={newRef}></textarea>
                    <br/>
                    <button onClick={addMessage}>Submit</button>
                </div>
            </div>

        </div>

    )
}

export default Dialogs;