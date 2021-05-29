import React from "react";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import "./Login.css";
import image from "./image/logo.png";

const Login = () => {
  const singIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="loging">
      <div className="login-logo">
        <img src={image} alt="" />
        <h2>FastMessage</h2>
      </div>
      <Button onClick={singIn}>Sign In</Button>
    </div>
  );
};

export default Login;
