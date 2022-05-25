import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import Navbar from "./components/navbar";
import CreateCase from "./components/createCase";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/navbar" element={<Navbar />}></Route>
        <Route path="/createcase" element={<CreateCase />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
