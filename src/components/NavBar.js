import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"


import { Grid, Button } from "@material-ui/core/";

const NavBar = () => {
    
    const [navState, setNavState] = useState({
        page: "aboutMe"
    })

    const buttonStyle = {
        selected: {
            color: "#990e18",
            margin: 5,
            border: 0,
            width: 200,
            fontSize: 50,
            fontWeight: "bold",
            textAlign: "center"
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

    switch(navState.page) {
        case "poetry":
            return (
                <Grid
                    container
                    spacing={1}
                    direction="row"
                    alignItems="center"
                    justify="center"
                >
                    <Grid container md="6" justify="center">
                        <Link style={{textDecoration: "none"}} to="/contact"><Button variant="contained" onClick={() => setNavState({ page: "contact" })} style={buttonStyle.notSelected}>Contact</Button></Link> 
                        <Link style={{textDecoration: "none"}} to="/"><Button variant="contained" onClick={() => setNavState({ page: "aboutMe" })} style={buttonStyle.notSelected}>Bio</Button></Link>
                    </Grid>
            
                    <Grid container md="6" justify="center">
                        <Link style={{textDecoration: "none"}} to="/movies"><Button variant="contained" onClick={() => setNavState({ page: "movies" })} style={buttonStyle.notSelected}>Movies</Button></Link>
                        <Link style={{textDecoration: "none"}} to="/stories"><Button variant="contained" onClick={() => setNavState({ page: "stories" })} style={buttonStyle.notSelected}>Stories</Button></Link>
                        
                    </Grid>
                    <Grid>
                        <Grid item md="auto" sm="12">
                            <Link style={{textDecoration: "none"}} to="/poetry"><Button onClick={() => setNavState({ page: "poetry" })} style={buttonStyle.selected}>Poems</Button></Link>
                        </Grid>
                    </Grid>
                </Grid>
            )

        case "movies":
            return (
                <Grid
                    container
                    spacing={1}
                    direction="row"
                    alignItems="center"
                    justify="center"
                >
                    <Grid container md="6" justify="center">
                        <Link style={{textDecoration: "none"}} to="/"><Button variant="contained" onClick={() => setNavState({ page: "aboutMe" })} style={buttonStyle.notSelected}>Bio</Button></Link> 
                        <Link style={{textDecoration: "none"}} to="/poetry"><Button variant="contained" onClick={() => setNavState({ page: "poetry" })} style={buttonStyle.notSelected}>Poems</Button></Link>
                    </Grid>
            
                    <Grid container md="6" justify="center">
                        <Link style={{textDecoration: "none"}} to="/stories"><Button variant="contained" onClick={() => setNavState({ page: "stories" })} style={buttonStyle.notSelected}>Stories</Button></Link>
                        <Link style={{textDecoration: "none"}} to="/contact"><Button variant="contained" onClick={() => setNavState({ page: "contact" })} style={buttonStyle.notSelected}>Contact</Button></Link>
                    </Grid>
                    <Grid>
                        <Grid item md="auto" sm="12">
                            <Link style={{textDecoration: "none"}} to="/movies"><Button onClick={() => setNavState({ page: "movies" })} style={buttonStyle.selected}>Movies</Button></Link>
                        </Grid>
                    </Grid>
                </Grid>
            )
        
        case "stories":
            return (
                <Grid
                    container
                    spacing={1}
                    direction="row"
                    alignItems="center"
                    justify="center"
                >
                    <Grid container md="6" justify="center">
                        <Link style={{textDecoration: "none"}} to="/poetry"><Button variant="contained" onClick={() => setNavState({ page: "poetry" })} style={buttonStyle.notSelected}>Poems</Button></Link>
                        <Link style={{textDecoration: "none"}} to="/movies"><Button variant="contained" onClick={() => setNavState({ page: "movies" })} style={buttonStyle.notSelected}>Movies</Button></Link>
                    </Grid>
            
                    <Grid container md="6" justify="center">
                        <Link style={{textDecoration: "none"}} to="/contact"><Button variant="contained" onClick={() => setNavState({ page: "contact" })} style={buttonStyle.notSelected}>Contact</Button></Link>
                        <Link style={{textDecoration: "none"}} to="/"><Button variant="contained" onClick={() => setNavState({ page: "aboutMe" })} style={buttonStyle.notSelected}>Bio</Button></Link>
                    </Grid>
                    <Grid>
                        <Grid item md="auto" sm="12">
                            <Link style={{textDecoration: "none"}} to="/stories"><Button onClick={() => setNavState({ page: "stories" })} style={buttonStyle.selected}>Stories</Button></Link>
                        </Grid>
                    </Grid>
                </Grid>
            )
        
        case "contact":
            return (
                <Grid
                    container
                    spacing={1}
                    direction="row"
                    alignItems="center"
                    justify="center"
                >
                    <Grid container md="6" justify="center">
                        <Link style={{textDecoration: "none"}} to="/movies"><Button variant="contained" onClick={() => setNavState({ page: "movies" })} style={buttonStyle.notSelected}>Movies</Button></Link>
                        <Link style={{textDecoration: "none"}} to="/stories"><Button variant="contained" onClick={() => setNavState({ page: "stories" })} style={buttonStyle.notSelected}>Stories</Button></Link>
                    </Grid>
            
                    <Grid container md="6" justify="center">
                        
                        <Link style={{textDecoration: "none"}} to="/"><Button variant="contained" onClick={() => setNavState({ page: "aboutMe" })} style={buttonStyle.notSelected}>Bio</Button></Link>
                        <Link style={{textDecoration: "none"}} to="/poetry"><Button variant="contained" onClick={() => setNavState({ page: "poetry" })} style={buttonStyle.notSelected}>Poems</Button></Link>
                        
                    </Grid>
                    <Grid>
                        <Grid item md="auto" sm="12">
                            <Link style={{textDecoration: "none"}} to="/contact"><Button onClick={() => setNavState({ page: "contact" })} style={buttonStyle.selected}>Contact</Button></Link>
                        </Grid>
                    </Grid>
                </Grid>
            )
        default:
            return (
                <Grid
                    container
                    spacing={1}
                    direction="row"
                    alignItems="center"
                    justify="center"
                >
                    <Grid container md="6" justify="center">
                        <Link style={{textDecoration: "none"}} to="/stories"><Button variant="contained" onClick={() => setNavState({ page: "stories" })} style={buttonStyle.notSelected}>Stories</Button></Link>
                        <Link style={{textDecoration: "none"}} to="/contact"><Button variant="contained" onClick={() => setNavState({ page: "contact" })} style={buttonStyle.notSelected}>Contact</Button></Link>
                        
                    </Grid>
            
                    <Grid container md="6" justify="center">
                        <Link style={{textDecoration: "none"}} to="/poetry"><Button variant="contained" onClick={() => setNavState({ page: "poetry" })} style={buttonStyle.notSelected}>Poems</Button></Link>
                        <Link style={{textDecoration: "none"}} to="/movies"><Button variant="contained" onClick={() => setNavState({ page: "movies" })} style={buttonStyle.notSelected}>Movies</Button></Link>
                        
                    </Grid>
                    <Grid>
                        <Grid item md="auto" sm="12">
                            <Link style={{textDecoration: "none"}} to="/"><Button onClick={() => setNavState({ page: "aboutMe" })} style={buttonStyle.selected}>Bio</Button></Link>
                        </Grid>
                    </Grid>
                </Grid>
            )
    }
    
    // return (
    //     <Grid
    //         container
    //         spacing={1}
    //         direction="row"
    //         alignItems="center"
    //         justify="center"
    //     >
    //         <Link to="/poetry"><Button onClick={() => setNavState({ aboutMe: false, poetry: true, movies: false, stories: false, contact: false, page: "poetry" })} style={(navState.poetry === true) ? buttonStyle.selected : buttonStyle.notSelected} variant="outlined" color="secondary">Poetry</Button></Link>
    //         <Link to="/movies"><Button onClick={() => setNavState({ aboutMe: false, poetry: false, movies: true, stories: false, contact: false, page: "movies" })} style={(navState.movies === true) ? buttonStyle.selected : buttonStyle.notSelected} variant="outlined" color="secondary">Movies</Button></Link>
    //         <Link to="/stories"><Button onClick={() => setNavState({ aboutMe: false, poetry: false, movies: false, stories: true, contact: false, page: "stories" })} style={(navState.stories === true) ? buttonStyle.selected : buttonStyle.notSelected} variant="outlined" color="secondary">Stories</Button></Link>
    //         <Link to="/contact"><Button onClick={() => setNavState({ aboutMe: false, poetry: false, movies: false, stories: false, contact: true, page: "contact" })} style={(navState.contact === true) ? buttonStyle.selected : buttonStyle.notSelected} variant="outlined" color="secondary">Contact</Button></Link>
    //         <Link to="/"><Button onClick={() => setNavState({ aboutMe: true, poetry: false, movies: false, stories: false, contact: false, page: "aboutMe" })} style={(navState.aboutMe === true) ? buttonStyle.selected : buttonStyle.notSelected} variant="outlined" color="secondary">Aboutme</Button></Link>
    //     </Grid>
    // )
}

export default NavBar;