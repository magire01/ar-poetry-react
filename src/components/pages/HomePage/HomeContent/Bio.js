import React from "react";
import { Grid, Typography } from "@material-ui/core/";

const BioSection = () => {

    return (

        <Grid container style={{ marginTop: "5%" }}>
            <Grid item md="6" xs="12" style={{ width: 100, height:"auto", textAlign: "center"}}>
                <img src="https://images.assetsdelivery.com/compings_v2/apoev/apoev1806/apoev180600175.jpg" style={{ disply: "flex", width: 220, height: "auto" }} />
            </Grid>
            <Grid item md="6" xs="12">
                <Typography style={{ paddingRight: 40, paddingLeft: 10, marginTop: "20%", textAlign: "center" }}>
                    I'm from Union, KY. 
                    I like turtles. 
                    I love writing and movies and I wanted a site to show yall what I'm made of. 
                    I aint a businessman, I'm a bussiness, <span style={{ color: "red"}}>man</span>
                </Typography>
            </Grid>
            
        </Grid>
    )
}

export default BioSection;