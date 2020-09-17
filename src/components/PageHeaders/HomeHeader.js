import React, { useState } from "react";
import 'fontsource-roboto';
import { Grid, Paper } from "@material-ui/core/";
import Typography from '@material-ui/core/Typography';

const HomeHeader = () => {

    return (
        <Grid container justify="center">
            <Grid item>
                <Typography variant="h4">Home</Typography>
            </Grid>
            <Grid container md="12" jusify="center" alignContent="center">
                <Grid item style={{ display: "flex" }}>
                    <Typography>Bio</Typography>
                    <Typography>Published Work</Typography>
                    <Typography>Patreon</Typography>
                    <Typography>Patreon</Typography>
                </Grid>
                
            </Grid>
            
        </Grid>
    )
}

export default HomeHeader;