import React from "react";
import { Box, Grid, Paper } from "@material-ui/core/";

import HomeHeader from "../PageHeaders/HomeHeader"

const HomePage = () => {

    const divMargins = {
        padding: 20
    }

    const textStyle = {
        subtitle1: {
            color: "#213c80",
            textAlign: "center",
            fontSize: 30
        },
        subtitle2: {
            color: "black",
            textAlign: "center",
            fontSize: 20
        },
        text: {
            color: "black",
            fontSize: 20
        }
    }
    
    return (
        <Box>
            <Grid container direction="row">
                <Grid item md="12" sm="12">
                    <HomeHeader />
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

export default HomePage;