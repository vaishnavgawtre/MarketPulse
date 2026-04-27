import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './landing-page/home/HomePage.jsx';

import Signup from "./landing-page/signup/Signup";
import AboutPage from "./landing-page/about/AboutPage.jsx";
import ProductPage from "./landing-page/products/ProductPage.jsx";
import PricingPage from "./landing-page/pricing/PricingPage.jsx"
import SupportPage from "./landing-page/support/SupportPage.jsx";

import NotFound from "./landing-page/NotFound";
import Navbar from "./landing-page/Navbar";
import Footer from "./landing-page/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);