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
    let listImg = `${process.env.PUBLIC_URL}/images/svgs/list.svg`

    return (
        <div>
            <div className="card    my-10 flex items-center mx-20" sytle={{width: "auto", border: "solid 2px green"}}>
                <div className="flex gap-4">
                    <h1 className="text-3xl font-bold">{props.title}</h1>
                    <img src={countryImage} style={{ width: '50px', height: '50px' }} alt="event location" />
                </div>
                <figure>
                    <img className="px-4" src={EventImage} alt="" />
                </figure>
                <div className="">
                    <div><img src={deckImg} alt="deck type" /></div>
                    <div><h1 >{props.deckTitle}</h1></div>
                </div>
                <div className="stats shadow" style={{width: "30rem"}}>

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
                        <div className="stat-value" style={{width: "auto"}}>List</div>
                        <img src={listImg} alt="img for link" />
                    </div>

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