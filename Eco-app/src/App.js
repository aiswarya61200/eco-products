import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./Pages/PorductPage";
import NotFoundPage from "./Pages/NotFoundPage";
import Header from "./Components/Header";
import Footer from "./Components/Foorter";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Comparisions from "./Pages/Comparisions";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/Comparisions" element={<Comparisions />} />
        <Route path="/product/:slug" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
