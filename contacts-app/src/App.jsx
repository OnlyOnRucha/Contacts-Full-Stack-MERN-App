import { useState } from "react";
import Home from "./components/Home";
import Read from "./components/Read";
import Update from "./components/Update";
import Create from "./components/Create";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-[#FDCEDF] min-h-screen">
      
        <Navbar />
        <Read />
      
    </div>
  );
}

export default App;
