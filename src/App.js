import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
          <Home />
          <Footer />
      </Router>
    </>
  );
}
