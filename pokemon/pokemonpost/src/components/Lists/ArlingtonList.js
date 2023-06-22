import React from 'react'




function Arlington() {

  let lugia = `${process.env.PUBLIC_URL}/images/Pokemon_Sprites/lugia.png`;
  let archeops = `${process.env.PUBLIC_URL}/images/Pokemon_Sprites/archeops.png`;
  let USA = `${process.env.PUBLIC_URL}/images/Location_Flags/united-states.svg`;

  return (
    <div className="container mx-auto px-8">
      <div className='flex flex-row mt-10'>
        <a href="/" className='pr-3' style={{color: "#90CAF9"}}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
          </svg>
          </a>
          <a href="/">
          <h3 style={{ color: "#90CAF9" }} className='pb-10'>BACK TO ARTICLE</h3>
          </a>
    
      </div>
      <div className='flex row items-center gap-4 mb-10'>
        <h1 className="text-3xl font-bold">Arlington, Texas</h1>
        <img src={USA} className="rounded" style={{ width: '35px', }} alt="event location" />
      </div>



      <div className="flex row items-center gap-4 pb-5">
        <div className='flex flex-row'>
          <img src={lugia} alt="mew" />
          <img src={archeops} alt="genesect" />
        </div>
        <h3 className="text-2xl font-bold grow">Lugia Archeops</h3>
        <div>
          <h1>Place</h1>
          <p className='font-bold text-xl'>133</p>
        </div>
      </div>

      <div className="table border-separate rounded mb-10 pb-5" style={{ border: "solid 1px rgba(166, 173, 186, 0.1)" }}>
        <thead>
          <tr>
            <th className="px-10">Pokémon (13)</th>
            <th className="px-10">Trainer (43)</th>
            <th className="px-10">Energy (4)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="align-top px-10" style={{ borderRight: "solid 1px rgba(166, 173, 186, 0.1)" }}>
              <p className="mb-3">4 Lugia V</p>
              <p className="mb-3">3 Lugia VSTAR </p>
              <p className="mb-3">4 Archeops</p>
              <p className="mb-3">1 Lumineon V</p>
              <p className="mb-3">1 Stoutland V</p>
              <p className="mb-3">1 Radient Charizard</p>
              <p className="mb-3">Yveltal</p>
              <p className="mb-3">Oranguru</p>
              <p>Pumpkaboo</p>
            </td>
            <td className="align-top px-10" style={{ borderRight: "solid 1px rgba(166, 173, 186, 0.1)" }}>
              <p className="mb-3">4 Professor's</p>
              <p className="mb-3">Research</p>
              <p className="mb-3">2 Serena</p>
              <p className="mb-3">2 Boss's Orders</p>
              <p className="mb-3">2 Marnie</p>
              <p className="mb-3">1 Bird Keeper</p>
              <p className="mb-3">1 Collapsed Stadium</p>
              <p className="mb-3">4 Ultra Ball</p>
              <p className="mb-3">4 Quick Ball</p>
              <p className="mb-3">4 Evolution Incense</p>
              <p className="mb-3">2 Choice Belt</p>
              <p className="mb-3">Cross Switcher</p>
              <p className="mb-3">1 Lost Vacuum</p>
            </td>
            <td className="align-top px-10">
            <p className="mb-3">4 Capture Energy</p>
            <p className="mb-3">4 Powerful Colorless</p>
            <p className="mb-3">Energy</p>
            <p className="mb-3">4 Aurora Energy</p>
              <p className="mb-3">2 Double Turbo Energy</p>
              <p className='mb-3'>Energy</p>
              <p className="mb-3">1 V Guard Energy</p>
              <p className="mb-3">Special</p>
              <p className="mb-3">1 Hiding Darkness</p>
              <p className="mb-3">Energy</p>
            </td>
          </tr>
        </tbody>
      </div>
    </div>
  )
}

export default Arlington