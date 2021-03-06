import React, { useState } from "react";
import '../../node_modules/fontsource-roboto';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Grid, AppBar, Typography, Popper, Card } from "@material-ui/core/";
import { makeStyles } from '@material-ui/core/styles';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const useStyles = makeStyles((theme) => ({
    popover: {
      pointerEvents: "none",
    },
    paper: {
      padding: theme.spacing(1),
    },
}));

const Header = () => {

    const [navPage, setNavPage] = useState({
        page: "Home"
    });

    

    const classes = useStyles();


    const styleNav = {
        body: {
            flexGrow: 1,
            backgroundColor: "black",
        },
        title: {
            fontSize: 30,
            display: "flex",
            justifyContent: "center"
        },
        linkDiv: {
            display: "flex",
            alignContent: "center",
            justify: "center",
            paddingTop: 10,
            marginLeft: 5
        },
        link: {
            textDecoration: "none",
            color: "white",
            fontSize: 30
        },
        active: {
            textDecoration: "none",
            color: "red",
            fontSize: 30
        },
        popper: {
            marginTop: 10,
            backgroundColor: "black",
            color:"white",
        }
    }
    
    return (
        <Grid
            container
            spacing={1}
            direction="row"
            
        >
        <div>
            <AppBar position="absolute" style={styleNav.body}>
                <Grid container>
                    <Grid container md="5" xs="12" alignContent="center" justify="center">
                        <Link style={{ textDecoration: "none", color: "white" }} to="/"><Typography onClick={() => setNavPage({ page: "Home" })} style={styleNav.title}> Andrew Rueter <span style={{ color: "red", marginLeft: 7 }}>Poetry</span></Typography></Link>
                    </Grid>

                    <Grid container md="7" xs="12" spacing="5" style ={styleNav.linkDiv} alignContent="center" justify="center">
                        <Grid item md="auto">
                            <Link style={(navPage.page === "Home") ? styleNav.active : styleNav.link} to="/" onClick={() => setNavPage({ page: "Home" })}>
                                <Typography>Home</Typography>
                            </Link>  
                        </Grid>
                        <Grid item md="auto">
                            <Link style={(navPage.page === "Poetry") ? styleNav.active : styleNav.link} to="/poetry" onClick={() => setNavPage({ page: "Poetry" })}>
                                <Typography>Poetry</Typography></Link>
                        </Grid>
                        <Grid item md="auto">
                            <Link style={(navPage.page === "Movies") ? styleNav.active : styleNav.link} to="/movies" onClick={() => setNavPage({ page: "Movies" })}>
                                <Typography>Movies</Typography></Link>
                        </Grid>
                        <Grid item md="auto">
                            <Link style={(navPage.page === "Stories") ? styleNav.active : styleNav.link} to="/stories" onClick={() => setNavPage({ page: "Stories" })}>
                                <Typography>Stories</Typography></Link>
                        </Grid>
                    </Grid>
                </Grid>
            </AppBar>
        </div>

        </Grid>
    )
}

export default Header;