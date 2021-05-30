import { Avatar } from '@material-ui/core';
import React, { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import { SelectUser } from './features/UserSlice';
import './MessageChat.css';

const MessageChat = forwardRef( 
    (
        {id, contents: { timestamp, displayName, uid, photo, email, message } }, 
        ref
    ) => {

    const user = useSelector(SelectUser)
    return (
        <div 
        ref={ref} 
        className={`message ${user.email === email && 
        "message__sender"}`}>

            <Avatar className="message__photo" src={photo} />
            <p>{message}</p>
            <small>{ new Date(timestamp?.toDate()).toLocaleString() } </small> 
        </div>
    )
})

export default MessageChat;
