// import React from 'react';

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Reducer } from "./Reducer";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Reviewlist from "./pages/Reviewlist";
import Dashboard from "./pages/Dashboard";
import { Run } from "./context/FeedbackCounts";

function App() {
  return (
    <>
      {/* <Reducer/> */}
      <Run>
        <BrowserRouter>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feeds" element={<Reviewlist />} />
          </Routes>
        </BrowserRouter>
      </Run>
    </>
  );
}

export default App;
