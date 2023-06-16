import React from 'react'
import EventItem from './components/Events/EventItem'
import Template from './Template'


import "./App.css"


export default function App() {

  let eventImage = `${process.env.PUBLIC_URL}/images/shoes.jpg`;
  let saltLake = `${process.env.PUBLIC_URL}/images/svgs/SaltLake.svg`;

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
    }

  ];
  let imageSource = `${process.env.PUBLIC_URL}/images/svgs/${eventSchema[0].image}`;
  let path = 'Arlington.svg';
  let Arlington = `${process.env.PUBLIC_URL}/images/svgs/${path}`;
  let img = `${process.env.PUBLIC_URL}/images/svgs/SaltLake.svg`;

  let USA = `${process.env.PUBLIC_URL}/images/svgs/USA.svg`;

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Fresnooo Top 128- A Season Summary + My First and Last Tournament Report</h1>
      <h1>Hey Trainers! The 2023 Fresono Regional Championship is over and it's the end of the BST-SVI format. I decided to write this as a way to proccess my 2022-2023 season, but I also wanted to create a piece of content for the community. I wanted to make osmething that's becomming a bit of a lost art, something classic - a tournament report.</h1>
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
   




      {/* <Template /> */}




    </div>
  )
}
