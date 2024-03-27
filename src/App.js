import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
    <BrowserRouter>
      <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Layout />}>
        </Route>
      </Routes>
    </BrowserRouter>
      
      </div>
   
  );
}

export default App;
