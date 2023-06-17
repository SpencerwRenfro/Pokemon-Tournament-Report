import React from 'react'
import EventItem from './components/Events/EventItem'
import Template from './Template'


import "./App.css"


export default function App() {



  const eventSchema = [
    {
      id: 'e1',
      title: 'Salt Lake',
      country: 'USA.svg',
      img: 'SaltLake.svg',
      deckImg: 'MewGenesect.svg',
      deckTitle: 'Mew Genesect',
      place: 542,
      points: 0,
      list: '',
      content: 'My first event of the year. Unfortunately I start with a bad run with a bad list, not much else to say about it',
      dayTwoContent: ''
    },
    {
      id: 'e2',
      title: 'Peoria, Illinois',
      country: 'USA.svg',
      img: 'Peoria.svg',
      deckImg: 'MewGenesect.svg',
      deckTitle: 'Mew Genesect',
      place: 50,
      points: 50,
      list: '',
      content: 'I had to earn my spot in day two the hard way by defeating a Kyurem VMAX player in an epic game three by OHKOing a giant kyurem VMAX on the last turn of the game with all four Power Tablets and a Choive Belt',
      dayTwoContent: 'I start day two 3-0, and in round thirteen I hit a mirror match. I start and end my turn with a lone Oricorio in the active. THis starts my bad beat and from there I lose out ending with a top 64 finish.'
    },
    {
      id: 'e3',
      title: 'Alrington Texas',
      country: 'USA.svg',
      img: 'Arlington.svg',
      deckImg: 'LuigaArcheops.svg',
      deckTitle: 'Luiga Archeops',
      place: 113,
      points: 30,
      list: '',
      content: "Before Lugia was polished to perfection, I'm on Tord's winning list from LAIC. I didn't have a great run, and honestly I was suppoed to lose round nine and leave without points. At the end of game three my opponent fails an attack with Lumineon V-they don't realize Aurora Energy is missing after announcing Acqua Return. A mistake that ultimately swings the game in my favor",
      dayTwoContent: ''
    },
    {
      id: 'e4',
      title: 'Toronto, Canada',
      country: 'Canada.svg',
      img: 'Toronto.svg',
      deckImg: 'LuigaArcheops.svg',
      deckTitle: 'Luiga Archeops',
      place: 144,
      points: 30,
      list: '',
      content: "I start the day 5-0, but end at 6-2-1 because I took an intentional draw against a Mew player in round 9. ",
      dayTwoContent: "Day two was pretty tough for me as the field is flooded with Lugia Decks. I am maybe one of the only players without V Guard Energy or Raikou. Resulting an incredibly difficult mirror match that kept getting paired into. "
    }

  ];


  let headshot = `${process.env.PUBLIC_URL}/images/svgs/headshot.svg`;
  let aboutMe = `${process.env.PUBLIC_URL}/images/svgs/aboutMe.svg`;


  return (
    <div className=" w-1/2 ">
      <div className=" card-body  mx-10">

        <p>Jun 14, 2023</p>
        <h1 className="text-3xl font-bold underline">Fresnooo Top 128- A Season Summary + My First and Last Tournament Report</h1>
        <img style={{ width: "50px", height: "50px" }} src={headshot} alt="headshot" />

        <h1>Hey Trainers! The 2023 Fresono Regional Championship is over and it's the end of the BST-SVI format. I decided to write this as a way to proccess my 2022-2023 season, but I also wanted to create a piece of content for the community. I wanted to make osmething that's becomming a bit of a lost art, something classic - a tournament report.</h1>
        <p className="my-10">With access to an infinity pool of gameplay videos, daily live streams, and day-of tournament winning list, players today are competing in what's referred to as the ‘e-sports era’ of the Pokemon TCG. The glory days of sites like The Charizard Lounge and Six-Prizes are long gone. Information is everywhere and keeping a deck list private is a way of the past. </p>
        <p>So sit back, relax, and enjoy an article that attempts to pay homage  to the the legacy content of the greats. The days before players had access to all the top 8 lists from limitless. Before pokestats.live leaked your deck to your next round opponent.</p>
        <h1 className="text-3xl font-bold">About Me</h1>
        <div >
          <img  src={aboutMe} alt="Me and Mike" />
        </div>
        <p >My name is Tyler Renfro, and I've been playing the Pokémon TCG for the past 8 years (although I originally learned how to play on Pokémon Play It! In 1998). Most of you have probably not heard of me. I'm far from a top player—I have zero top cut finishes, aside from top 64s—my best placement being 50th, I've never been on stream, and I have never qualified for Worlds—I simply enjoy the hobby.</p>
        <h1 className="text-3xl font-bold">2022–2023 Season Summary</h1>
        <p>As mentioned, part of this articles purpose is to help myself process the season, and how my run for a Worlds invite went. The year started with the announcement that the 2023 World Championships would be hosted in Yokohama, Japan. A little cliché, but this year, the Worlds was going to fall on my 31st birthday. I considered this season be my final push for chasing an invite and I wanted to go big. I planned to attend as many events as possible to pursue this goal and make my dream happen.</p>
        <p>Throughout the season, I didn't have an in-person testing group as a result of relocating to Colorado during the COVID-19 pandemic. Without local play I was struggled to find players in my area to practice with. For the entire season, the only games I played on paper were at premiere events. </p>
        <p>My strategy for deck choice was what I believed to be the strongest deck in format combined with what I could pilot the best. Here's a brief recap of my tournament history, deck choices (with lists), and short summary of my runs.</p>


        <EventItem
          title={eventSchema[0].title}
          country={eventSchema[0].country}
          points={eventSchema[0].points}
          place={eventSchema[0].place}
          deck={eventSchema[0].deck}
          content={eventSchema[0].content}
          dayTwoContent={eventSchema[0].dayTwoContent}
          image={eventSchema[0].img}
          deckImg={eventSchema[0].deckImg}
          deckTitle={eventSchema[0].deckTitle}
        />


        <EventItem
          title={eventSchema[1].title}
          image={eventSchema[1].img}
          country={eventSchema[1].country}
          points={eventSchema[1].points}
          place={eventSchema[1].place}
          deck={eventSchema[1].deck}
          content={eventSchema[1].content}
          dayTwoContent={eventSchema[1].dayTwoContent}
          deckImg={eventSchema[1].deckImg}
          deckTitle={eventSchema[1].deckTitle}
        />
        <EventItem
          title={eventSchema[2].title}
          image={eventSchema[2].img}
          country={eventSchema[2].country}
          points={eventSchema[2].points}
          place={eventSchema[2].place}
          deck={eventSchema[2].deck}
          content={eventSchema[2].content}
          dayTwoContent={eventSchema[2].dayTwoContent}
          deckImg={eventSchema[2].deckImg}
          deckTitle={eventSchema[2].deckTitle}
        />

        <EventItem
          title={eventSchema[3].title}
          image={eventSchema[3].img}
          country={eventSchema[3].country}
          points={eventSchema[3].points}
          place={eventSchema[3].place}
          deck={eventSchema[3].deck}
          content={eventSchema[3].content}
          dayTwoContent={eventSchema[3].dayTwoContent}
          deckImg={eventSchema[3].deckImg}
          deckTitle={eventSchema[3].deckTitle}
        />
      </div>






      {/* <Template /> */}




    </div>
  )
}
