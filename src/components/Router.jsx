import React from "react";
import { Route, Routes } from "react-router-dom";

import TransitionComponent from "./Transition";
import HomePage from "../pages/home/Home";
import AboutPage from "../pages/about/About";

const Router = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <TransitionComponent>
            <HomePage />
          </TransitionComponent>
        }
      />
      <Route
        path="/about"
        element={
          <TransitionComponent>
            <AboutPage />
          </TransitionComponent>
        }
      />
    </Routes>
  );
}

export default Router;