import React from "react";
import Header from "./Header";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Nike from "./pages/Nike";
import Adidas from "./pages/Adidas";
import Puma from "./pages/Puma";
import Reebok from "./pages/Reebok"


import { Route, Routes } from "react-router-dom";

function App(){
  return (
    <div>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/nike" element={<Nike />} />
          <Route path="/adidas" element={<Adidas />} />
          <Route path="/reebok" element={<Reebok />} />
          <Route path="/puma" element={<Puma />} />
        </Routes>
      </div>
    </div>
   
  );
}

export default App;
