import React from "react";
import { Grid, Typography } from "@material-ui/core/";

const ContactSection = () => {

    return (

        <Grid container>
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
        </Grid>
    )
}

export default ContactSection;