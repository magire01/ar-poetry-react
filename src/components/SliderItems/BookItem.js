import React from "react";

import { Grid, Button } from "@material-ui/core/";

const BookItem = () => {

    
    return (
        <Grid container direction="row">
            <Grid item >
                <h5> Icy </h5>
                <h6> By Andrew Rueter </h6>
            </Grid>
            <Grid item >
                <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1564897841l/50894622._SX0_SY0_.jpg" style={{width: "auto", height: 400}} />
                <button>Amazon Link</button>

            </Grid>
        </Grid>
    )
}

export default BookItem;