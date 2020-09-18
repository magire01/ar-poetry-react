import React, { useState } from "react";
import 'fontsource-roboto';
import { Grid, Paper } from "@material-ui/core/";
import Typography from '@material-ui/core/Typography';

const StoriesHeader = () => {

    return (
        <Grid container justify="center">
            <Grid item>
                <Typography variant="h4">Stories</Typography>
            </Grid>
            <Grid item md="12">
                <Typography>Test navs</Typography>
            </Grid>
            
        </Grid>
    )
}

export default StoriesHeader;