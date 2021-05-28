
import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import "./App.css";
import FastChatting from "./FastChatting";
import { SelectUser, login, logout } from "./features/UserSlice";
import Login from "./Login";
import { auth} from "./firebase"

const App = () => {
  
  const user = useSelector(SelectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(authUser =>{
      if (authUser){
        //user is logged in
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email:authUser.email,
          displayName: authUser.displayName,
        }))
      }else{
        //user is logged out
        dispatch(logout({}))
      }
    })
  }, []);

  return (
    <div className="App">
      {user ? <FastChatting/> : <Login/>}
      
    </div>
  );
}

export default App;
