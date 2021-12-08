import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { HomePage } from "./pages/HomePage";
import { ReactRouter } from "./router/ReactRouter";

function App() {
  return (
    <div className="App">
      <HomePage />
      {/* <div>
        <ReactRouter />
      </div> */}
    </div>
  );
}

export default App;
