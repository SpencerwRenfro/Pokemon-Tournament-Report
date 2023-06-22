import React from 'react'




function ListTwo() {

  let mew = `${process.env.PUBLIC_URL}/images/Pokemon_Sprites/mew.png`;
  let genesect = `${process.env.PUBLIC_URL}/images/Pokemon_Sprites/genesect.png`;
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
        <h1 className="text-3xl font-bold">Salt Lake CIty, Utah</h1>
        <img src={USA} className="rounded" style={{ width: '35px', }} alt="event location" />
      </div>



      <div className="flex row items-center gap-4 pb-5">
        <div className='flex flex-row'>
          <img src={mew} alt="mew" />
          <img src={genesect} alt="genesect" />
        </div>
        <h3 className="text-2xl font-bold grow">Mew Genesect</h3>
        <div>
          <h1>Place</h1>
          <p className='font-bold text-xl'>50</p>
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
              <p className="mb-3">4 Mew V</p>
              <p className="mb-3">3 Mew VMAX </p>
              <p className="mb-3">4 Genesect V</p>
              <p className="mb-3">1 Oricorio</p>
              <p>1 Pumpkaboo</p>
            </td>
            <td className="align-top px-10" style={{ borderRight: "solid 1px rgba(166, 173, 186, 0.1)" }}>
              <p className="mb-3">2 Lost CIty</p>
              <p className="mb-3">1 PokeStop</p>
              <p className="mb-3">1 Path to the Peak</p>
              <p className="mb-3">2 Boss's Orders</p>
              <p className="mb-3">2 Marnie</p>
              <p className="mb-3">1 Roxanne</p>
              <p className="mb-3">1 Cyllene</p>
              <p className="mb-3">4 Ultra Ball</p>
              <p className="mb-3">4 Quick Ball</p>
              <p className="mb-3">4 Battle VIP Pass</p>
              <p className="mb-3">4 Cross Switcher</p>
              <p className="mb-3">4 Power Tablet</p>
              <p className="mb-3">Cram-o-matic</p>
              <p className="mb-3">3 Rotom Phone</p>
              <p className="mb-3">2 Switch Cart</p>
              <p className="mb-3">2 Choice Belt</p>
              <p className="mb-3">1 Pal Pad</p>
              <p className="mb-3">Hero's Medal</p>
              <p className="mb-3">1 Echoing Horn</p>
            </td>
            <td className="align-top px-10">
              <p className="mb-3">4 Double Turbo Energy</p>
              <p>Energy</p>
            </td>
          </tr>
        </tbody>
      </div>
    </div>
  )
}

export default ListTwo