// import React from 'react';

import { useState } from "react";

import "./App.css";
import { Reducer } from "./Reducer";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Reviewlist from "./pages/Reviewlist";
// import Dashboard from "./pages/Dashboard";
import { Run } from "./context/AuthContext";
import LoginForm from "./pages/LoginForm";
import AuthComponent from "./components/home/AuthComponent";
import SignupForm from "./pages/SignupForm";

function App() {
  return (
    <>
      {/* <Reducer/> */}
      <Run>
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/login" element={<LoginForm />} />

            {/* protected routes */}
            <Route element={<AuthComponent />}>
              <Route path="/" element={<Home />} />
              <Route path="/feeds" element={<Reviewlist />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Run>
    </>
  );
}

export default App;
