import React from "react";
import { Box, Grid, Paper } from "@material-ui/core/";

import ContactHeader from "../PageHeaders/ContactHeader"

const ContactPage = () => {
    
    return (
        <Box>
            <Grid container direction="row">
                <Grid item md="12" sm="12">
                    <ContactHeader />
                </Grid>
                
                <Grid item md="12" sm="12">
                    <Paper variant="outlined" elevation="3">
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
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ContactPage;