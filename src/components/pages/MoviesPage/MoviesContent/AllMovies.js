import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core/";
// import nl2br from "react-newline-to-break";
import MovieData from "../../../../utilities/movies.json"

import MovieEntry from "../MovieEntry";


const AllMovies = () => {
    
    const [movieState, setMovieState] = useState({
        dataArr: []
    })

    useEffect(() => {
        setMovieState({
            dataArr: MovieData.data
        })
      }, []);

    const styleMovies = {
        movieEntry: {
            marginTop: 20,
            marginBottom: 40
        },
        header: {
            fontSize: 40,
            textAlign: "center",
            marginTop: 5
        }
    }

    return (

        <Grid container>
            <Typography>
                {movieState.dataArr.map(movie => (
                    <Grid item md="12">
                        <div style={styleMovies.movieEntry}>
                            <MovieEntry data={movie}/>
                        </div>
                        
                    </Grid>
                ))}
            </Typography>
        </Grid>
    )
}

export default AllMovies;