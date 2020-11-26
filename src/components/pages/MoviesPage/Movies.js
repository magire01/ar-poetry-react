import React, { useState } from "react";
import { Box, Button, Grid, Paper, Typography } from "@material-ui/core/";

import AllMovies from "./MoviesContent/AllMovies"
import FeaturedMovies from "./MoviesContent/FeaturedMovies"
import SearchMovies from "./MoviesContent/SearchMovies"

const MoviesPage = () => {

    const [subNav, setSubNav] = useState({
        section: "AllMovies"
    });

    const styleLink = {
        active: {
            color: "red"
        },
        inactive: {
            color: "black"
        }
    }

    const movieDisplay = () => {
        switch(subNav.section) {
            case "Featured":
                return (
                    <div>
                        <FeaturedMovies />
                    </div>
                );
            case "Search":
                return (
                    <div>
                        <SearchMovies />
                    </div>
                );
            
            default:
                return (
                    <div>
                        <AllMovies />
                    </div>
                );
        }
    }
    
    return (
        <Box>
            <Grid container direction="row">
                
                <Grid container justify="center" md="12" sm="12">
                    <Typography variant="h4" onClick={() => setSubNav({ section: "AllMovies" })}>Movies</Typography>
                </Grid>

                <Grid container md="12" sm="12" justify="center" spacing="3">
                    <Grid item md="auto">
                        <Button 
                            onClick={() => setSubNav({ section: "AllMovies" })}
                            style={(subNav.section === "AllMovies") ? styleLink.active : styleLink.inactive}><Typography>All</Typography></Button>
                    </Grid>
                    <Grid item md="auto">
                        <Button 
                            onClick={() => setSubNav({ section: "Featured" })}
                            style={(subNav.section === "Featured") ? styleLink.active : styleLink.inactive}><Typography>Featured</Typography></Button>
                    </Grid>
                    <Grid item md="auto">
                        <Button 
                            onClick={() => setSubNav({ section: "Search" })}
                            style={(subNav.section === "Search") ? styleLink.active : styleLink.inactive}><Typography>Search</Typography></Button>
                    </Grid>
                </Grid>

                <Grid item md="12" sm="12">
                    <Paper elevation="3">
                        <div>
                            {movieDisplay()}
                        </div>
                        
                    </Paper>
                </Grid>
                
                
                
                
            </Grid>
        </Box>
    )
}

export default MoviesPage;