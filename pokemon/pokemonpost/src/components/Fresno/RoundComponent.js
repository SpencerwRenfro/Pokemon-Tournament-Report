import React, { useState } from 'react'

import sprite_records from "../../pokemon_sprites.json"

import "../CSS/fonts.css"
function RoundComponent(props) {

    let imgUrlPath = `${process.env.PUBLIC_URL}/images/Pokemon_Sprites/`;

    {/* <img src={`${process.env.PUBLIC_URL}/images/Pokemon_Sprites/${props.deckImg[index]}`} /> */ }
    {/* <img src={`${process.env.PUBLIC_URL}/images/Pokemon_Sprites/${props.deckImg}`}/> */ }

    let imageArray = [
        {
            id: "r1",
            images: ["arceus.png", "duraludon-gmax.png", "vulpix-alola.png"],
        },
        {
            id: "r2",
            images: ["giratina-origin.png", "comfey.png"],
        }

    ]

    return (
        <div className="grid-rows-2 flex flex-row gap-8 mb-5">
            <p className='roundFonts self-center text-center font-bold text-2xl'>{props.roundId}</p>
            <div style={props.roundResult === "W" ? { background: "rgb(2 44 34)" } : (props.roundResult === "T" ?
                { backgroundColor: "#191106" } : {
                    background: "#020101"
                })}
                // TODO: get single class name instead of duplicate
                className={props.roundResult === "T" ? "tie flex basis-full flex basis-full py-3 px-3 rounded gap-4" : "flex basis-full py-3 px-3 rounded gap-4"}
            >
                <p className='text-2xl font-bold self-center'
                    style={props.roundResult === "W" ? { color: "green" }
                        :
                        (props.roundResult === "L" ? { color: "red" }
                            : { color: "yellow" })}
                >

                    {props.roundResult}
                </p>
                <div className="flex justify-between basis-full content-evenly">
                    <div >
                        <p className='text-2xl font-bold'>{props.roundTitle}</p>
                        <p className="text-xs">{props.deckTitle}</p>
                    </div>
                    <div className="flex items-center">
                       
                 


                    </div>
                </div>

               
            </div>
        </div >
    )
}
export default RoundComponent


     {
                 // props.roundSchema.map((task, index) => {}
                            // console.log(props.deckImg)
                        }

                        {
                            // sprite_records && sprite_records.map( (data, index) => {
                            //     return(
                            //         <div className='box'>
                            //             <img src={`${process.env.PUBLIC_URL}/images/Pokemon_Sprites/${data.images[index]}`} />
                            //         </div>
                            //     )
                            // })
                            // working above
             
                        }