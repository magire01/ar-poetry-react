import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"


import { Grid, Button } from "@material-ui/core/";

const NavBar = () => {
    
    const [navState, setNavState] = useState({
        aboutMe: true,
        poetry: false,
        movies: false,
        stories: false,
        contact: false
    })

    const buttonStyle = {
        selected: {
            color: "pink",
            margin: 5,
            borderColor: "pink",
            width: "auto",
            fontSize: 30
        },
        notSelected: {
            color: "#e01020",
            margin: 5,
            borderColor: "#213c80",
            width: 90 
        }
        
    }
    
    return (
        <Grid
            container
            spacing={1}
            direction="row"
            alignItems="center"
            justify="center"
        >
            <Link to="/poetry"><Button onClick={() => setNavState({ aboutMe: false, poetry: true, movies: false, stories: false, contact: false })} style={(navState.poetry === true) ? buttonStyle.selected : buttonStyle.notSelected} variant="outlined" color="secondary">Poetry</Button></Link>
            <Link to="/movies"><Button onClick={() => setNavState({ aboutMe: false, poetry: false, movies: true, stories: false, contact: false })} style={(navState.movies === true) ? buttonStyle.selected : buttonStyle.notSelected} variant="outlined" color="secondary">Movies</Button></Link>
            <Link to="/stories"><Button onClick={() => setNavState({ aboutMe: false, poetry: false, movies: false, stories: true, contact: false })} style={(navState.stories === true) ? buttonStyle.selected : buttonStyle.notSelected} variant="outlined" color="secondary">Stories</Button></Link>
            <Link to="/contact"><Button onClick={() => setNavState({ aboutMe: false, poetry: false, movies: false, stories: false, contact: true })} style={(navState.contact === true) ? buttonStyle.selected : buttonStyle.notSelected} variant="outlined" color="secondary">Contact</Button></Link>
            <Link to="/"><Button onClick={() => setNavState({ aboutMe: true, poetry: false, movies: false, stories: false, contact: false })} style={(navState.aboutMe === true) ? buttonStyle.selected : buttonStyle.notSelected} variant="outlined" color="secondary">Aboutme</Button></Link>
        </Grid>
    )
}

export default NavBar;