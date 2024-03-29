import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import Blog from "./pages/Blog";
import CompareProduct from "./pages/CompareProduct";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import ForgotPW from "./pages/ForgotPW";
import Signup from "./pages/Signup";
import ResetPW from "./pages/ResetPW";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="store" element={<OurStore />} />
        <Route path="blogs" element={<Blog />} />
        <Route path="compare-product" element={<CompareProduct />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPW />} />
        <Route path="signup" element={<Signup />} />
        <Route path="reset-password" element={<ResetPW />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
