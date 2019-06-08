import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header.js";
import Body_1 from "./components/body_1.js";
import Body_2 from "./components/body_2.js";
import Body_3 from "./components/body_3.js";
import Projects from "./components/projects.js";
import Body_4 from "./components/body_4.js";

function App() {
  return (
    <div className="App">
      <Header /> <Body_1 />
      <Body_2 />
      <Body_3 />
      <Projects />
      <Body_4 />
    </div>
  );
}

export default App;
