import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"


import { Grid, Button } from "@material-ui/core/";

const NavBar = () => {

    const buttonStyle = {
        color: "#e01020",
        margin: 5,
        borderColor: "#213c80",
        width: 90
    }
    
    return (
        <Grid
            container
            spacing={1}
            direction="row"
            alignItems="center"
            justify="center"
        >
            <Link to="/poetry"><Button style={buttonStyle} variant="outlined" color="secondary">Poetry</Button></Link>
            <Link to="/movies"><Button style={buttonStyle} variant="outlined" color="secondary">Movies</Button></Link>
            <Link to="/stories"><Button style={buttonStyle} variant="outlined" color="secondary">Stories</Button></Link>
            <Link to="/contact"><Button style={buttonStyle} variant="outlined" color="secondary">Contact</Button></Link>
            <Link to="/"><Button style={buttonStyle} variant="outlined" color="secondary">Aboutme</Button></Link>
        </Grid>
    )
}

export default NavBar;