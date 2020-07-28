import React from "react";
import RMLogo from "./RenegadeMediaLogo/RenegadeMediaLogo";
import Logo from "./assets/JustFist.png";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} className="App-logo" alt="logo" />
        <RMLogo />
      </header>
    </div>
  );
}

export default App;
