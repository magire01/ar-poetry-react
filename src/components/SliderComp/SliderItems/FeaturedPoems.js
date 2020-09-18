import React from "react";

import { Grid, Button, Typography } from "@material-ui/core/";

const FeaturedPoems = () => {

    const slideStyle = {
        body: {
            marginTop: "30%"
        },
        title: {
            fontSize: 35,
            marginBottom: "10%"
        },
        subtitle: {
            color: "red",
            fontSize: 22,
            marginBottom: "5%"
        }
    }
    
    return (
        <Grid container style={slideStyle.body}>
            <Grid item md="12" xs="12">
                <Typography variant="h4" style={slideStyle.title}>Featured Poems</Typography>
            </Grid>
            <Grid item md="12" xs="12">
                <Typography variant="subtitle2" style={slideStyle.subtitle}>Poem Name1</Typography>
            </Grid>
            <Grid item md="12" xs="12">
                <Typography variant="subtitle2" style={slideStyle.subtitle}>Poem Name2</Typography>
            </Grid>
        </Grid>
    )
}

export default FeaturedPoems;