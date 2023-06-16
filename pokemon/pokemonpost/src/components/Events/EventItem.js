import React from 'react'

function EventItem(props) {

    const eventTitle = 'Salt Lake City Utah';
    const country = 'USA';
    const deck = ['Mew', 'Genesect'];
    const place = 542;
    const points = 0;

    let EventImage = `${process.env.PUBLIC_URL}/images/svgs/${props.image}`;
    let countryImage = `${process.env.PUBLIC_URL}/images/svgs/${props.country}`;
    let USA = `${process.env.PUBLIC_URL}/images/svgs/USA.svg`;
    let deckImg = `${process.env.PUBLIC_URL}/images/svgs/${props.deckImg}`

    return (
        <div>
            {/* <div>
                <h1 className="text-3xl font-bold">{props.title}</h1>
                <img src={countryImage} />
                <img src={EventImage} alt="" />
            </div>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <img src="" alt="" />
                <h1>{props.deck}</h1>
            </div>
            <div>
                <h3>{props.place}</h3>
                <h3>+{props.points}</h3>
                <h3>List: (place link here)</h3>
            </div> */}
            <div className="card w-96 bg-base-300 shadow-xl my-10">
                <div className="flex gap-4">
                    <h1 className="text-3xl font-bold">{props.title}</h1>
                    <img src={countryImage} style={{ width: '50px', height: '50px' }} alt="event location" />
                </div>
                <figure>
                    <img className="px-4" src={EventImage} alt="" />
                </figure>
                <div className="">
                    <div><img src={deckImg}  alt="deck type" /></div>
                    <div><h1 >{props.deckTitle}</h1></div>
                </div>
                <div className="card-body">
                    <p>{props.content}</p>
                    <p>{props.dayTwoContent}</p>
                </div>
            </div>

        </div>
    )
}

export default EventItem