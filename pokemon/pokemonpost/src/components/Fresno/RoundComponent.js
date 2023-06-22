import React, { useState } from 'react'


function RoundComponent(props) {

  


    // pokemon images
    let arceus = `${process.env.PUBLIC_URL}/images/Pokemon_Sprites/arceus.png`;
    let duraludon = `${process.env.PUBLIC_URL}/images/Pokemon_Sprites/duraludon-gmax.png`;
    let vulpix = `${process.env.PUBLIC_URL}/images/Pokemon_Sprites/vulpix-alola.png`
    let giratina = `${process.env.PUBLIC_URL}/images/Pokemon_Sprites/giratina-origin.png`;
    let comfey = `${process.env.PUBLIC_URL}/images/Pokemon_Sprites/comfey.png`;
    let miraidon = `${process.env.PUBLIC_URL}/images/Pokemon_Sprites/miraidon.png`;
    let flaaffy = `${process.env.PUBLIC_URL}/images/Pokemon_Sprites/flaaffy.png`;
    let umbreon = `${process.env.PUBLIC_URL}/images/Pokemon_Sprites/umbreon.png`;
    let mew = `${process.env.PUBLIC_URL}/images/Pokemon_Sprites/mew.png`;
    let genesect = `${process.env.PUBLIC_URL}/images/Pokemon_Sprites/genesect.png`; 
    let meloetta = `${process.env.PUBLIC_URL}/images/Pokemon_Sprites/meloetta.png`;
    let articuno = `${process.env.PUBLIC_URL}/images/Pokemon_Sprites/articuno.png`;
    let cramorant = `${process.env.PUBLIC_URL}/images/Pokemon_Sprites/cramorant.png`;
    let lugia = `${process.env.PUBLIC_URL}/images/Pokemon_Sprites/lugia.png`;
    let archeops = `${process.env.PUBLIC_URL}/images/Pokemon_Sprites/archeops.png`;
    let gardevoir = `${process.env.PUBLIC_URL}/images/Pokemon_Sprites/gardevoir.png`;
    let zacian = `${process.env.PUBLIC_URL}/images/Pokemon_Sprites/zacian.png`;
    let kyogre = `${process.env.PUBLIC_URL}/images/Pokemon_Sprites/kyogre.png`;
    let sableye = `${process.env.PUBLIC_URL}/images/Pokemon_Sprites/sableye.png`;
    let mewTwo = `${process.env.PUBLIC_URL}/images/Pokemon_Sprites/mewtwo.png`;
    let klefki = `${process.env.PUBLIC_URL}/images/Pokemon_Sprites/klefki.png`;
    // pokemon image data

    let tempImg1, tempImg2, tempImg3;
    let tempWidth1, tempWidth2, tempWidth3;


    if (props.roundId === "R1") {
        tempImg1 = arceus;
        tempImg2 = duraludon;
        tempImg3 = vulpix;
        tempWidth1 = '31px'
        tempWidth2 = '27px'
        tempWidth3 = '32px'

    } else if (props.roundId === "R2") {
        tempImg1 = comfey;
        tempImg2 = giratina;
        tempWidth1 = '31'
        tempWidth2 = '40'
    } else if (props.roundId === "R3") {
        tempImg1 = miraidon;
        tempImg2 = flaaffy;
        tempWidth1 = '34px'
        tempWidth2 = '32px'
    } else if (props.roundId === "R4") {
        tempImg1 = arceus;
        tempImg2 =duraludon;
        tempImg3 = umbreon;
        tempWidth1 = '31px';
        tempWidth2 = '27px';
        tempWidth3 = '33px';
    }  else if (props.roundId === "R5") {
        tempImg1 = mew;
        tempImg2 =genesect;
        tempImg3 = meloetta;
        tempWidth1 = '32px';
        tempWidth2 = '29px';
        tempWidth3 = '22px';
    }  else if (props.roundId === "R6") {
        tempImg1 = comfey;
        tempImg2 = articuno;
        tempImg3 = cramorant;
        tempWidth1 = '31px';
        tempWidth2 = '32px';
        tempWidth3 = '27px';
    }  else if (props.roundId === "R7") {
        tempImg1 = mew;
        tempImg2 = genesect;
        tempWidth1 = '32px';
        tempWidth2 = '29px';

    }   else if (props.roundId === "R8") {
        tempImg1 = lugia;
        tempImg2 = archeops;

        tempWidth1 = '32px';
        tempWidth2 = '29px';
     
    }  else if (props.roundId === "R9") {
        tempImg1 = gardevoir;
        tempImg2 = zacian;
        tempWidth1 = '29px';
        tempWidth2 = '33px';
    }  else if (props.roundId === "R10") {
        tempImg1 = mew;
        tempImg2 = genesect;
        tempWidth1 = '32px';
        tempWidth2 = '29px';

    }   else if (props.roundId === "R11") {
        tempImg1 = comfey;
        tempImg2 = kyogre;
        tempWidth1 = '32px';
    }  else if (props.roundId === "R12") {
        tempImg1 = comfey;
        tempImg2 = sableye;
        tempWidth1 = '31px';
        tempWidth2 = '32px';
    }  else if (props.roundId === "R13") {
        tempImg1 = gardevoir;
        tempImg2 = mewTwo;
        tempImg3 = klefki;
        tempWidth1 = '29px';
        tempWidth2 = '26px';
        tempWidth3 = '41px';
    

    } 


    return (
        <div className="grid-rows-2 flex flex-row md:gap-8 mb-5">
            <p className='roundFonts self-center text-center font-bold text-2xl'>{props.roundId}</p>
            <div style={props.roundResult === "W" ? { background: "rgb(2 44 34)" } : (props.roundResult === "T" ?
                { backgroundColor: "#191106" } : {
                    background: "#020101"
                })}
                // TODO: get single class name instead of duplicate
                className={props.roundResult === "T" ? "tie flex basis-full py-3 px-3 rounded gap-4" : "flex basis-full py-3 px-3 rounded gap-4"}
            >
                <p className='text-2xl font-bold self-center'
                    style={props.roundResult === "W" ? { color: "#66BB6A" }
                        :
                        (props.roundResult === "L" ? { color: "#F44336" }
                            : { color: "#FFA726" })}
                >

                    {props.roundResult}
                </p>
                <div className="flex justify-between basis-full content-evenly">
                    <div >
                        <p className={`md:text-2xl font-bold`}>{props.roundTitle}</p>
                        <p className="text-xs"></p>
                    </div>
                    <div className="flex items-center">
                        {/* <img src={`${process.env.PUBLIC_URL}images/Rounds/${props.deckImg}`}/> */}
                        <img style={{ width: `${tempWidth1}` }} src={tempImg1} alt="pokemon type" />
                        <img style={{ width: `${tempWidth2}` }} src={tempImg2} alt="pokemon type" />
                        {
                            tempImg3 ? 
                             <img style={{ width: `${tempWidth3}` }} src={tempImg3} alt="pokemon type"/>
                             : ""
                        }

                    </div>
                </div>
            </div>
        </div >
    )
}
export default RoundComponent


