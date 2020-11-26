import React from "react";
import { Grid, Typography, Card, CardHeader, CardContent, Paper } from "@material-ui/core/";

const PublishedSection = () => {

    const stylePublished = {
        publishedEntry: {
            backgroundColor: "red",
            color: "white",
            width: "90%",
            display: "flex",
            alignContent: "center"
        },
        bookCard: {
            backgroundColor: "blue",
            color: "white",
            width: "90%",
            display: "flex",
            alignContent: "center",
            justify: "center"
        },
        image: {
            width: "60%",
            height: "auto"
        }
    }

    return (

        <Grid container style={{ marginTop: "5%" }}>
            <Grid item md="12" xs="12" style={{ width: 100, height:"auto", textAlign: "center"}}>
                <Typography variant="h6">Published Work</Typography>
            </Grid>
            <Grid item md="12" xs="12">
                <Typography style={{ paddingRight: 40, paddingLeft: 10, marginTop: "2%", textAlign: "center" }}>
                    I have been published at the following places:
                    Something Poetry
                    Something Else Inc.
                </Typography>
            </Grid>
            <Grid container spacing={1} direction="row" alignItems="center" justify="center">
                <Grid item md="6" xs="12" style={{ textAlign: "center" }}>
                    <Card elevation="3" style={stylePublished.publishedEntry}>
                        <CardContent>
                            <Typography variant="subtitle1">Poem 1</Typography>
                            <Typography>
                                Test Test Poem Test Poem Test 
                                Poem Test Poem Test Poem Test 
                                Poem Test Poem Test 
                                Poem Test Poem Test 
                            </Typography>    
                        </CardContent>   
                    </Card>
                </Grid>
                <Grid item md="6" xs="12" style={{ textAlign: "center"}}>
                    <Card elevation="3" style={stylePublished.publishedEntry}>
                        <CardContent>
                            <Typography variant="subtitle1">Poem 2</Typography>
                            <Typography>
                                Test Test Poem Test Poem Test 
                                Poem Test Poem Test Poem Test 
                                Poem Test Poem Test 
                                Poem Test Poem Test 
                            </Typography>    
                        </CardContent>   
                    </Card>
                </Grid>
                <Grid item md="12" xs="12" style={{ textAlign: "center", display: "flex", alignItems: "center"}}>
                    <Card elevation="3" style={stylePublished.bookCard}>
                        <CardContent>
                            <Typography variant="subtitle1">Icy by Andrew Rueter</Typography>

                            <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1564897841l/50894622._SX0_SY0_.jpg" style={stylePublished.image} />
                            
                            <Typography>
                                Test Test Poem Test Poem Test 
                                Poem Test Poem Test Poem Test 
                                Poem Test Poem Test 
                                Poem Test Poem Test 
                            </Typography>    
                        </CardContent>   
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default PublishedSection;