import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../src/components/fonts/arimo.css";
import "../src/components/fonts/open-sans.css";
import "../src/components/fonts/poppins.css";
// import "../src/components/fonts/arimo.css";
// import "../src/components/fonts/open-sans.css";
// import "../src/components/fonts/poppins.css";
import './index.css';
import App from './app';
import About from './components/about/about';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from "react-hot-toast";

ReactDOM.render(
  <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>,
    <Toaster />
  </HelmetProvider>,

  document.getElementById('root')
);
