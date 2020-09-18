import React, { useState } from "react";
import { Box, Grid, Button, Paper } from "@material-ui/core/";
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';
import HomeHeader from "./HomeHeader"

import HomeDisplay from "./HomeDisplay";


const HomePage = () => {

    const [subNav, setSubNav] = useState({
        section: "all"
    });

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
            color: "black",
            textAlign: "center",
            fontSize: 20
        },
        text: {
            color: "black",
            fontSize: 20
        }
    }
    
    return (
        <Box>
            <Grid container direction="row">
                <Grid container justify="center" md="12" sm="12">
                    <Typography variant="h4" onClick={() => setSubNav({ section: "all" })}>Home</Typography>
                </Grid>
        
                <Grid container md="12" sm="12" justify="center" spacing="3">
                    <Grid item md="auto">
                        <Button onClick={() => setSubNav({ section: "Bio" })}><Typography>Bio</Typography></Button>
                    </Grid>
                    <Grid item md="auto">
                        <Button onClick={() => setSubNav({ section: "Published" })}><Typography>Published</Typography></Button>
                    </Grid>
                    <Grid item md="auto">
                        <Button onClick={() => setSubNav({ section: "Patreon" })}><Typography>Patreon</Typography></Button>
                    </Grid>
                    <Grid item md="auto">
                        <Button onClick={() => setSubNav({ section: "Contact" })}><Typography>Contact</Typography></Button>
                    </Grid>
                </Grid>

                <Grid item md="12" sm="12">
                    <Paper elevation="3">
                        <HomeDisplay section={subNav.section} />
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default HomePage;