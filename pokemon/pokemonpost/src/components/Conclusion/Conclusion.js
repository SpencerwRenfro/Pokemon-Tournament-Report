import React from 'react'



import { Link} from "react-router-dom";

function Conclusion(props) {
  let tyler = `${process.env.PUBLIC_URL}/images/Conclusion/tyler.png`;
  let bonusLink = `${process.env.PUBLIC_URL}/images/Conclusion/bonusPage.svg`;
  return (
    <div id={props.conclusion}>
      <h1>Conclusion</h1>
      <p>Fresno is likely my last Pokémon event ever. It's crazy to say it, but after this weekend I'm done with Pokémon in every capacity. Looking at any aspect of the intellectual property fills me with despair and it crushes me because it was something I had cherished most of my life.</p>
      <p>I knew after this year I was saying goodbye to competitive play. I was not going to be playing in large events despite how much fun they were. Yet, I still had plans to meet friends for retro, cube, pre-releases, or even some of the local cups here and there—not anymore. Piece by piece, Pokémon had been ruined for me this year, and I worry this feeling is permanent.</p>
      <p>Unfortunately, the barrier to finish better than a top 64, starting 5-0 at several events without a stream feature, and never qualifying for Worlds burnt me out—the Masters Division is a merciless meat grinder. While I’ve tried my best to stay strong and grit through the bad beats all while watching others get force-fed wins, it’s time for me to let go.</p>
      <p>Don't be sad for me though. I have plenty of other positive things in my life that bring me joy. I have a wonderful partner, a happy home, a cat that loves me, a flourishing career, and many other things I excel at. I just happen to be extremely unlucky (untalented?) at the Pokémon Trading Card Game.</p>
      <p>Good luck to all still trying to qualify at NAIC and to those playing in Worlds this August! I’ve had a blast.</p>
      <p>Farewell for now.</p>
      <p>-Tyler</p>
      <div className='flex justify-center'>
      <img src={tyler} alt="a sad walk away from pokemon" />
      </div>
<div className='flex justify-center pt-32'>
      <Link target="_blank" rel="noopener noreferrer" to="/bonus">
        <div>
          <img src={bonusLink} alt="link" />
        </div>
      </Link>
      </div>
    </div>
  )
}

export default Conclusion