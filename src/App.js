import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './App.css';
import { Container, Grid } from '@material-ui/core/'

import AboutPage from "./components/pages/About"
import Poetry from "./components/pages/Poetry"
import Movies from "./components/pages/Movies"
import Stories from "./components/pages/Stories"
import Contact from "./components/pages/Contact"

import Header from "./components/Header"
import NavBar from "./components/NavBar"
import Slider from "./components/SliderComp/Slider"


const App = () => {

  const bodyStyle = {
    margin: 25
  }

  return (
    <Router>
      <Container>
        <Grid container>
          <Grid item md="7" sm="12">
            <Header />
          </Grid>
          <Grid item md="5" sm="12">
            <Slider />
          </Grid>
          <Grid item md="12" sm="12">
            <NavBar />
            <Route exact path="/" component={AboutPage} />
            <Route path="/poetry" component={Poetry} />
            <Route path="/movies" component={Movies} />
            <Route path="/stories" component={Stories} />
            <Route path="/contact" component={Contact} />
          </Grid>
          <Grid item md="3" style={{marginTop: 200}} sm="12">
          
          </Grid>
        </Grid>
      </Container>
    </Router>

    
  );
}

export default App;
