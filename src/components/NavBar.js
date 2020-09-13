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
            color: "#213c80",
            border: 0,
            margin: 5,
            width: 125,
            fontSize: 25,
            textAlign: "center"
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
                    <Link to="/contact"><div onClick={() => setNavState({ page: "contact" })} style={buttonStyle.notSelected}>Contact</div></Link>
                    <Link to="/"><div onClick={() => setNavState({ page: "aboutMe" })} style={buttonStyle.notSelected}>Bio</div></Link>
                    <Link style={{textDecoration: "none"}} to="/poetry"><div onClick={() => setNavState({ page: "poetry" })} style={buttonStyle.selected}>Poems</div></Link>
                    <Link to="/movies"><div onClick={() => setNavState({ page: "movies" })} style={buttonStyle.notSelected}>Movies</div></Link>
                    <Link to="/stories"><div onClick={() => setNavState({ page: "stories" })} style={buttonStyle.notSelected}>Stories</div></Link>
                    
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
                    <Link to="/"><div onClick={() => setNavState({ page: "aboutMe" })} style={buttonStyle.notSelected}>Bio</div></Link>
                    <Link to="/poetry"><div onClick={() => setNavState({ page: "poetry" })} style={buttonStyle.notSelected}>Poems</div></Link>
                    <Link style={{textDecoration: "none"}} to="/movies"><div onClick={() => setNavState({ page: "movies" })} style={buttonStyle.selected}>Movies</div></Link>
                    <Link to="/stories"><div onClick={() => setNavState({ page: "stories" })} style={buttonStyle.notSelected}>Stories</div></Link>
                    <Link to="/contact"><div onClick={() => setNavState({ page: "contact" })} style={buttonStyle.notSelected}>Contact</div></Link>
                    
                    
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
                    <Link to="/poetry"><div onClick={() => setNavState({ page: "poetry" })} style={buttonStyle.notSelected}>Poems</div></Link>
                    <Link to="/movies"><div onClick={() => setNavState({ page: "movies" })} style={buttonStyle.notSelected}>Movies</div></Link>
                    <Link style={{textDecoration: "none"}} to="/stories"><div onClick={() => setNavState({ page: "stories" })} style={buttonStyle.selected}>Stories</div></Link>
                    <Link to="/contact"><div onClick={() => setNavState({ page: "contact" })} style={buttonStyle.notSelected}>Contact</div></Link>
                    <Link to="/"><div onClick={() => setNavState({ page: "aboutMe" })} style={buttonStyle.notSelected}>Bio</div></Link>
                
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
                    <Link to="/movies"><div onClick={() => setNavState({ page: "movies" })} style={buttonStyle.notSelected}>Movies</div></Link>
                    <Link to="/stories"><div onClick={() => setNavState({ page: "stories" })} style={buttonStyle.notSelected}>Stories</div></Link>
                    <Link style={{textDecoration: "none"}} to="/contact"><div onClick={() => setNavState({ page: "contact" })} style={buttonStyle.selected}>Contact</div></Link>
                    <Link to="/"><div onClick={() => setNavState({ page: "aboutMe" })} style={buttonStyle.notSelected}>Bio</div></Link>
                    <Link to="/poetry"><div onClick={() => setNavState({ page: "poetry" })} style={buttonStyle.notSelected}>Poems</div></Link>
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
                    <Link to="/stories"><div onClick={() => setNavState({ page: "stories" })} style={buttonStyle.notSelected}>Stories</div></Link>
                    <Link to="/contact"><div onClick={() => setNavState({ page: "contact" })} style={buttonStyle.notSelected}>Contact</div></Link>
                    <Link style={{textDecoration: "none"}} to="/"><div onClick={() => setNavState({ page: "aboutMe" })} style={buttonStyle.selected}>Bio</div></Link>
                    <Link to="/poetry"><div onClick={() => setNavState({ page: "poetry" })} style={buttonStyle.notSelected}>Poems</div></Link>
                    <Link to="/movies"><div onClick={() => setNavState({ page: "movies" })} style={buttonStyle.notSelected}>Movies</div></Link>
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