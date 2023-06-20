import React from 'react'

import "../CSS/fonts.css"
function RoundComponent(props) {
    return (
        <div>
            <div className='flex'>
                <h1 className='mr-5 white roundFonts'>{props.roundId}</h1>
                <div style={props.roundResult === "W" ? {background: "linear-gradient(0deg, rgba(102, 187, 106, 1), rgba(20, 20, 20, 0.9)), linear-gradient(0deg, #180605, #180605)", width: "700px"} : (props.roundResult === "T" ?
                {backgroundColor: "yellow"} : {background: "linear-gradient(0deg, rgba(24, 6, 5, 1), rgba(0, 0, 0, 0.9)), linear-gradient(0deg, #180605, #180605)"
                    })}
                     className={props.roundResult === "T" ? "tie flex" : "flex"}
                >
                    <h1 className='mr-2 white roundFonts'>{props.roundResult}</h1>
                    <div className='flex flex-col'>
                        <h1 className='mr-40 white roundFonts'>{props.roundTitle}</h1>
                        <h1>{props.deckTitle}</h1>
                    </div>
               <img src={`${process.env.PUBLIC_URL}/images/Rounds/${props.deckImg}`} alt="Deck type "/>
               {/* <img src={roundOne}/> */}
                </div>
            </div>
        </div>
    )
}
export default RoundComponent