import React from "react";

import { Grid, Button, Typography } from "@material-ui/core/";

const BookItem = () => {

    const slideStyle = {
        body: {
            margin: 0
        },
        image: {
            width: 200, 
            height: "auto",
            marginTop: 15,
            marginBottom: 15,
        }
    }
    
    return (
        <Grid container style={slideStyle.body}>
            
            <Grid item md="12" xs="12" display="flex" alignContent="center" justifyContent="center" >
                <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1564897841l/50894622._SX0_SY0_.jpg" style={slideStyle.image} />
            </Grid>

            <Grid item md="12" xs="12" >

                <Typography variant="h5">Icy</Typography>
                <Typography variant="h6">by Andrew Rueter</Typography>
                <Button variant="outlined" color="secondary">Amazon Link</Button>
            </Grid>
        </Grid>
    )
}

export default BookItem;