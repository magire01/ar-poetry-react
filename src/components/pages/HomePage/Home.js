import React, { useState } from "react";
import { Box, Grid, Button, Paper } from "@material-ui/core/";
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';

import BioSection from "./HomeContent/Bio";
import PublishedSection from "./HomeContent/Published";
import PatreonSection from "./HomeContent/Patreon";
import ContactSection from "./HomeContent/Contact";

const HomePage = () => {
    const divMargins = {
            padding: 20
        }
    
    const pageStyle = {
        body: {
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 15,
            paddingBottom: 15,
            width: "100%"
        }
    }

    const textStyle = {
        header: {
            color: "black"
        },
        subHeader: {
            color: "black"
        },
        subHeaderActive: {
            color: "red"
        }
    }

    const [subNav, setSubNav] = useState({
        section: "All"
    });

    const homeDisplay = () => {
        switch(subNav.section) {
            case "Bio":
                return (
                    <div>
                        <BioSection />
                        <PublishedSection />
                        <PatreonSection />
                        <ContactSection />
                    </div>
                );
            case "Published":
                return (
                    <div>
                        <PublishedSection />
                        <PatreonSection />
                        <ContactSection />
                        <BioSection />
                    </div>
                );
            case "Patreon":
                return (
                    <div>
                        <PatreonSection />
                        <ContactSection />
                        <BioSection />
                        <PublishedSection />
                    </div>
                );
            case "Contact":
                return (
                    <div>
                        <ContactSection />
                        <BioSection />
                        <PublishedSection />
                        <PatreonSection />
                    </div>
                );
            default:
                return (
                    <div>
                        <BioSection />
                        <PublishedSection />
                        <PatreonSection />
                        <ContactSection />
                    </div>
                );
        }
    }

    return (
        <Box>
            <Grid container direction="row">
                <Grid container justify="center" md="12" sm="12">
                    <Typography variant="h4" style={textStyle.header} onClick={() => setSubNav({ section: "All" })}>Home</Typography>
                </Grid>
        
                <Grid container md="12" sm="12" justify="center" spacing="3">
                    <Grid item md="auto">
                        <Button onClick={() => setSubNav({ section: "Bio" })} style={(subNav.section === "Bio" ? textStyle.subHeaderActive : textStyle.subHeader)}><Typography>Bio</Typography></Button>
                    </Grid>
                    <Grid item md="auto">
                        <Button onClick={() => setSubNav({ section: "Published" })} style={(subNav.section === "Published" ? textStyle.subHeaderActive : textStyle.subHeader)}><Typography>Published</Typography></Button>
                    </Grid>
                    <Grid item md="auto">
                        <Button onClick={() => setSubNav({ section: "Patreon" })} style={(subNav.section === "Patreon" ? textStyle.subHeaderActive : textStyle.subHeader)}><Typography>Patreon</Typography></Button>
                    </Grid>
                    <Grid item md="auto">
                        <Button onClick={() => setSubNav({ section: "Contact" })} style={(subNav.section === "Contact" ? textStyle.subHeaderActive : textStyle.subHeader)}><Typography>Contact</Typography></Button>
                    </Grid>
                </Grid>

                <Grid item md="12" sm="12" style={{ width: "100%" }}>
                    <Paper elevation="3">
                        <div style={pageStyle.body}>
                            {homeDisplay()}
                        </div>
                        
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default HomePage;