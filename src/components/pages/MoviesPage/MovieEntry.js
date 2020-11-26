import React, { useState } from "react";

import { Container, Grid, Typography, Button } from "@material-ui/core";


const MovieEntry = (props) => {

    const styleMovieEntry = {
        button: {
            border: 0,
            fontSize: 35,
            background: "rgba(76, 175, 80, 0)",
            fontFamily: "Kite One",
            fontWeight: "bold"
        },
        date: {
            fontSize: 15,
            color: "grey",
        },
        text: {
            fontSize: 22,
            marginLeft: 30,
            lineHeight: 0.8,
            fontFamily: 'Sawarabi Mincho'
            
        },
        subheader: {
            fontSize: 22,
            fontWeight: "bold"
        }
    }

    const [movieState, setMovieState] = useState({
        showMovie: false
    })

    if (!movieState.showMovie)
    
    return (
        <Container>
            <Grid container>
                <Grid item md="12">
                    <Button style={styleMovieEntry.button} onClick={()=> setMovieState({ showMovie: true })}>{props.data.title}</Button>
                </Grid>
                <Grid item md="6" xs="12">
                    {props.data.year}
                </Grid>
                <Grid item md="6" xs="12">
                    {props.data.director}
                </Grid>
            </Grid>
        </Container>
    )

    return (
        <Container>
            <Grid container>
                <Grid item md="12">
                    <Button style={styleMovieEntry.button} onClick={()=> setMovieState({ showMovie: false })}>{props.data.title}</Button>
                </Grid>
                <Grid item md="6" xs="12">
                    {props.data.year}
                </Grid>
                <Grid item md="6" xs="12">
                    {props.data.director}
                </Grid>
                <Grid md="12">
                    <p><span style={styleMovieEntry.subheader}>Relatablility - </span>{props.data.relatability}</p>
                    <p>Score: {props.data.relatabilityScore}</p>
                </Grid>
                <Grid md="12">
                    <p><span style={styleMovieEntry.subheader}>Execution - </span>{props.data.execution}</p>
                    <p>Score: {props.data.executionScore}</p>
                </Grid>
                <Grid md="12">
                    <p><span style={styleMovieEntry.subheader}>Context - </span>{props.data.context}</p>
                    <p>Score: {props.data.contextScore}</p>
                </Grid>
                <Grid md="12">
                    <p><span style={styleMovieEntry.subheader}>Subtext - </span>{props.data.subtext}</p>
                    <p>Score: {props.data.subtextScore}</p>
                </Grid>
                <Grid md="12">
                    <p><span style={styleMovieEntry.subheader}>Emotion - </span>{props.data.emotion}</p>
                    <p>Score: {props.data.emotionScore}</p>
                </Grid>
                <Grid item md="12">
                    <h5 style={styleMovieEntry.subheader}>Overall Rating: {props.data.overAllRating}</h5>
                </Grid>
                <Grid item md="12">
                    <h5><span style={styleMovieEntry.subheader}>Song: </span>{props.data.song}</h5>
                </Grid>

            </Grid>
        </Container>
    )
}

export default MovieEntry;
