import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './App.css';
import { Container, Grid, Paper } from '@material-ui/core/'

import Home from "./components/pages/HomePage/Home"
import Poetry from "./components/pages/PoetryPage/Poetry"
import Movies from "./components/pages/MoviesPage/Movies"
import Stories from "./components/pages/StoriesPage/Stories"


import Header from "./components/Header"
import Slider from "./components/SliderComp/Slider"


const App = () => {

  const mainStyle = {
    carousel: {
      marginBottom: 20,
      marginTop: 20,
      display: "block",
      justifyContent: "center",
      width: "100%",
      height: "auto"
    },
    header: {
      marginBottom: 80,
      display: "block",
      justifyContent: "center"
    },
    content: {
      marginRight: 20,
    }
     
  }

  return (
    <Router>
      <Container>

        <Grid container>
          
          <Grid item md="12" xs="12" style={mainStyle.header}>
            <Paper elevation="3">
              <Header />
            </Paper>
          </Grid>
          
          <Grid item md="8" sm="12" style={mainStyle.content}>
            <Route exact path="/" component={Home} />
            <Route path="/poetry" component={Poetry} />
            <Route path="/movies" component={Movies} />
            <Route path="/stories" component={Stories} />
          </Grid>

          <Grid item md="3" sm="12" style={mainStyle.carousel}>
            <Paper elevation="3">
              <Slider />
            </Paper>
          </Grid>
        </Grid>
      
      </Container>
    </Router>

    
  );
}

export default App;
