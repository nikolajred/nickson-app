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
        props.addNewMessage();

    }
    let onChangeMessage = () =>{
        let newMessage = newRef.current.value;
        props.updateNewMessageText(newMessage);
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
                    <textarea ref={newRef} onChange={onChangeMessage} value={props.newMessage}></textarea>
                    <br/>
                    <button onClick={addMessage}>Submit</button>
                </div>
            </div>

        </div>

    )
}

export default Dialogs;