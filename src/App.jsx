import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/style.scss";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
