import React from "react";
import { Box, Grid } from "@material-ui/core/";

const ContactPage = () => {
    
    return (
        <Box>
            <Grid container direction="row">
                <Grid item md="12" sm="12">
                
                    <h3>Contact</h3>
                </Grid>
                <Grid item md="12" sm="12">
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
                </Grid>
                    
            </Grid>
        </Box>
    )
}

export default ContactPage;