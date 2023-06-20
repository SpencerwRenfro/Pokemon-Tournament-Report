import React, {useState} from 'react'
import { Link} from "react-router-dom";

function EventItem(props) {

    let [anchorID, setAnchorID] = useState(props.id)

    let EventImage = `${process.env.PUBLIC_URL}/images/svgs/${props.image}`;
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
    } else if(props.title === "Salt Lake"){
        tempID = props.saltLakeHref;
        tempListID = props.listId;
        console.log('temp ID' + tempID);
        console.log('listID' + props.listId);
    } else if(props.title === "Peoria, Illinois"){
        tempID = props.peoriaHref;
        tempListID = props.listId;
        console.log('temp ID' + tempID);
    } else if(props.title === 'Alrington Texas'){
        tempID = props.arlingtonHref
    } else if(props.title ===  'Toronto, Canada'){
        tempID = props.torontoHref;
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
        <div>
           

            {
                props.title === "Local Events" ?
                <div id={tempID} className="card  my-10 flex items-center mx-20" sytle={{ width: "auto", border: "solid 2px green" }}>
                <div className="flex gap-4">
                    <h1 className="text-3xl font-bold white">{props.title}</h1>
                    <img src={countryImage} style={{ width: '50px', height: '50px' }} alt="event location" />
                </div>
                <figure>
                    <img className="px-4" src={EventImage} alt="" />
                </figure>


                    <div className="stats shadow" style={{ }}>


                        <div>
                            <div className="stat-value" style={{ width: "auto" }}>Deck</div>
                            <img src={multiDeckImg1} alt="deck type" />
                            <img src={multiDeckImg2} alt="deck type" />
                            <img src={multiDeckImg3} alt="deck type" />
                        </div>

                        <div className="stat">
                            <div className="stat-value">Event</div>
                            <div>{props.localEventType[0]}</div>
                            <div>{props.localEventType[1]}</div>
                            <div>{props.localEventType[2]}</div>
                        </div>

                        <div className="stat">
                            <div className="stat-value" style={{ width: "auto" }}>Place</div>
                            <div>{props.multiPlace[0]}</div>
                            <div>{props.multiPlace[1]}</div>
                            <div>{props.multiPlace[2]}</div>
                        </div>

                        <div className="stat">
                            <div className="stat-value" style={{ width: "auto" }}>Points</div>
                            <div>+{props.multiPoints[0]}</div>
                            <div>+{props.multiPoints[1]}</div>
                            <div>+{props.multiPoints[2]}</div>
                        </div>
                    </div>
                    <div className="card-body">
                        <p>{props.content}</p>
                    </div>
                    </div>
                    :

                    <div id={tempID} className="card mt-5 mx-20">
                    <div className="flex col justify-start gap-4">
                        <h1 className="text-3xl font-bold text-white ">{props.title}</h1>
                        <img src={countryImage} style={{ width: '50px', height: '50px' }} alt="event location" />
                    </div>
                    <figure  className='flex justify-start'>
                        <img className="my-2" src={EventImage} alt="" />
                    </figure>
                    <div className="flex row gap-4 pb-5 my-2">
                        <div>
                            <img src={deckImg} alt="deck type" />
                        </div>
                        <div><h1 className="text-white">{props.deckTitle}</h1></div>
                    </div>
                    <div className="grid grid-cols-3 stats py-2" style={{  backgroundColor: "#030712", border: "solid 1px rgba(166, 173, 186, 0.1)", borderRadius: "0" }}>
                        <div className="stat">
                            <p className="uppercase tracking-wider text-center">Place</p>
                            <div className="uppercase tracking-wider text-center font-bold text-white">{props.place}</div>
                        </div>
    
                        <div className="stat">
                            
                            <p className="uppercase tracking-wider text-center">Points</p>
                            <p className="text-center font-bold text-white">+{props.points}</p>
    
                        </div>
    
                        <div className="stat">
                            <div className="uppercase tracking-wider text-center" style={{ width: "auto" }}>List</div>
                            <Link target="_blank"rel="noopener noreferrer" to={`/${props.listId}`}>
                                <div className='flex justify-center'>
                                <img className="" src={listImg} alt="img for link" />
                                </div>
                            </Link>
                        </div>

      
    
                    </div>
                    <div className="card-body">
                        <p>{props.content}</p>
                        <p>{props.dayTwoContent}</p>
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