import React, { useState } from "react";
import { Box, Button, Grid, Paper, Typography } from "@material-ui/core/";

import AllStories from "./StoriesContent/AllStories"
import FeaturedStories from "./StoriesContent/FeaturedStories"
import SearchStories from "./StoriesContent/SearchStories"

const StoriesPage = () => {

    const [subNav, setSubNav] = useState({
        section: "AllStories"
    });

    const styleLink = {
        active: {
            color: "red"
        },
        inactive: {
            color: "black"
        }
    }

    const storyDisplay = () => {
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
                        <Button 
                            onClick={() => setSubNav({ section: "AllStories" })}
                            style={(subNav.section === "AllStories") ? styleLink.active : styleLink.inactive}><Typography>All</Typography></Button>
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
                            {storyDisplay()}
                        </div>
                        
                    </Paper>
                </Grid>
                
                
                
                
            </Grid>
        </Box>
    )
}

export default StoriesPage;