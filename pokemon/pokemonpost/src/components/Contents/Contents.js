import React from 'react'


function Contents(props) {
   
    return (
        <div className='card bg-base-100 py-10 px-10'>
            <div className="flex flex-row items-center gap-4 mb-3">
                <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M560-574v-48q33-14 67.5-21t72.5-7q26 0 51 4t49 10v44q-24-9-48.5-13.5T700-610q-38 0-73 9.5T560-574Zm0 220v-49q33-13.5 67.5-20.25T700-430q26 0 51 4t49 10v44q-24-9-48.5-13.5T700-390q-38 0-73 9t-67 27Zm0-110v-48q33-14 67.5-21t72.5-7q26 0 51 4t49 10v44q-24-9-48.5-13.5T700-500q-38 0-73 9.5T560-464ZM248-300q53.566 0 104.283 12.5T452-250v-427q-45-30-97.619-46.5Q301.763-740 248-740q-38 0-74.5 9.5T100-707v434q31-14 70.5-20.5T248-300Zm264 50q50-25 98-37.5T712-300q38 0 78.5 6t69.5 16v-429q-34-17-71.822-25-37.823-8-76.178-8-54 0-104.5 16.5T512-677v427Zm-30 90q-51-38-111-58.5T248-239q-36.537 0-71.768 9Q141-221 106-208q-23.1 11-44.55-3Q40-225 40-251v-463q0-15 7-27.5T68-761q42-20 87.395-29.5Q200.789-800 248-800q63 0 122.5 17T482-731q51-35 109.5-52T712-800q46.868 0 91.934 9.5Q849-781 891-761q14 7 21.5 19.5T920-714v463q0 27.894-22.5 42.447Q875-194 853-208q-34-14-69.232-22.5Q748.537-239 712-239q-63 0-121 21t-109 58ZM276-489Z"/></svg>
                <h1 className='text-3xl'>Contents</h1>
            </div>            
            <p className='my-1'><a href={`#${props.aboutMeHref}`}>About Me</a></p>
            <p className='my-1'><a href={`#${props.seasonSummary}`}>2022-2023 Season Summary</a></p>
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
            <p className='my-1'><a href={`#${props.weekBefore}`}>The Week Before Fresno</a></p>
            <p className='my-1'><a href={`#${props.fresnoDay1}`}>Fresno Day One</a></p>
            <p className='my-1'><a href={`#${props.fresnoDay2}`}>Fresno Day Two</a></p>
            <p className='my-1'><a href={`#${props.mewComparison}`}>Top 8 Mew List Comparison</a></p>
            <p className='my-1'><a href={`#${props.slops}`}>Props & Slops</a></p>
            <p className='my-1'><a href={`#${props.conclusion}`}>Conclusion</a></p>
        </div>
    )
}

export default Contents