import React, { useState } from "react";
import { Box, Button, Grid, Paper, Typography } from "@material-ui/core/";

import AllStories from "./StoriesContent/AllStories"
import FeaturedStories from "./StoriesContent/FeaturedStories"
import SearchStories from "./StoriesContent/SearchStories"

const MoviesPage = () => {

    const [subNav, setSubNav] = useState({
        section: "AllMovies"
    });

    const movieDisplay = () => {
        switch(subNav.section) {
            case "Featured":
                return (
                    <div>
                        <FeaturedStories />
                    </div>
                );
            case "Search":
                return (
                    <div>
                        <SearchStories />
                    </div>
                );
            
            default:
                return (
                    <div>
                        <AllStories />
                    </div>
                );
        }
    }
    
    return (
        <Box>
            <Grid container direction="row">
                
                <Grid container justify="center" md="12" sm="12">
                    <Typography variant="h4" onClick={() => setSubNav({ section: "AllStories" })}>Stories</Typography>
                </Grid>

                <Grid container md="12" sm="12" justify="center" spacing="3">
                    <Grid item md="auto">
                        <Button onClick={() => setSubNav({ section: "AllStories" })}><Typography>All</Typography></Button>
                    </Grid>
                    <Grid item md="auto">
                        <Button onClick={() => setSubNav({ section: "Featured" })}><Typography>Featured</Typography></Button>
                    </Grid>
                    <Grid item md="auto">
                        <Button onClick={() => setSubNav({ section: "Search" })}><Typography>Search</Typography></Button>
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