import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./assets/fonts/arimo.css";
import "./assets/fonts/open-sans.css";
import "./assets/fonts/poppins.css";
import App from './app';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from "react-hot-toast";
import Building from './pages/building/building';
import './index.css';
import About from './pages/about/about';


ReactDOM.render(
  <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Building />} />
        <Route path="/products" element={<Building />} />
        <Route path="/inovations" element={<Building />} />
        <Route path="/contacts" element={<Building />} />
      </Routes>
    </BrowserRouter>,
    <Toaster />
  </HelmetProvider>,

  document.getElementById('root')
);
