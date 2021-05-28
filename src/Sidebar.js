import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import { RateReviewOutlined, Search } from "@material-ui/icons";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar__heading">
        <Avatar></Avatar>
        <div className="sidebar__input">
          <Search></Search>
          <input type="text" placeholder="Search" />
        </div>
        <IconButton>
          <RateReviewOutlined></RateReviewOutlined>
        </IconButton>
      </div>

      <div className="sidebar__chats"></div>
    </div>
  );
};

export default Sidebar;
