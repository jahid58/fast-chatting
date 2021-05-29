import React, { useEffect, useState } from "react";
import "./Chat.css";
import MicNoneIcon from "@material-ui/icons/MicNone";
import Message from "./Message";
import { useSelector } from "react-redux";
import { SelectChatName, SelectChatId, chatSlice } from "./features/chatSlice";
import db from "./firebase";
import firebase from "firebase";
import { SelectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";
import { IconButton } from "@material-ui/core";

const Chat = () => {
  const user = useSelector(SelectUser);
  const [input, setInput] = useState("");
  const chatName = useSelector(SelectChatName);
  const chatId = useSelector(SelectChatId);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    console.log(chatId);
    if (chatId) {
      db.collection("chats")
        .doc(chatId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSanpshot((snapshot) =>
          setMessages(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    }
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("chats").doc(chatId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      messages: input,
      uid: user.uid,
      photo: user.photo,
      email: user.email,
      displayName: user.displayName,
    });

    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <h4>
          To: <span className="chat__name">{chatName}</span>
        </h4>
        <strong>Details</strong>
      </div>

      {/* chat messages */}
      <div className="chat__messages">
        <FlipMove>
          {messages.map(({ id, data }) => {
            <Message key={id} contents={data} />;
          })}
        </FlipMove>
      </div>
      <div className="chat__input">
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="FastChatting"
            type="text"
          />
          <button onClick={sendMessage}>Send Message</button>
        </form>
        <IconButton>
          <MicNoneIcon className="chat__mic" />
        </IconButton>
      </div>
    </div>
  );
};

export default Chat;
