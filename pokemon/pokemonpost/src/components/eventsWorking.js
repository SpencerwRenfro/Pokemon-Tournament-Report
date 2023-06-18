import React, {useState} from 'react'
import EventItem from './components/Events/EventItem'
import Template from './Template'

// content
import Contents from './components/Contents/Contents';
import Bonus from './components/BonusPage/Bonus';
import Fresno from './components/Fresno/Fresno';

// css
import "./components/CSS/fonts.css"

// anchor links
// react-router-dom react-router-hash-link
import { HashLink } from 'react-router-hash-link';

import "./App.css"


export default function App() {



  const eventSchema = [
    {
      id: 'e0',
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
      id: 'e1',
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
      id: 'e2',
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
      id: 'e3',
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
    },

    {
      id: 'e4',
      title: 'Orlando, Florida',
      country: 'USA.svg',
      img: 'Orlando.svg',
      deckImg: 'LuigaArcheops.svg',
      deckTitle: 'Luiga Archeops',
      place: 1185,
      points: 0,
      list: '',
      content: "Bad matchups and some unlucky draws that didn't allow for the turn two double Archeops. I dropped pretty early from this tournament. ",
      dayTwoContent: ""
    },
    {
      id: 'e5',
      title: 'Knoxville, Tennesse',
      country: 'USA.svg',
      img: 'Knoxville.svg',
      deckImg: 'LuigaArcheops.svg',
      deckTitle: 'Luiga Archeops',
      place: 58,
      points: 50,
      list: '',
      content: "Day one was tough, I started 0-1 had to win round 9 to get into day two, which makes for a long and stressful day.",
      dayTwoContent: "In day two I came close to making a top 32, but got stopped by Michael Pramawat (AKA Seven God) in the craziest Lugia mirror match probably ever played. In game three of our match we both get one turn of a single archeops, before hunting the opposing one down—forcing each other to attach energy from hand. Creating a high-stakes, chess-like game that hadn't existed in this format."
    },
    {
      id: 'e6',
      title: 'Vancouver, Canada',
      country: 'Canada.svg',
      img: 'Vancouver.svg',
      deckImg: 'LuigaArcheops.svg',
      deckTitle: 'Luiga Archeops',
      place: 447,
      points: 0,
      list: '',
      content: "This tournament was bittersweet. I was happy to make new friends at the event, but I stayed in a hotel by myself and had a bad run.",
      dayTwoContent: ""
    },
    {
      id: 'e7',
      title: 'Fort Wayne, Indiana',
      country: 'USA.svg',
      img: 'FortWayne.svg',
      deckImg: 'LuigaArcheops.svg',
      deckTitle: 'Luiga Archeops',
      place: 167,
      points: 30,
      list: '',
      content: "Pretty mediocre run and I didn't deserve the 256 finish. My round nine opponent Jessica Burden-Cheresna was nice enough to give me the win instead of forcing a tie. She said it was because I was kind and patient with her about the time she took on her turns and decisions with Flower Selecting.",
      dayTwoContent: ""
    },
    {
      id: 'e8',
      title: 'EUIC, London',
      country: 'England.svg',
      img: 'EUIC.svg',
      deckImg: 'LuigaArcheops.svg',
      deckTitle: 'Luiga Archeops',
      place: 542,
      points: 0,
      list: '',
      content: "I was with the group that invented the tournament winning deck Arc/Dura/Pix. I even considered countering it with a 1-1 Urshifu VMAX since so many of players were on it. However, I let those guys convince me that it hurt the consistency of Lugia. Although, one of them did say slotting it was the move if I was going for day two, but I wasn't, my goals were low. I was aiming for a top 256 because that's all I needed—I didn't have a winners mentality.",
      dayTwoContent: "The day started great, I was 3-0. Until I hit one of the players on Arc/Dura/Pix and got completely walled out as I had no answer without the Urshifu VMAX. After that I hit probably one of the grimiest players I've ever encountered. In game 3 against Lostbox close to time, they start illegally stalling me with 30+ second Flower Selecting and fake decision paralysis when choosing a new active Pokémon after a knockout. Meanwhile, I'm drawing cards that I don't even look at and immediately announce attacks to take two-second turns. I end up a single prize short after the last turn of time and lose out from there. I whiff the top 256 finish."
    },
    {
      id: 'e9',
      title: 'Local Events',
      country: 'USA.svg',
      img: 'LocalEvents.svg',
      deckImg: '',
      deckTitle: '',
      place: '',
      points: '',
      list: '',
      content: "Revitalized after my bad beat in London with the news that I can win championship points at locals again. I get a few finishes, but nothing crazy other than going 5-1-0 to bubble 5th at a league challenge.  ",
      dayTwoContent: "",
      localEventType: ["Cup", "Cup", "Challenge"],
      multiPlace: [2, 3, 5],
      multiPoints: [40, 32, 8],
      multiDeckImg: ['Gardevoir.svg', 'Gardevoir.svg', 'LuigaArcheops.svg'],

    },
    {
      id: 'e10',
      title: 'Portland, Oregon',
      country: 'USA.svg',
      img: 'Portland.svg',
      deckImg: 'Gardevoir.svg',
      deckTitle: 'Gardevoir',
      place: 179,
      points: 30,
      list: '',
      content: "I start the day at 5-0-1 and unfortunately the lack of not playing games between events catches up to me in round seven. I fail to get Manaphy out against turbo Lostbox when I have the opportunity and get punished with a turn one Moonlight Shuriken.",
      dayTwoContent: "I lost three win and ins in a row missing day two, but at least I got another 256. I have now hit my best finish limit for regionals."
    },
    {
      id: 'e11',
      title: 'Milwaukee, Wisconsin',
      country: 'USA.svg',
      img: 'Toronto.svg',
      deckImg: 'LuigaArcheops.svg',
      deckTitle: 'Luiga Archeops',
      place: "1,020",
      points: 0,
      list: '',
      content: "Round one I misplay a Cragalanche deckout line against a Lostbox Kyogore Player who bench locked themselves. I wanted it so bad—My opponent would have remembered me forever, but I shouldn't have messed up. From there I hit two bad matchups and dropped.",
      dayTwoContent: ""
    }

  ];

  // const eventSchema = [
  //   {
  //     id: 'e0',
  //     title: 'Salt Lake',
  //     country: 'USA.svg',
  //     img: 'SaltLake.svg',
  //     deckImg: ["mew.svg","genesect.svg"],
  //     deckTitle: 'Mew Genesect',
  //     place: 542,
  //     points: 0,
  //     list: '',
  //     content: 'My first event of the year. Unfortunately I start with a bad run with a bad list, not much else to say about it',
  //     dayTwoContent: ''
  //   },
  //       {
  //     id: 'e1',
  //     title: 'Peoria, Illinois',
  //     country: 'USA.svg',
  //     img: 'Peoria.svg',
  //     deckImg: ["mew.svg","genesect.svg"],
  //     deckTitle: 'Mew Genesect',
  //     place: 50,
  //     points: 50,
  //     list: '',
  //     content: 'I had to earn my spot in day two the hard way by defeating a Kyurem VMAX player in an epic game three by OHKOing a giant kyurem VMAX on the last turn of the game with all four Power Tablets and a Choive Belt',
  //     dayTwoContent: 'I start day two 3-0, and in round thirteen I hit a mirror match. I start and end my turn with a lone Oricorio in the active. THis starts my bad beat and from there I lose out ending with a top 64 finish.'
  //   },
  // ]; 

  let headshot = `${process.env.PUBLIC_URL}/images/svgs/headshot.svg`;
  let aboutMe = `${process.env.PUBLIC_URL}/images/svgs/aboutMe.svg`;
  let eventIDData = [];
  let newDataID = eventSchema.map((item) =>(item = item.id));
  console.log(newDataID + "NEW ID");
  
  let [contentID, setContentID] = useState(eventSchema.id);
  
  // = eventSchema.id.map((item) =>())



  return (
    <div className=" grid grid-cols-1 m-32">
      <div className=" card-body  mx-10 col-span-1">

        <div className="col-span-1">
          <p>Jun 14, 2023</p>
          <h1 className="text-6xl text-zinc-200 title pb-1">Fresnooo Top 128 - A Season Summary + My First and Last Tournament Report</h1>
          <div className="flex py-10">
            <img style={{ width: "50px", height: "50px" }} src={headshot} alt="headshot" />
            <h2 className='pl-2 place-self-center '>Tyler Renfro</h2>
            <li><a href="#Toronto">Link to page</a></li>
          </div>


          <h1>Hey Trainers! The 2023 Fresono Regional Championship is over and it's the end of the BST-SVI format. I decided to write this as a way to proccess my 2022-2023 season, but I also wanted to create a piece of content for the community. I wanted to make osmething that's becomming a bit of a lost art, something classic - a tournament report.</h1>
          <p className="my-10">With access to an infinity pool of gameplay videos, daily live streams, and day-of tournament winning list, players today are competing in what's referred to as the ‘e-sports era’ of the Pokemon TCG. The glory days of sites like The Charizard Lounge and Six-Prizes are long gone. Information is everywhere and keeping a deck list private is a way of the past. </p>
          <p>So sit back, relax, and enjoy an article that attempts to pay homage  to the the legacy content of the greats. The days before players had access to all the top 8 lists from limitless. Before pokestats.live leaked your deck to your next round opponent.</p>
          <h1 className="text-3xl font-bold">About Me</h1>
          <div >
            <img src={aboutMe} alt="Me and Mike" />
          </div>
          <p >My name is Tyler Renfro, and I've been playing the Pokémon TCG for the past 8 years (although I originally learned how to play on Pokémon Play It! In 1998). Most of you have probably not heard of me. I'm far from a top player—I have zero top cut finishes, aside from top 64s—my best placement being 50th, I've never been on stream, and I have never qualified for Worlds—I simply enjoy the hobby.</p>
          <h1 className="text-3xl font-bold">2022–2023 Season Summary</h1>
          <p>As mentioned, part of this articles purpose is to help myself process the season, and how my run for a Worlds invite went. The year started with the announcement that the 2023 World Championships would be hosted in Yokohama, Japan. A little cliché, but this year, the Worlds was going to fall on my 31st birthday. I considered this season be my final push for chasing an invite and I wanted to go big. I planned to attend as many events as possible to pursue this goal and make my dream happen.</p>
          <p>Throughout the season, I didn't have an in-person testing group as a result of relocating to Colorado during the COVID-19 pandemic. Without local play I was struggled to find players in my area to practice with. For the entire season, the only games I played on paper were at premiere events. </p>
          <p>My strategy for deck choice was what I believed to be the strongest deck in format combined with what I could pilot the best. Here's a brief recap of my tournament history, deck choices (with lists), and short summary of my runs.</p>
        </div>
      
        <Contents 
          eid={newDataID}
          href={newDataID[9]}
          saltLakeHref={newDataID[0]}
          peoriaHref={newDataID[1]}
          arlingtonHref={newDataID[2]}
          torontoHref={newDataID[3]}
          orlandoHref={newDataID[4]}
          knoxvilleHref={newDataID[5]}
          vancouverHref={newDataID[6]}
          fortWayneHref={newDataID[7]}
          Londonref={newDataID[8]}
          localsEventHref={newDataID[9]} 
          portlandHref={newDataID[10]} 
          milwaukeeHref={newDataID[11]} 
                 
        />
            {/* 'Peoria, Illinois'
    'Alrington Texas',
    'Toronto, Canada',
    'Orlando, Florida',
    'Knoxville, Tennesse',
    'Vancouver, Canada',
    'Fort Wayne,
    'EUIC, London'
    'Portland, Oregon'
    'Milwaukee, Wisconsin' 
    ad href for content props*/}
        <div>
          <EventItem
            saltLakeHref={newDataID[0]}
            contentID={contentID}
            id={eventSchema[0].id}
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
            peoriaHref={newDataID[1]}
            id={eventSchema[1].id}
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
            id={eventSchema[2].id}
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
            id={eventSchema[3].id}
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
          <EventItem
            title={eventSchema[4].title}
            image={eventSchema[4].img}
            country={eventSchema[4].country}
            points={eventSchema[4].points}
            place={eventSchema[4].place}
            deck={eventSchema[4].deck}
            content={eventSchema[4].content}
            dayTwoContent={eventSchema[4].dayTwoContent}
            deckImg={eventSchema[4].deckImg}
            deckTitle={eventSchema[4].deckTitle}
          />
          <EventItem
            title={eventSchema[5].title}
            image={eventSchema[5].img}
            country={eventSchema[5].country}
            points={eventSchema[5].points}
            place={eventSchema[5].place}
            deck={eventSchema[5].deck}
            content={eventSchema[5].content}
            dayTwoContent={eventSchema[5].dayTwoContent}
            deckImg={eventSchema[5].deckImg}
            deckTitle={eventSchema[5].deckTitle}
          />
          <EventItem
            title={eventSchema[6].title}
            image={eventSchema[6].img}
            country={eventSchema[6].country}
            points={eventSchema[6].points}
            place={eventSchema[6].place}
            deck={eventSchema[6].deck}
            content={eventSchema[6].content}
            dayTwoContent={eventSchema[6].dayTwoContent}
            deckImg={eventSchema[6].deckImg}
            deckTitle={eventSchema[6].deckTitle}
          />
          <EventItem
            title={eventSchema[7].title}
            image={eventSchema[7].img}
            country={eventSchema[7].country}
            points={eventSchema[7].points}
            place={eventSchema[7].place}
            deck={eventSchema[7].deck}
            content={eventSchema[7].content}
            dayTwoContent={eventSchema[7].dayTwoContent}
            deckImg={eventSchema[7].deckImg}
            deckTitle={eventSchema[7].deckTitle}
          />
          <EventItem
            title={eventSchema[8].title}
            image={eventSchema[8].img}
            country={eventSchema[8].country}
            points={eventSchema[8].points}
            place={eventSchema[8].place}
            deck={eventSchema[8].deck}
            content={eventSchema[8].content}
            dayTwoContent={eventSchema[8].dayTwoContent}
            deckImg={eventSchema[8].deckImg}
            deckTitle={eventSchema[8].deckTitle}
          />
          <EventItem
            title={eventSchema[9].title}
            image={eventSchema[9].img}
            country={eventSchema[9].country}
            points={eventSchema[9].points}
            place={eventSchema[9].place}
            deck={eventSchema[9].deck}
            content={eventSchema[9].content}
            dayTwoContent={eventSchema[9].dayTwoContent}
            deckImg={eventSchema[9].deckImg}
            deckTitle={eventSchema[9].deckTitle}
            localEventType={eventSchema[9].localEventType}
            multiPlace={eventSchema[9].multiPlace}
            multiPoints={eventSchema[9].multiPoints}
            multiDeckImg={eventSchema[9].multiDeckImg}
            href={newDataID[9]}
          />
          <EventItem
            title={eventSchema[10].title}
            image={eventSchema[10].img}
            country={eventSchema[10].country}
            points={eventSchema[10].points}
            place={eventSchema[10].place}
            deck={eventSchema[10].deck}
            content={eventSchema[10].content}
            dayTwoContent={eventSchema[10].dayTwoContent}
            deckImg={eventSchema[10].deckImg}
            deckTitle={eventSchema[10].deckTitle}
          />
          <EventItem
            title={eventSchema[11].title}
            image={eventSchema[11].img}
            country={eventSchema[11].country}
            points={eventSchema[11].points}
            place={eventSchema[11].place}
            deck={eventSchema[11].deck}
            content={eventSchema[11].content}
            dayTwoContent={eventSchema[11].dayTwoContent}
            deckImg={eventSchema[11].deckImg}
            deckTitle={eventSchema[11].deckTitle}
          />

        <div>
          <h1 id="Toronto">Toronto</h1>
        </div>
        </div>


        <Fresno />
        <Bonus />

      </div>






      {/* <Template /> */}




    </div>
  )
}
