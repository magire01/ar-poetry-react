import React from "react";

import { Grid, Button } from "@material-ui/core/";

const FeaturedPoems = () => {

    
    return (
        <Grid container>
            <Grid item md="12">
                <h5> Featured Poems </h5>
            </Grid>
            <Grid item md="12">
                <button>Poem Name</button>
            </Grid>
            <Grid item md="12">
                <button>Poem Name</button>
            </Grid>
            <Grid item md="12">
                <button>Poem Name</button>
            </Grid>
        </Grid>
    )
}

export default FeaturedPoems;