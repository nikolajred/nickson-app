import React from 'react';
import classes from './../Dialogs.module.css';


const MessageItem = (props) => {
    return (
        <div className={classes.item}>{props.message}</div>
    )
};

export default MessageItem;