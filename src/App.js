import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import User from "./components/User";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<User />} />
      </Routes>
    </HashRouter>
  );
}
