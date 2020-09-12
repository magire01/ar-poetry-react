import React from "react";
import { Box, Grid } from "@material-ui/core/";
// import Obj from "../../utilities/poems.json"
import nl2br from "react-newline-to-break";

import PoemButton from "../PoemEntry"

const PoetryPage = () => {

    const poemData = {
        data: [
            {
                id: 1,
                title: "Art and Religion",
                datePosted: "May 2019",
                addInfo: "This poem is about communism",
                text: `Can art and religion coexist\n
                when art is about asking questions\n
                and religion is about providing answers?`
            },
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
                id: 3,
                title: "Creatures",
                datePosted: "October 2017",
                addInfo: "This poem is about communism",
                text: `The Sun shines on my computer\n
                Creating a protective glare\n
                But night comes like an intruder\n
                At pictures I begin to stare\n
                \n
                After I view their portrait online\n
                I want to see their body on mine\n
                We talk all night\n
                Until I see the light\n
                That they're not that bright\n
                Or that they like to fight\n
                Desperation swirls\n
                I enter a world\n
                Where the randomness of human interaction\n
                Meets the randomness of my attraction\n
                And the low visibility\n
                Endears no civility\n
                Will I spend infinity\n
                In this digital city?\n
                \n
                The creatures try to hide\n
                They scatter in the distance\n
                They're not hard to find\n
                When their profiles leave imprints\n
                But the parasites are quick\n
                And the scavengers stick\n
                Vultures fly from iPad to iPhone\n
                Leeches try to make my pad their home\n
                Devouring me until I'm bad to the bone\n
                Like the solicitous predators\n
                Who act like creditors\n
                And the sly foxes\n
                Who claim they're locksmiths\n
                They all have claws and fangs\n
                They're all just jaws with brains\n
                I play possum\n
                Until I've lost them\n
                \n
                When monsters are made from loneliness\n
                They try to trick me with phoniness\n
                They feel I wouldn't want us to be together\n
                And they're probably right\n
                Because all I want is to spend forever\n
                In love's divine light\n
                Nocturnal animals just want the meal\n
                Of my motion\n
                They don't want to honestly feel\n
                My devotion\n
                \n
                In the wild\n
                I am a child\n
                The creatures cut deep\n
                They make me weep\n
                Until I choose to sleep\n
                But when I avoid their glance\n
                I avoid love's chance\n`
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
        }
    }
    
    return (
        <Box>
            <Grid container direction="row">
                <Grid item md="12" sm="12">
                    <h3>Poetry</h3>
                </Grid>
                <Grid item md="12" sm="12">
                    <p> Test about me test about me test about me test about me test about me test about me test about me test about me test about me test  me test about me test about me test aboutabout </p>
                </Grid>
                <Grid item md="12" sm="12">
                    {poemData.data.map(( data, index ) => (
                        <div style={stylePoems.poemEntry}>
                            <PoemButton title={data.title} text={nl2br(data.text)} />
                        </div>
                    ))}
                </Grid>
                
            </Grid>
        </Box>
    )
}

export default PoetryPage;