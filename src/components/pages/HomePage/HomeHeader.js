import React, { useState } from "react";
import 'fontsource-roboto';
import { Grid, Button, Paper } from "@material-ui/core/";
import Typography from '@material-ui/core/Typography';

const HomeHeader = () => {

    return (
        <Grid container justify="center">
            <Grid item>
                <Typography variant="h4">Home</Typography>
            </Grid>
        </Grid>
    )
}

export default HomeHeader;