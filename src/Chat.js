import { IconButton } from '@material-ui/core';
import { MicNone } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { SelectUser } from "./features/UserSlice";
import './Chat.css';
import { SelectChatName, SelectChatId } from './features/ChatSlice';
import db from './firebase';
import MessageChat from './MessageChat';
import firebase from 'firebase';
import FlipMove from "react-flip-move";

const Chat = () => {
  const user = useSelector(SelectUser);
  const [input, setInput] = useState("");
  const chatName = useSelector(SelectChatName);
  const chatId = useSelector(SelectChatId);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (chatId) {
      db.collection("chats")
        .doc(chatId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    }
  }, [chatId]);

    const sendMessage = (e) => {
        e.preventDefault();

        db.collection("chats")
        .doc(chatId)
        .collection("messages")
        .add ({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            uid: user.uid,
            photo: user.photo,
            email: user.email,
            displayName: user.displayName,
        });

        setInput("")
    }
    return (
        <div className="chat">
            <div className="chat__header">
                <h4>To: <span className="chat__name">{chatName}</span> </h4>
                <strong>Details</strong>
            </div>

            <div className="chat__messages">

                <FlipMove>
                    {
                        messages.map(({id, data}) => (
                            <MessageChat key={id} contents={data} />
                        ))
                    }
                </FlipMove>
                
            </div>

            <div className="chat__input">
                <form action="">
                    <input 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)}
                        type="text" 
                        placeholder="Message" 
                    />
                    <button onClick={sendMessage}>Send Message</button>
                </form>
                <IconButton>
                    <MicNone className="chat__mic"/>
                </IconButton>
            </div>
        </div>
    )
}

export default Chat;
