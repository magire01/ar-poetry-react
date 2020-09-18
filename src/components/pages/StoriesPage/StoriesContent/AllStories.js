import React from "react";
import { Grid, Typography } from "@material-ui/core/";
import nl2br from "react-newline-to-break";


const AllStories = () => {

    return (

        <Grid container>
            <Typography>
                <Grid item md="12" sm="12">
                    <p>All Stories</p>
                </Grid>
            </Typography>
        </Grid>
    )
}

export default AllStories;