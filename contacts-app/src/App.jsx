import { useState } from "react";
import Home from "./components/Home";
import Read from "./components/Read";
import Update from "./components/Update";
import Create from "./components/Create";
import Navbar from "./components/Navbar";
import LogIn from "./components/LogIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-[#FDCEDF] min-h-screen">
      
      <BrowserRouter>
      <Navbar />
        <Routes>
        <Route path="/" element={<LogIn />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/read" element={<Read />}></Route>
          <Route path="/update" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
