import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Use HashRouter
import Navbar from './assets/components/Navbar';
import Home from './assets/pages/Home';
import About from './assets/pages/About';
import Contact from './assets/pages/Contact';

function App() {
  return (
    <Router basename="/"> {/* Add basename if your app is in a subdirectory */}
      <div className="font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;