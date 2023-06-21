import React, {useState} from 'react'
import { Link} from "react-router-dom";

function EventItem(props) {


  
    let eventImage = `${process.env.PUBLIC_URL}/images/Convention_Centers/${props.image}`
    let locationFlag = `${process.env.PUBLIC_URL}/images/Location_Flags/${props.country}`
   
    let countryImage = `${process.env.PUBLIC_URL}/images/svgs/${props.country}`;

    let deckImg = `${process.env.PUBLIC_URL}/images/svgs/${props.deckImg}`
    let listImg = `${process.env.PUBLIC_URL}/images/svgs/list.svg`

    let multiDeckImg1;
    let multiDeckImg2;
    let multiDeckImg3;

    let event1;
    

    let tempID;
    let tempListID; 

    if (props.title === "Local Events") {
        multiDeckImg1 = `${process.env.PUBLIC_URL}/images/svgs/${props.multiDeckImg[0]}`;
        multiDeckImg2 = `${process.env.PUBLIC_URL}/images/svgs/${props.multiDeckImg[1]}`;
        multiDeckImg3 = `${process.env.PUBLIC_URL}/images/svgs/${props.multiDeckImg[2]}`;
        // tempID = props.href;
        tempID = props.localsEventHref;
       
        console.log(tempID + "\nTHIS IS TEMP ID FOR LOCALS EVENT");
    } else if(props.title === "Peoria, Illinois"){
        tempID = props.peoriaHref;
        tempListID = props.listId;
        console.log('temp ID' + tempID);
        console.log('listID' + props.listId);
    } else if(props.title === "Salt Lake City, Utah"){
        tempID = props.saltLakeHref;
        tempListID = props.listId;
        console.log('temp ID' + tempID);
    } else if(props.title === 'Toronto, Canada'){
        tempID = props.torontoHref
    } else if(props.title ===  'Arlington, Texas'){
        tempID = props.arlingtonHref;
    } else if(props.title === 'Orlando, Florida') {
        tempID = props.orlandoHref;
    } else if(props.title === 'Knoxville, Tennesse') {
        tempID = props.knoxvilleHref;
    } else if(props.title === 'Vancouver, Canada') {
        tempID = props.vancouverHref;
    }
    else if(props.title === 'Fort Wayne, Indiana') {
        tempID = props.fortWayneHref;
    } else if(props.title === 'EUIC, London') {
        tempID = props.londonHref;
        console.log('LONDON HREF_________' + tempID);
    } else if(props.title === 'Portland, Oregon') {
        tempID = props.portlandHref;
    } else if(props.title === 'Milwaukee, Wisconsin') {
        tempID = props.milwaukeeHref;
    }

    return (
        <div className="grid cols">   
            {
                props.title === "Local Events" ?
                <div id={tempID}>
                    <div className="flex row items-center justify-start gap-4 mb-3">
                        <h1 className="text-3xl font-bold mb-3">{props.title}</h1>
                        <img src={locationFlag} className="rounded" style={{ width: '35px', }} alt="event location" />
                    </div>
                    <div className="bg-cover bg-center rounded-[25px] mb-5" style={{ height: 350, backgroundImage: `url(${eventImage})`, backgroundRepeat: 'no-repeat',  }}>
                    </div>
                    <div className="mb-5">
                        <p>{props.content}</p>
                    </div>
                    <table className="table table-auto w-full mb-10">
                        <thead>
                            <tr>
                                <th>Deck</th>
                                <th>Event</th>
                                <th>Place</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img src={multiDeckImg1} alt="deck type" /></td>
                                <td>{props.localEventType[0]}</td>
                                <td>{props.multiPlace[0]}</td>
                                <td>+{props.multiPoints[0]}</td>
                            </tr>
                            <tr>
                                <td><img src={multiDeckImg2} alt="deck type" /></td>
                                <td>{props.localEventType[1]}</td>
                                <td>{props.multiPlace[1]}</td>
                                <td>+{props.multiPoints[1]}</td>
                            </tr>
                            <tr>
                                <td><img src={multiDeckImg3} alt="deck type" /></td>
                                <td>{props.localEventType[2]}</td>
                                <td>{props.multiPlace[2]}</td>
                                <td>+{props.multiPoints[2]}</td>
                            </tr>                      
                        </tbody>
                    </table>
                </div>
                :
                <div className="mb-10" id={tempID}>
                    <div className="flex row items-center justify-start gap-4 mb-3">
                        <h1 className="text-3xl font-bold">{props.title}</h1>
                        <img className="rounded" src={locationFlag} style={{ width: '35px'}} alt="event location" />
                    </div>
                    <div className="bg-cover bg-center rounded-[25px] mb-5" style={{ height: 350, backgroundImage: `url(${eventImage})`, backgroundRepeat: 'no-repeat' }}>                            
                    </div>
                    <div className="flex row items-center gap-4 pb-5">
                        <div>
                            <img src={deckImg} alt="deck type" />
                        </div>
                        <h3 className="text-2xl font-bold">{props.deckTitle}</h3>
                    </div>
                    <div className="grid grid-cols-3 stats py-2 mb-5" style={{  backgroundColor: "#030712", border: "solid 1px rgba(166, 173, 186, 0.1)" }}>
                        <div className="stat">
                            <p className="uppercase tracking-wider text-center text-xs mb-1">Place</p>
                            <p className="uppercase tracking-wider text-center font-bold text-2xl">{props.place}</p>
                        </div>
                        <div className="stat">                            
                            <p className="uppercase tracking-wider text-center text-xs mb-1">Points</p>
                            <p className="text-center font-bold text-center text-2xl">+{props.points}</p>
                        </div>
                        <div className="stat">
                            <div className="uppercase tracking-wider text-center text-xs mb-1" style={{ width: "auto" }}>List</div>
                            <Link target="_blank"rel="noopener noreferrer" to={`/${props.listId}`}>
                                <div className='flex justify-center'>
                                <button className="btn btn-ghost">
                                    <svg  className="inline-block w-6 h-6 mr-2 stroke-current" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="48"><path d="M149.825-280Q137-280 128.5-288.675q-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5 0 12.825-8.675 21.325-8.676 8.5-21.5 8.5Zm0-170Q137-450 128.5-458.675q-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5 0 12.825-8.675 21.325-8.676 8.5-21.5 8.5Zm0-170Q137-620 128.5-628.675q-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5 0 12.825-8.675 21.325-8.676 8.5-21.5 8.5ZM290-280v-60h550v60H290Zm0-170v-60h550v60H290Zm0-170v-60h550v60H290Z"/></svg>
                                </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <p className="leading-7 mb-5">{props.content}</p>
                        <p className="leading-7">{props.dayTwoContent}</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default EventItem
// {
//     <div className={`grid grid-cols-${props.deckImg.length + 1}`}>
//        {props.deckImg.map((item) => (
//            <img src={`${process.env.PUBLIC_URL}/images/Pokemon/${item}`} key={Math.floor((1 + Math.random()) * 0x10000)} />
                                           
//        ))}
//         <h1>{props.deckTitle}</h1>
//    </div>                                          
//    }