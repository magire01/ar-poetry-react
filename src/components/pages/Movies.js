import React from "react";
import { Box, Grid, Paper } from "@material-ui/core/";

import MoviesHeader from "../PageHeaders/MoviesHeader"

const MoviesPage = () => {
    
    return (
        <Box>
            <Grid container direction="row">
                <Grid item md="12" sm="12">
                    <MoviesHeader />
                </Grid>
                
                <Grid item md="12" sm="12">
                    <Paper variant="outlined" elevation="3">
                        <p> Test Home page about me blah blah balh about me blah blah balh about me blah blah balh about me blah blah balh about me blah blah balh about me blah blah balh</p>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default MoviesPage;