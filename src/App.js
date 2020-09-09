import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './App.css';
import { Container } from '@material-ui/core/'

import AboutPage from "./components/pages/About"
import Poetry from "./components/pages/Poetry"
import Movies from "./components/pages/Movies"
import Stories from "./components/pages/Stories"
import Contact from "./components/pages/Contact"

import Header from "./components/Header"


const App = () => {
  return (
    <Router>
      <Container>
        <Header />
        <Route exact path="/" component={AboutPage} />
        <Route path="/poetry" component={Poetry} />
        <Route path="/movies" component={Movies} />
        <Route path="/stories" component={Stories} />
        <Route path="/contact" component={Contact} />
      </Container>
    </Router>

    
  );
}

export default App;
