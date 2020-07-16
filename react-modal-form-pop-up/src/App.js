import React from "react";
import "./App.css";
import { Container } from "./Container";

import logo from "./logo.png";

const App = () => {
  const triggerText = "Log In";
  const onSubmit = event => {
    event.preventDefault(event);
    console.log(event.target.email.value);
    console.log(event.target.password.value);

  };
  return (
    <div className="App">
      <header className="header">
        <img className="logo" src={logo} />
        <Container triggerText={triggerText} onSubmit={onSubmit} />

      </header>
    </div>
  );
};

export default App;
