import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"


import { Grid, Button } from "@material-ui/core/";

const NavBar = () => {
    
    const [navState, setNavState] = useState({
        page: "aboutMe"
    })

    const buttonStyle = {
        selected: {
            color: "white",
            margin: 15,
            width: 125,
            fontSize: 20,
            textAlign: "center",
            backgroundColor: "#990e18"
        },
        notSelected: {
            color: "white",
            margin: 15,
            width: 125,
            fontSize: 20,
            textAlign: "center",
            backgroundColor: "#213c80"
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
            <Grid item md="2" justify="center">
                <Link style={{textDecoration: "none"}} to="/"><Button onClick={() => setNavState({ page: "aboutMe" })} style={(navState.page === "aboutMe") ? buttonStyle.selected : buttonStyle.notSelected} variant="outlined" color="secondary">Aboutme</Button></Link>
            </Grid>
            <Grid item md="2" justify="center">
                <Link style={{textDecoration: "none"}} to="/poetry"><Button onClick={() => setNavState({ page: "poetry" })} style={(navState.page === "poetry") ? buttonStyle.selected : buttonStyle.notSelected} variant="outlined" color="secondary">Poetry</Button></Link>
            </Grid>
            <Grid item md="2" justify="center">
                <Link style={{textDecoration: "none"}} to="/movies"><Button onClick={() => setNavState({ page: "movies" })} style={(navState.page === "movies") ? buttonStyle.selected : buttonStyle.notSelected} variant="outlined" color="secondary">Movies</Button></Link>
            </Grid>
    
            <Grid item md="2" justify="center">
                <Link style={{textDecoration: "none"}} to="/stories"><Button onClick={() => setNavState({ page: "stories" })} style={(navState.page === "stories") ? buttonStyle.selected : buttonStyle.notSelected} variant="outlined" color="secondary">Stories</Button></Link>
            </Grid>
            <Grid item md="2" justify="center">
                <Link style={{textDecoration: "none"}} to="/contact"><Button onClick={() => setNavState({ page: "contact" })} style={(navState.page === "contact") ? buttonStyle.selected : buttonStyle.notSelected} variant="outlined" color="secondary">Contact</Button></Link>
            </Grid>
            
            
        </Grid>
    )

}

export default NavBar;