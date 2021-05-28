import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./SidebarChat.css";
const SidebarChat = () => {
  const dispatch = useDispatch();
  const [chatInfo, setChatInfo] = useState([]);

  useEffect(() => {
    db.collection("chats")
      .doc(id)
      .collection("messages")
      .onSnapshot((snapshot) =>
        setChatInfo(snapshot.docs.map((doc) => doc.data()))
      );
  }, [id]);
  return (
    <div
      onClick={() => {
        dispatch(
          setChat({
            chatId: id,
            chatName: chatName,
          })
        );
      }}
      className="sidebarChat"
    >
      <Avatar></Avatar>
      <div className="sidebarChat__info">
        <h3>Channel Name</h3>
        <p>Last message sent...</p>
        <small>timestamp</small>
      </div>
    </div>
  );
};

export default SidebarChat;
