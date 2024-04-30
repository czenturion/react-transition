import React from "react";

import './App.css';
import Router from "./components/Router";

const App = () => {
  return (
    <div className="App container d-flex min-vh-100 h-0 text-center align-items-center position-relative text-white">
      <div className="container">
      <div className="background-app"></div>
      <Router />
      </div>
    </div>
  );
}

export default App;
