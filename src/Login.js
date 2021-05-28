import React from 'react';
import {Button} from "@material-ui/core";
import {auth, provider} from "./firebase";
import "./Login.css";
import IMessage from "./image/Imessage.PNG.png"
import { AlternateEmail } from '@material-ui/icons';

const Login = () => {

    const singIn=()=>{
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }

    return (
        <div className="loging">
            <div className="login-logo">
                <img src={IMessage} alt=""/>
                <h1>iMessage</h1>
            </div>
            <Button onclick={singIn}>Sign In</Button>
        </div>
        
    );
};

export default Login;