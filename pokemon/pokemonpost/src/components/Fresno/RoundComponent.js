import React from 'react'
import "../CSS/roundComponent.css"

function RoundComponent(props) {

    //     const roundSchema = [
    //     {
    //         roundCount: 1,
    //         roundResult: "W",
    //         contesterName: "Ricardo Gonzalez",
    //         deckTitle: "Arceus/DUraladon/Alolan Vulpix",
    //         deckImg: "roundOne.svg"
    //     },
    // ]

    //                 <div style={props.roundResult === "W" ? { backgroundColor: "green" } : { backgroundColor: "red" }} 
    // className={props.roundResult === "T" ? "tie flex" : "flex"}

    // {props.roundResult === "T" ? d : e}
    return (
        <div>
            <div className='flex'>
                <h1 className='mr-5'>{props.roundId}</h1>
                <div style={props.roundResult === "W" ? {backgroundColor: "green"} : (props.roundResult === "T" ? 
                {backgroundColor: "yellow"} : {backgroundColor: "red"})}
                     className={props.roundResult === "T" ? "tie flex" : "flex"}
                >
                    <h1 className='mr-2'>{props.roundResult}</h1>
                    <div className='flex flex-col'>
                        <h1 className='mr-40'>{props.roundTitle}</h1>
                        <h1>{props.deckTitle}</h1>
                    </div>
                    <h1 className=''>{props.deckImg}</h1>
                </div>
            </div>

        </div>
    )
}

export default RoundComponent