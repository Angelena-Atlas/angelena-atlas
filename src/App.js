import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/common/NavBar";
import HomePage from "./components/home/HomePage";

function App() {
  return (
    <div className="App">
      <NavBar />

      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <p></p> */}
      {/* </header> */}

      <HomePage />
    </div>
  );
}

export default App;
