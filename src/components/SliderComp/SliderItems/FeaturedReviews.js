import React from "react";

import { Grid, Button, Typography } from "@material-ui/core/";

const FeaturedReviews = () => {

    const slideStyle = {
        body: {
            marginTop: "30%"
        },
        title: {
            fontSize: 35,
            marginBottom: "10%"
        },
        subtitle: {
            color: "blue",
            fontSize: 22,
            marginBottom: "5%"
        }
    }

    return (
        <Grid container style={slideStyle.body}>
            <Grid item md="12" xs="12">
                <Typography variant="h4" style={slideStyle.title}>Featured Movies</Typography>
            </Grid>
            <Grid item md="12" xs="12">
                <Typography variant="subtitle2" style={slideStyle.subtitle}>Movie Name 1</Typography>
            </Grid>
            <Grid item md="12" xs="12">
                <Typography variant="subtitle2" style={slideStyle.subtitle}>Movie Name 2</Typography>
            </Grid>
        </Grid>
    )
}

export default FeaturedReviews;