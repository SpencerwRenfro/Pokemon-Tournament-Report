import React from 'react'


function Contents(props) {
   
    return (
        <div className='white  text-left py-10 px-10' style={{backgroundColor: "#424242"}}>
            <h1 className='text-3xl'>Contents</h1>
            <h1><a href={`#${props.aboutMeHref}`}>About Me</a></h1>
            <h1><a href={`#${props.seasonSummary}`}>2022-2023 Season Summary</a></h1>
            <ul className="max-w-md space-y-1 list-disc list-inside pb-5">
            <li><a href={`#${props.saltLakeHref}`}>Salt Lake</a></li>
            <li><a href={`#${props.peoriaHref}`}>Peoria</a></li>
            <li><a href={`#${props.arlingtonHref}`}>Arlington</a></li>
            <li><a href={`#${props.torontoHref}`}>Toronto</a></li>
            <li><a href={`#${props.orlandoHref}`}>Orlando</a></li>
            <li><a href={`#${props.knoxvilleHref}`}>Knoxville</a></li>
            <li><a href={`#${props.vancouverHref}`}>Vancouver</a></li>
            <li><a href={`#${props.fortWayneHref}`}>Fort Wayne</a></li>
            <li><a href={`#${props.londonHref}`}>EUIC, London</a></li>
            <li><a href={`#${props.localsEventHref}`}>Local Events</a></li>
            <li><a href={`#${props.portlandHref}`}>Portland</a></li>
            <li><a href={`#${props.milwaukeeHref}`}>Milwaukee</a></li>           
            </ul>
            <h1 className='py-1'><a href={`#${props.weekBefore}`}>The Week Before Fresno</a></h1>
            <h1 className='py-1'><a href={`#${props.fresnoDay1}`}>Fresno Day One</a></h1>
            <h1 className='py-1'><a href={`#${props.fresnoDay2}`}>Fresno Day Two</a></h1>
            <h1 className='py-1'><a href={`#${props.mewComparison}`}>Top 8 Mew List Comparison</a></h1>
            <h1 className='py-1'><a href={`#${props.slops}`}>Props & Slops</a></h1>
            <h1 className='py-1'><a href={`#${props.conclusion}`}>Conclusion</a></h1>
        </div>
    )
}

export default Contents