import React, {useState} from 'react'

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

    if (props.title === "Local Events") {
        multiDeckImg1 = `${process.env.PUBLIC_URL}/images/svgs/${props.multiDeckImg[0]}`;
        multiDeckImg2 = `${process.env.PUBLIC_URL}/images/svgs/${props.multiDeckImg[1]}`;
        multiDeckImg3 = `${process.env.PUBLIC_URL}/images/svgs/${props.multiDeckImg[2]}`;
        // tempID = props.href;
        tempID = props.localsEventHref;
        console.log(tempID + "\nTHIS IS TEMP ID FOR LOCALS EVENT");
    } else if(props.title === "Salt Lake"){
        tempID = props.saltLakeHref;
        console.log('temp ID' + tempID);
    } else if(props.title === "Peoria, Illinois"){
        tempID = props.peoriaHref;
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
                <div id={tempID} className="card    my-10 flex items-center mx-20" sytle={{ width: "auto", border: "solid 2px green" }}>
                <div className="flex gap-4">
                    <h1 className="text-3xl font-bold">{props.title}</h1>
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

                    <div id={tempID} className="card    my-10 flex items-center mx-20" sytle={{ width: "auto", border: "solid 2px green" }}>
                    <div className="flex gap-4">
                        <h1 className="text-3xl font-bold">{props.title}</h1>
                        <img src={countryImage} style={{ width: '50px', height: '50px' }} alt="event location" />
                    </div>
                    <figure>
                        <img className="px-4" src={EventImage} alt="" />
                    </figure>
                    <div className="">
                        <div>
                            <img src={deckImg} alt="deck type" />
                        </div>
                        <div><h1 >{props.deckTitle}</h1></div>
                    </div>
                    <div className="stats shadow" style={{ width: "30rem" }}>
    
                        <div className="stat">
                            <div className="stat-figure text-primary">
                            </div>
                            <div className="stat-value">Place</div>
                            <div className="stat-value text-primary">{props.place}</div>
                        </div>
    
                        <div className="stat">
                            <div className="stat-figure text-secondary">
                            </div>
                            <div className="stat-value">Points</div>
                            <div className="stat-value text-secondary">+{props.points}</div>
    
                        </div>
    
                        <div className="stat">
                            <div className="stat-value" style={{ width: "auto" }}>List</div>
                            <img src={listImg} alt="img for link" />
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