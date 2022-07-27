import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Todos from "./components/Todos";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>React Context API</h1>
      <Todos />
      <Form />
    </div>
  );
}

export default App;
