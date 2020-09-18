import React from "react";
import { Grid, Typography } from "@material-ui/core/";
import nl2br from "react-newline-to-break";

import PoemEntry from "../PoemEntry"

const FeaturedPoems = () => {

    const poemData = {
        data: [
            {
                id: 2,
                title: "Burnt",
                datePosted: "July 2 2020",
                addInfo: "This poem is about communism",
                text: `There are cracks in the pavement\n
                messages the grave sent\n
                the dead are beyond containment\n
                escaping earthly enslavement.\n
                \n
                Their absence in the adytum\n
                brought by the bastard's gun\n
                leaves a black star sun\n
                burning the master's son.\n
                \n
                He's burning alive\n
                he's burning to die\n
                he's burning so I\n
                burn one and sigh.\n
                \n
                The burnt coal\n
                on my burnt soul\n
                burnt whole\n
                until cold.`
            },
            {
                id: 4,
                title: "Haunted",
                datePosted: "March 2018",
                addInfo: "This poem is about communism",
                text: `I argue\n
                To harm you\n
                The protective computer screen\n
                Allows me to be rude or mean\n
                Without feeling your pain\n
                So it becomes a game\n
                Or a simulation of fame\n
                If I can ignore the shame\n
                \n
                The tread is wearing off the tire\n
                After the internet stripped\n
                The rubber off the telephone wire\n
                And we lost our loose grip\n
                After being shocked\n
                By the rest of the flock\n
                Their existence\n
                Shows a difference\n
                That is hard to accept\n
                We're not what we expect\n
                \n
                We push the boundaries of communication\n
                But we can't handle the technology\n
                I feel it gives me social immunization\n
                But I feel the darkness follow me\n
                \n
                And swallow me\n
                Until I'm wallowing\n
                Yet I don't know why\n
                I try to ignore it\n
                Only if it gets me high\n
                Will I be for it\n
                \n
                This utilitarian keyboard\n
                Should help me see more\n
                Instead it transcribes my anger\n
                As I turn into an electric stranger\n
                The words on my pixelated screen\n
                Do not reflect my childhood dreams\n
                But the bitterness of dreams being crushed\n
                My petulant reactions are thoughtlessly rushed\n
                And I represent my views in a negative way\n
                Until I'd be more useful with nothing to say\n
                \n
                There is a need for empathy\n
                In the electronic discourse\n
                Right now there is only entropy\n
                And words without remorse\n
                Spoken from a high horse\n
                That looks down on peasants who own it\n
                It's also a slave but doesn't even know it\n
                \n
                So it arrogantly trots along\n
                Never admitting that it's wrong\n
                Until it hears the slithering snakes rattle\n
                Then it doesn't mind wearing a saddle\n
                But the venom has already been injected\n
                And its mind becomes hopelessly infected\n
                \n
                We argue without blinking\n
                We argue without thinking\n
                We argue with poor logic\n
                Our ignorance we flaunt it\n
                Until the internet is haunted`
            }
        ]
    }

    const stylePoems = {
        poemEntry: {
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
                <Grid item md="12" sm="12">
                    {poemData.data.map(( data, index ) => (
                        <div style={stylePoems.poemEntry}>
                            <PoemEntry title={data.title} text={nl2br(data.text)} date={data.datePosted} info={data.addInfo} />
                        </div>
                    ))}
                </Grid>
            </Typography>
        </Grid>
    )
}

export default FeaturedPoems;