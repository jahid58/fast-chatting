import React, { forwardRef } from "react";
import { Avatar } from "@material-ui/core";
import { photoAlbumRounded } from "@material-ui/icons";
import { useSelector } from "react-redux";
import selectUser from "./features/UserSlice";
import "./Message.css";

const Massage = forwardRef(
  (
    {
      id,
      constents: { timestamp, displayName, email, message, photoURL, uid },
    },
    ref
  ) => {
    const user = useSelector(selectUser);

    return (
      <div
        ref={ref}
        className={`massage ${user.email === email && "message__sender"}`}
      >
        <Avatar className="message__photo" rsc={photo} />
        <p>{message}</p>
        <small>{new Date(timestamp?.toDate()).toLocaleString()} </small>
      </div>
    );
  }
);

export default Massage;
