import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import SmoothScrollBar from './components/SmoothScrollBar';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        {/* <ScrollToTop /> */}
        <SmoothScrollBar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Projects" component={Projects} />
            <Route path="/Contact" component={Contact} />
          </Switch>
          <Footer />
        </SmoothScrollBar>
      </Router>
    </>
  );
}
