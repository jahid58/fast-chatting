import React from "react";
import "./FastChatting.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

const FastChatting = () => {
  return (
    <div className="fast__chatting">
      <Sidebar></Sidebar>
      <Chat></Chat>
    </div>
  );
};

export default FastChatting;
