import React, { useState } from "react";
import 'fontsource-roboto';
import { Grid, Button, Paper } from "@material-ui/core/";
import Typography from '@material-ui/core/Typography';

import BioSection from "./HomeContent/Bio";
import PublishedSection from "./HomeContent/Published";
import PatreonSection from "./HomeContent/Patreon";
import ContactSection from "./HomeContent/Contact";

const HomeDisplay = (props) => {

    const [homeDisplay, setHomeDisplay] = useState({
        section: props.section
    });

    switch(homeDisplay.section) {
        case "Bio":
            return (
                <div>
                    <BioSection />
                </div>
            )
        case "Published":
            return (
                <div>
                    <PublishedSection />
                </div>
            )
        case "Patreon":
            return (
                <div>
                    <PatreonSection />
                </div>
            )
        case "Contact":
            return (
                <div>
                    <PatreonSection />
                </div>
            )
        default:
            return (
                <div>
                    <BioSection />
                    <PublishedSection />
                    <PatreonSection />
                    <ContactSection />
                </div>
            )
    }
    
}

export default HomeDisplay;