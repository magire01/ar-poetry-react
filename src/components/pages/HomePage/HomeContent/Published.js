import React from "react";
import { Grid, Typography, Card, CardHeader, CardContent } from "@material-ui/core/";

const PublishedSection = () => {

    return (

        <Grid container style={{ marginTop: "5%" }}>
            <Grid item md="12" xs="12" style={{ width: 100, height:"auto", textAlign: "center"}}>
                <Typography variant="h6">Published</Typography>
            </Grid>
            <Grid item md="12" xs="12">
                <Typography style={{ paddingRight: 40, paddingLeft: 10, marginTop: "2%", textAlign: "center" }}>
                    I have been published at the following places:
                    Something Poetry
                    Something Else Inc.
                </Typography>
            </Grid>
            <Grid item md="6" xs="12" style={{ width: 100, height:"auto", textAlign: "center"}}>
                <Card>
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
            <Grid item md="6" xs="12" style={{ width: 100, height:"auto", textAlign: "center"}}>
                <Card>
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
        </Grid>
    )
}

export default PublishedSection;