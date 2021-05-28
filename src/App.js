import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import FastChatting from "./FastChatting";
import { SelectUser } from "./features/UserSlice";
function App() {
  const user = useSelector(SelectUser);
  return (
    <div className="app">
      {user ? <FastChatting></FastChatting> : <h2>You need to login</h2>}
    </div>
  );
}

export default App;
