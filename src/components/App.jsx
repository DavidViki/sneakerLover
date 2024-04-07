import React from "react";
import Header from "./Header";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Brands from "./pages/Brands";
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
          <Route path="/brands" element={<Brands />} />
        </Routes>
      </div>
    </div>
   
  );
}

export default App;
