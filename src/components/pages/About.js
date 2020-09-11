import React from "react";
import { Box, Grid } from "@material-ui/core/";

const AboutPage = () => {

    const divMargins = {
        padding: 20
    }

    const textStyle = {
        subtitle1: {
            color: "#213c80",
            textAlign: "center",
            fontSize: 30
        },
        subtitle2: {
            color: "#213c80",
            textAlign: "center",
            fontSize: 20
        },
        text: {
            color: "#213c80",
            fontSize: 20
        }
    }
    
    return (
        <Box>
            <Grid container direction="row">
                
                <h3 style={textStyle.subtitle1}>About Me</h3>
                <p style={textStyle.text}> Test about me test about me test about me test about me test about me test about me test about me test about me test about me test  me test about me test about me test aboutabout </p>
                <p style={textStyle.text}> Test about me test about me test about me test about me test about me test about me test about me test about me test about me test  me test about me test about me test aboutabout </p>
               
                    
                
            </Grid>
        </Box>
    )
}

export default AboutPage;