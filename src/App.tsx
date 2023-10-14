import React from "react";
import HeaderOne from "./Components/Headers/HeaderOne";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderOne fullname={{ firstname: "", lastname: "" }} />
      </header>
    </div>
  );
};

export default App;
