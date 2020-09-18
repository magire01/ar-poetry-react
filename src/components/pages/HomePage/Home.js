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
                        <PatreonSection />
                    </div>
                );
            case "Contact":
                return (
                    <div>
                        <ContactSection />
                        <BioSection />
                        <PublishedSection />
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
                    <Typography variant="h4" onClick={() => setSubNav({ section: "All" })}>Home</Typography>
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
                        <div>
                            {homeDisplay()}
                        </div>
                        
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default HomePage;