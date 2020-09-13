import React, { useState } from "react";


const PoemEntry = (props) => {

    const stylePoemEntry = {
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
            
        }
    }

    const [poemState, setPoemState] = useState({
        showPoem: false
    })

    if (!poemState.showPoem)
    
    return (
        <div>
            <button style={stylePoemEntry.button} onClick={()=> setPoemState({ showPoem: true })}>{props.title}</button>
            <p style={stylePoemEntry.date}> Date Posted: {props.date} </p>
            <p style={stylePoemEntry.date}> Additional Info: {props.info} </p>
        </div>
    )

    return (
        <div>
            <button style={stylePoemEntry.button} onClick={()=> setPoemState({ showPoem: false })}>{props.title}</button>
            <p style={stylePoemEntry.text}>
                {props.text}
            </p>
            <p style={stylePoemEntry.date}> Date Posted: {props.date} </p>
            <p style={stylePoemEntry.date}> Additional Info: {props.info} </p>
        </div>
    )
}

export default PoemEntry;
