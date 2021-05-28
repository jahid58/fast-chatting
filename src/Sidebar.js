import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import { RateReviewOutlined, Search } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__heading">
        <Avatar className="sidebar__avatar"></Avatar>
        <div className="sidebar__input">
          <Search></Search>
          <input type="text" placeholder="Search" />
        </div>
        <IconButton>
          <RateReviewOutlined></RateReviewOutlined>
        </IconButton>
      </div>

      <div className="sidebar__chats">
        <SidebarChat></SidebarChat>
      </div>
    </div>
  );
};

export default Sidebar;
