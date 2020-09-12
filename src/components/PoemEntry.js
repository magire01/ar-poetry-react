import React, { useState } from "react";


const PoemEntry = (props) => {

    const stylePoemEntry = {
        button: {
            border: 0,
            fontSize: 25,
            background: "rgba(76, 175, 80, 0)"

        }
    }

    const [poemState, setPoemState] = useState({
        showPoem: false
    })

    if (!poemState.showPoem)
    
    return (
        <div>
            <button style={stylePoemEntry.button} onClick={()=> setPoemState({ showPoem: true })}>{props.title}</button>
        </div>
    )

    return (
        <div>
            <button style={stylePoemEntry.button} onClick={()=> setPoemState({ showPoem: false })}>{props.title}</button>
            <p>
                {props.text}
            </p>
        </div>
    )
}

export default PoemEntry;
