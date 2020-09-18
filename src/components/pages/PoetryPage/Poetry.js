import React, { useState } from "react";
import { Box, Button, Grid, Paper, Typography } from "@material-ui/core/";
// import Obj from "../../utilities/poems.json"

import AllPoems from "./PoetryContent/AllPoems"
import FeaturedPoems from "./PoetryContent/FeaturedPoems"
import SearchPoems from "./PoetryContent/SearchPoems"

const PoetryPage = () => {

    const [subNav, setSubNav] = useState({
        section: "AllPoems"
    });

    const poetryDisplay = () => {
        switch(subNav.section) {
            case "Featured":
                return (
                    <div>
                        <FeaturedPoems />
                    </div>
                );
            case "Search":
                return (
                    <div>
                        <SearchPoems />
                    </div>
                );
            
            default:
                return (
                    <div>
                        <AllPoems />
                    </div>
                );
        }
    }
    
    return (
        <Box>
            <Grid container direction="row">
                
                <Grid container justify="center" md="12" sm="12">
                    <Typography variant="h4" onClick={() => setSubNav({ section: "All" })}>Poetry</Typography>
                </Grid>

                <Grid container md="12" sm="12" justify="center" spacing="3">
                    <Grid item md="auto">
                        <Button onClick={() => setSubNav({ section: "AllPoems" })}><Typography>All</Typography></Button>
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
                            {poetryDisplay()}
                        </div>
                        
                    </Paper>
                </Grid>
                
                
                
                
            </Grid>
        </Box>
    )
}

export default PoetryPage;