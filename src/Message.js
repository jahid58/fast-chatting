import React, { forwardRef } from "react";
import { Avatar } from "@material-ui/core";
import { photoAlbumRounded } from "@material-ui/icons";
import { useSelector } from "react-redux";

import "./Message.css";
import photo from "./image/person.png";
import { SelectUser } from "./features/userSlice";

const Message = ({
  id,
  contents: { timestamp, displayName, email, message, photo, uid },
}) => {
  const user = useSelector(SelectUser);

  return (
    <div className={`massage ${user.email === email && "message__sender"}`}>
      <Avatar className="message__photo" src={photo} />
      <p>{message}</p>
      <small>{new Date(timestamp?.toDate()).toLocaleString()} </small>
    </div>
  );
};

export default Message;
