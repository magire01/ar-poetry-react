import React from "react";
import { Grid } from "@material-ui/core/";

import NavBar from "./NavBar"

const Header = () => {

    const headerStyle = {
        fontSize: 35,
        color: "#213c80",
        padding: 0,
        marginBottom: 0,
        textAlign: "center"
    }

    const header2Style = {
        fontSize: 75,
        color: "#990e18",
        marginTop: 0,
        marginBottom: 10,
        textAlign: "center",
    }
    
    return (
        <Grid
            container
            spacing={1}
            direction="row"
            alignItems="center"
            justify="center"
        >
            <Grid
                item
                spacing={1}
                md="5"
            >
                <h1 style={headerStyle}>Andrew Rueter</h1>
                <h1 style={header2Style}>Poetry</h1>
            </Grid>
            {/* <Grid
                item
                spacing={1}
                md="8"
            >
                
            </Grid>  */}
            <Grid
                item
                spacing={1}
                md="7"
            >
                <NavBar />
            </Grid> 
            

        </Grid>
    )
}

export default Header;