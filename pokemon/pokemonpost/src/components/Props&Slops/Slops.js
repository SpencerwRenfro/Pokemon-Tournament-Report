import React from 'react'

function Slops(props) {
  return (
    <div className="mb-10" id={props.slops}>
      <h1 className="text-3xl font-bold mb-5">Props &amp; Slops</h1>
      <p className="font-bold leading-7 font-xl opacity-75">Props</p>
      <ul class="list-disc list-inside mb-5">
        <li className="leading-7">My boys, my fellas, my team. For always being there and supporting me through this season.</li>
        <li className="leading-7">Henry Brand for being one of the nicest opponents I've ever played—Best of luck on top 4.</li>        
      </ul>
      <p className="font-bold leading-7 font-xl opacity-75">Slops</p>
      <ul class="list-disc list-inside">
        <li className="leading-7">Team North West. They cannot run events and don't deserve any more.</li>
        <li className="leading-7">Me forgetting to discard Boss’s Orders making Grant think I'm a cheater</li>
      </ul>
    </div>
  )
}

export default Slops