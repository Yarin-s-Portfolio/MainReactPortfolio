import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
