import React, {useEffect} from "react";

import './App.css';
import Router from "./components/Router";
import {animateAppearPage} from "./scripts/Scripts";

const App = () => {

  useEffect(() => {
    animateAppearPage();
  }, []);

  return (
    <div className="App container d-flex min-vh-100 align-items-center position-relative text-white">
      <div className="container">
        <div className="background-app"></div>
        <Router/>
      </div>
    </div>
  );
}

export default App;
