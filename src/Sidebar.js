import { Avatar, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { RateReviewOutlined, Search } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";
import db, { auth } from "./firebase";
import { useSelector } from "react-redux";
import { SelectUser } from "./features/userSlice";

const Sidebar = () => {
  const user = useSelector(SelectUser);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    db.collection("chats").onSnapshot((snapshot) =>
      setChats(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  }, []);
  const addChat = () => {
    const chatName = prompt("Please Enter your chat name");
    if (chatName) {
      db.collection("chats").add({
        chatName: chatName,
      });
    }
  };
  return (
    <div className="sidebar">
      <div className="sidebar__heading">
        <Avatar
          onClick={() => auth.signOut()}
          src={user.photo}
          className="sidebar__avatar"
        ></Avatar>
        <div className="sidebar__input">
          <Search></Search>
          <input type="text" placeholder="Search" />
        </div>
        <IconButton>
          <RateReviewOutlined onClick={addChat}></RateReviewOutlined>
        </IconButton>
      </div>

      <div className="sidebar__chats">
        {chats.map(({ id, data: { chatName } }) => (
          <SidebarChat key={id} id={id} chatName={chatName} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
