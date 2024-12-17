import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import Features from './Features.jsx';
import Enterprise from './Enterprise.jsx';
import Support from './Support.jsx';

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="flex-grow-1">
        <div className="container text-center py-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </Router>
  );
}
