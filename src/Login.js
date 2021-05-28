import React from 'react';
import {Button} from "@material-ui/core";
import {auth, provider} from "./firebase";
import "./Login.css";
import image from "./Iimage/Imessage.PNG.png"


const Login = () => {

    const singIn=()=>{
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }

    return (
        <div className="loging">
            <div className="login-logo">
                <img src={image} alt=""/>
                <h2>iMessagee</h2>
            </div>
            <Button onclick={singIn}>Sign In</Button>
        </div>
        
    );
};

export default Login;