import React from "react";
import { Grid, Typography } from "@material-ui/core/";

import Patreon from "./Patreon"

const ContactSection = () => {

    return (

        <Grid container style={{ marginTop: "5%" }}>
            <Typography>
            <h5>Contact Andrew Rueter</h5>

            <form>
                <p>Name</p>
                <input />
                <p>Email</p>
                <input />
                <p>Message</p>
                <textarea />
                <p></p>
                <button>Submit</button>
            </form>
            </Typography>
            <Patreon />
        </Grid>
    )
}

export default ContactSection;