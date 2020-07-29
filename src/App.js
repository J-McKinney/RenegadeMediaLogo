import React from "react";
import RMLogo from "./RenegadeMediaLogo/RenegadeMediaLogo";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import Logo from "./assets/GreenFist.png";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Flip>
          <img src={Logo} className="App-logo" alt="logo" />
        </Flip>
        <Fade bottom>
          <RMLogo />
        </Fade>
      </header>
    </div>
  );
}

export default App;
