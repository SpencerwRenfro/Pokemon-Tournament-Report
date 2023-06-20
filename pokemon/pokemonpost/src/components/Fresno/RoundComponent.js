import React from 'react'

import "../CSS/fonts.css"
function RoundComponent(props) {
    return (
        <div className="grid-rows-2 flex flex-row gap-8 mb-5">
            <p className='roundFonts self-center text-center font-bold text-2xl'>{props.roundId}</p>
            <div style={props.roundResult === "W" ? {background: "rgb(2 44 34)"} : (props.roundResult === "T" ?
            {backgroundColor: "#191106"} : {background: "#020101"
                })}
                // TODO: get single class name instead of duplicate
                    className={props.roundResult === "T" ? "tie flex basis-full flex basis-full py-3 px-3 rounded gap-4" : "flex basis-full py-3 px-3 rounded gap-4"}
            >
                <p className='text-2xl font-bold self-center'>{props.roundResult}</p>
                <div className="flex justify-between basis-full content-evenly">
                    <div >
                        <p className='text-2xl font-bold'>{props.roundTitle}</p>
                        <p className="text-xs">{props.deckTitle}</p>
                    </div>
                    <div className="flex items-center">
                        <img src={`${process.env.PUBLIC_URL}/images/Rounds/${props.deckImg}`} alt="Deck type "/>
                    </div>                    
                </div>
            
            {/* <img src={roundOne}/> */}
            </div>
        </div>
    )
}
export default RoundComponent