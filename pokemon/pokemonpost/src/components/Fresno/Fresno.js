import React from 'react'
import RoundComponent from './RoundComponent';

function Fresno(props) {
    let img1 = `${process.env.PUBLIC_URL}/images/Fresno/img1.png`;
    let day1 = `${process.env.PUBLIC_URL}/images/Fresno/dayOne.svg`;
    let r1 = `${process.env.PUBLIC_URL}/images/Fresno/R1.png`;
    let R1 = `${process.env.PUBLIC_URL}/images/Fresno/H1.png`;
    let japanFlag = `${process.env.PUBLIC_URL}/images/Fresno/japan.svg`;
    let japanEvent = `${process.env.PUBLIC_URL}/images/Fresno/japanEvent.png`;


    const roundSchema = [
        {
            roundId: "R1",
            roundCount: 1,
            roundResult: "W",
            roundTitle: "Ricardo Gonzalez",
            deckTitle: "Arceus/DUraladon/Alolan Vulpix",
            deckImg: "roundOne.svg"
        },
        {
            roundId: "R2",
            roundCount: 1,
            roundResult: "W",
            roundTitle: "Joseph Post",
            deckTitle: "LostTina",
            deckImg: "roundTwo.svg"
        },
        {
            roundId: "R3",
            roundCount: 3,
            roundResult: "L",
            roundTitle: "Christopher Lopez",
            deckTitle: "LostTina",
            deckImg: "roundThree.svg"
        },
        {
            roundId: "R4",
            roundCount: 4,
            roundResult: "W",
            roundTitle: "Lucas Martinez",
            deckTitle: "Arceus/Duraladon/Umbreon",
            deckImg: "roundFour.svg"
        },
        {
            roundId: "R5",
            roundCount: 5,
            roundResult: "W",
            roundTitle: "Angel Vargas",
            deckTitle: "Fusion Mew",
            deckImg: "roundFive.svg"
        },
        {
            roundId: "R6",
            roundCount: 6,
            roundResult: "W",
            roundTitle: "Josh Bangle",
            deckTitle: "Lostbox/Cramorant/Articuno",
            deckImg: "roundSix.svg"
        },
        {
            roundId: "R7",
            roundCount: 7,
            roundResult: "W",
            roundTitle: "Maddox Corcoran",
            deckTitle: "Mew Genesect",
            deckImg: "roundSeven.svg"
        },
        {
            roundId: "R8",
            roundCount: 8,
            roundResult: "W",
            roundTitle: "Eric Ho",
            deckTitle: "Lugia Archeops",
            deckImg: "roundEight.svg"
        },
        {
            roundId: "R9",
            roundCount: 9,
            roundResult: "T",
            roundTitle: "Henry Brand",
            deckTitle: "Gardevoir",
            deckImg: "roundNine.svg"
        },
        {
            roundId: "R10",
            roundCount: 10,
            roundResult: "L",
            roundTitle: "Le Bui",
            deckTitle: "Mew Genesect",
            deckImg: "roundTen.svg"
        },
        {
            roundId: "R11",
            roundCount: 11,
            roundResult: "L",
            roundTitle: "Ryan Miller",
            deckTitle: "Lostbox Kyogre",
            deckImg: "roundOne.svg"
        },
        {
            roundId: "R12",
            roundCount: 12,
            roundResult: "L",
            roundTitle: "Grant Manley",
            deckTitle: "lostbox",
            deckImg: "roundTwelve.svg"
        },
        {
            roundId: "R13",
            roundCount: 13,
            roundResult: "T",
            roundTitle: "Adrian Villavbolobos",
            deckTitle: "Gardevoir/Mewtwo/Klefkel",
            deckImg: "roundThirteen.svg"
        },
    ];

    return (
        <div>
            <div>
                <div id={props.weekBefore}>
                    <h1 className="text-3xl font-bold mb-5">The Week of Fresno</h1>
                    <p className="leading-7 mb-5">Leading up to the event, Fresno was my last chance qualifier for Worlds. I didn't get into NAIC due to the mishandling of registration, despite being exactly on time for waves two and three, but I digress. I wanted to play something fun, but also something I could confidently finish a best-of-three. I decided on Mew as it reminded me fondly of the first deck I ever played in tournaments—Nightmarch.</p>
                    <p className="leading-7 mb-5">To prepare for the event, I booked a coaching session with Tord Reklev. I get on the call with Tord and he asks me about deck choice, and I tell him I'm set on Mew. He takes a list from Milwuakee and covers sequencing while challenging me on opening hand scenarios—it’s perfect. He's a great coach and I wish I did more sessions with him earlier this season.</p>
                    <p className="leading-7 mb-5">My biggest take away from the session was to not be a greedy Mew player with Cram-o-matics and to always go with the sure thing. At the end he tells me the changes he would make along with the reasoning for why. The base list was Michael Long's (congrats on getting unbanned) and Tord made these suggestions:</p>
                    <div className="py-5 pl-10 mb-10 card bg-base-100 rounded">
                        <p className="italic mb-3">-2 Nest Ball, -1 Penny, -1 Escape Rope, -1 Choice Belt, </p>
                        <p className="italic">+3 Feather Ball, +1 Forest Seal Stone, +1 Cleansing Gloves</p>
                    </div>
                    <img className="w-full mb-5 rounded-[25px]" src={img1} alt="list" />
                    <p className="leading-7 mb-5">I feel great about the list and decide to send it as it looks perfect. I decide to play on PTCGLive to hammer out some sequencing and the lessons Tord taught me. After a few games the app requires an update and injects the latest expansion, Paldea Evolved. I’m unable to play any games of value and close the software.</p>
                </div>
                <div id={props.fresnoDay1}>
                    <h1 className="text-3xl font-bold mb-5">Fresno Day 1</h1>
                    <img className="w-full mb-3 rounded-[25px]" src={day1} alt="day one" />
                    <p className="italic w-full mb-5 text-center">7:30AM Checkin line because Team North West didn’t rent the venue for Friday.</p>
                    {/* TODO: Make Round Component DRY */}
                            <RoundComponent
                                roundId={roundSchema[0].roundId}
                                roundCount={roundSchema[0].roundCount}
                                roundResult={roundSchema[0].roundResult}
                                roundTitle={roundSchema[0].roundTitle}
                                deckTitle={roundSchema[0].deckTitle}
                                deckImg={roundSchema[0].deckImg}
                            />
                    <p className="leading-7 mb-5">Hitting this variant of Arceus worried me. If it was based off of the winning London list with multiple Drapion V and a heavy stadium count to bump path to the peak, I was gonna have a hard time. Fortunately, the Judge + Path combo worked in my favor for me to quickly 2-0 them.</p>
                            <RoundComponent
                                roundId={roundSchema[1].roundId}
                                roundCount={roundSchema[1].roundCount}
                                roundResult={roundSchema[1].roundResult}
                                roundTitle={roundSchema[1].roundTitle}
                                deckTitle={roundSchema[1].deckTitle}
                                deckImg={roundSchema[1].deckImg}
                            />
                    <p className="leading-7 mb-5">This set was pretty quick. My strategy going in was to repeatedly Judge them out of large a hand size and keep Path to the peak in play to prevent them from using Drapion V to KO a Mew VMAX.</p>
                    <p className="leading-7 mb-5">Overall the strategy was effective. My opponent had a tough time drawing out of Judge without access to Radiant Rreninja’s Ability and after losing too many Comfeys, their board was overwhelmed.</p>
                            <RoundComponent
                                roundId={roundSchema[2].roundId}
                                roundCount={roundSchema[2].roundCount}
                                roundResult={roundSchema[2].roundResult}
                                roundTitle={roundSchema[2].roundTitle}
                                deckTitle={roundSchema[2].deckTitle}
                                deckImg={roundSchema[2].deckImg}
                            />
                    <p className="leading-7 mb-5">I was upset taking a loss so early in the tournament. The Dapion V in combination with Raichu V's infinite damage  was just too tough to beat.</p>
                            <RoundComponent
                                roundId={roundSchema[3].roundId}
                                roundCount={roundSchema[3].roundCount}
                                roundResult={roundSchema[3].roundResult}
                                roundTitle={roundSchema[3].roundTitle}
                                deckTitle={roundSchema[3].deckTitle}
                                deckImg={roundSchema[3].deckImg}
                            />
                    <p className="leading-7 mb-5">In our games, they trinity charged exclusively to a single Duraladon VMAX over Umbreon VMAX (they played no Drapion V) giving them zero outs to OHKO a Mew VMAX. Then in game two they chose to go second, giving me a significant advantage</p>
                            <RoundComponent
                                roundId={roundSchema[4].roundId}
                                roundCount={roundSchema[4].roundCount}
                                roundResult={roundSchema[4].roundResult}
                                roundTitle={roundSchema[4].roundTitle}
                                deckTitle={roundSchema[4].deckTitle}
                                deckImg={roundSchema[4].deckImg}
                            />
                    <p className="leading-7 mb-5">Initially, I thought I was playing the mirror because my opponent won the coin flip, had only filled their board with Mew  Vs and Genesect Vs ending their turn with a Path to the Peak. It wasn’t until turn three that I saw the Meloetta and Deoxys.</p>
                    <p className="leading-7 mb-5">Fortunately, DTE Mew plays more outs to remove and play down Path to the Peak. So after their first turns of the games they fizzled out allowing me to out draw them and win the set.</p>
                            <RoundComponent
                                roundId={roundSchema[5].roundId}
                                roundCount={roundSchema[5].roundCount}
                                roundResult={roundSchema[5].roundResult}
                                roundTitle={roundSchema[5].roundTitle}
                                deckTitle={roundSchema[5].deckTitle}
                                deckImg={roundSchema[5].deckImg}
                            />
                    <p className="leading-7 mb-5">Perhaps the most innovative deck build of the weekend. So props to Josh for the creativity. At first I go with the Judge + Path to the Peak strategy to disrupt their hand and try and prevent a Drapion V from KOing my Mew VMAX. As the game develops, they start putting Articuno on the field and even a Defiance Band to raise Cramorants damage to 160 damage! I shift my strategy to Psychic Leap with a couple Power Tablets to remove the damage off the field and after the second time Josh scoops up game one.</p>
                    <p className="leading-7 mb-5">My strategy for game two was to Lost Zone all of his Cramorant as I know he doesn’t play a Drapion V. Unfortunately time is called before we are unable to finish the second game as his deck is entirely made up of single prize Pokémon.</p>
                            <RoundComponent
                                roundId={roundSchema[6].roundId}
                                roundCount={roundSchema[6].roundCount}
                                roundResult={roundSchema[6].roundResult}
                                roundTitle={roundSchema[6].roundTitle}
                                deckTitle={roundSchema[6].deckTitle}
                                deckImg={roundSchema[6].deckImg}
                            />
                    <p className="leading-7 mb-5">My first mirror match of the weekend and I lost the coin flip. Game one is a Genesect war that my opponent wins since they were the first to strike.</p>
                    <p className="leading-7 mb-5">
                        Game two my opponent is loose with resources and discards two Double Turbo Energy and attaches a third to a Mew V. I Boss up the Mew V for a KO and limit my opponent's access to consecutively Techno Blast eventually winning me the game.</p>
                    <p className="leading-7 mb-5">
                        Game three starts as an all out Genesect war and my opponent is winning. After starting the turn with two tails on Cram-o-matic my luck changes and I manage to find all the damage modifiers I need and the Judge + Path combo! My opponent was unable to respond after a such a devastating blow allowing me to take my last prizes and win the set.
                    </p>
                            <RoundComponent
                                roundId={roundSchema[7].roundId}
                                roundCount={roundSchema[7].roundCount}
                                roundResult={roundSchema[7].roundResult}
                                roundTitle={roundSchema[7].roundTitle}
                                deckTitle={roundSchema[7].deckTitle}
                                deckImg={roundSchema[7].deckImg}
                            />
                    <p className="leading-7 mb-5">When my opponent sat down they offered me the ID for day two. I considered the guaranteed day two since I could lose out and miss, but I declined. I needed a top 32 for my worlds invite and I was all-in today.</p>
                    <p className="leading-7 mb-5">I start game 1 with Judge + Path, but they hit a Professor's Research and bump the Stadium with Pumpkaboo. Tyranitar demolishes my Mews and I immediately scoop.</p>
                    <p className="leading-7 mb-5">Game 2 Path to the Peak sticks and they can’t get Archeops out. A quick win for Mew.</p>
                    <p className="leading-7 mb-5">Game 3 Path sticks long enough, but I end up making a mistake near the end of the game. My opponent punishes a Choice Belt attachment on my benched Mew VMAX with a Boss KO. I end up one damage modifier short and am am forced to Psychic Leap to prevent losing. Next turn, I Boss a 2 prize Pokémon into the active cleaning up my mistake—close one.</p>
                            <RoundComponent
                                roundId={roundSchema[8].roundId}
                                roundCount={roundSchema[8].roundCount}
                                roundResult={roundSchema[8].roundResult}
                                roundTitle={roundSchema[8].roundTitle}
                                deckTitle={roundSchema[8].deckTitle}
                                deckImg={roundSchema[8].deckImg}
                            />
                    <p className="leading-7 mb-5">The final boss of day one. Not only last weeks Regional Champion, but a World Champion too!? I was stoked. I had never looked more forward to a game of Pokémon.</p>
                    <p className="leading-7 mb-5">In game one, I managed to pull ahead with a barrage of hand disruption from Judge + Path to the Peak. At the end of the game, I removed my only Mew Vmax from the field by with Psychic Leap, leaving Henry unable to win the prize trade. I can’t believe it, I just beat a World Champion in a game of Pokémon.</p>
                    <p className="leading-7 mb-5">Game two starts with him poking a Mew V for 150 from a Zacian V. We trade back and forth until the end where I Pyshic Leap again to remove three prizes from the board as I see Henry has played Boss’s orders, Serena and Pal Pad. Until I’m caught off guard by a Cresselia that uses Moon Glow Reverse to finish off the Damaged Mew V attacked earlier. I’m left with no Mew V to evolve. </p>
                    <p className="leading-7 mb-5">Shortly after we setup for game three time was called and we agreed to tie since there was no point in playing it out as neither could win with six prizes and a full bench each.</p>
                </div>
                <div id={props.fresnoDay2}>
                <h1 className="text-3xl font-bold mb-5">Fresno Day 2</h1>
                            <RoundComponent
                                roundId={roundSchema[9].roundId}
                                roundCount={roundSchema[9].roundCount}
                                roundResult={roundSchema[9].roundResult}
                                roundTitle={roundSchema[9].roundTitle}
                                deckTitle={roundSchema[9].deckTitle}
                                deckImg={roundSchema[9].deckImg}
                            />
                    <p className="leading-7 mb-5">Another mirror match, but this time I won the coin flip.</p>
                    <p className="leading-7 mb-5">Pretty much an attrition of Genesect wars until game three. I start with Genesect and hand I can’t identify a route to reduce my hand and draw cards.  Worried for time, I misplay and get greedy (Tord's words echoed…) with Cram-o-matic and discard a Switch Cart hoping for a heads—nope, tails. Now I’m forced to watch my Genesect trapped in the active until my opponent KOs it for me. I’m slowly chipped away from there until I lose.</p>
                            <RoundComponent
                                roundId={roundSchema[10].roundId}
                                roundCount={roundSchema[10].roundCount}
                                roundResult={roundSchema[10].roundResult}
                                roundTitle={roundSchema[10].roundTitle}
                                deckTitle={roundSchema[10].deckTitle}
                                deckImg={roundSchema[10].deckImg}
                            />
                    <p className="leading-7 mb-5">This guy was annoying. It was only the second round of the day and he’s relentless on getting me to consent to a gentleman’s agreement. Insisting a tie does nothing for either of us. I’m firm on telling him I only need a top 32 today for my invite and it’s too early in the day for agreements.</p>
                    <p className="leading-7 mb-5">Immediately, I know I’m in for a best-of-one game with my least favorite kind of Lostbox player. What-feels-like-forever prize checking on the first deck search and 10-15 second decisions on every Flower Selecting—it was agonizing. I wasn’t able to find a Judge until turn four and maybe I should have scooped there. I was hoping Judge or Roxanne could brick them since it was going to be a best of one anyway. </p>
                            <RoundComponent
                                roundId={roundSchema[11].roundId}
                                roundCount={roundSchema[11].roundCount}
                                roundResult={roundSchema[11].roundResult}
                                roundTitle={roundSchema[11].roundTitle}
                                deckTitle={roundSchema[11].deckTitle}
                                deckImg={roundSchema[11].deckImg}
                            />
                    <p className="leading-7 mb-5">When the round starts I assume Grant is on Kygore given he placed top 8 with it the last two regionals. Game one starts pretty typical with trades from Raikou V. My hand is clogged with supporters and stadiums, so I hatch a plan to Lost Zone his Radiant Greninja. I’m so focused on retreating my Mew VMAX due to last turns Techno Blast (a mistake I've made too many times) I forget to discard the Boss. Of course Grant mentions this, I apologize and correct. He seems upset and comments on how "sus" it was. I try to assure him it wasn't a cheat move by flashing him a second Boss from my hand, but I'm not sure he’s convinced. The game resumes and we trade prizes until the end where he surprises me with Drapion V ending the game.</p>
                    <p className="leading-7 mb-5">Game two is a lot faster. Grant is much more aggressive with Drapion V since it's no longer a secret and takes the first two prizes. I respond by putting it into the Lost Zone, but eventually Sableye and Radiant Greninja eat away my Genesect V on the bench until I lose the game. </p>
                            <RoundComponent
                                roundId={roundSchema[12].roundId}
                                roundCount={roundSchema[12].roundCount}
                                roundResult={roundSchema[12].roundResult}
                                roundTitle={roundSchema[12].roundTitle}
                                deckTitle={roundSchema[12].deckTitle}
                                deckImg={roundSchema[12].deckImg}
                            />
                        </div>
                    <p className="leading-7 mb-5">I am playing on full tilt at this point, and should have reached out to my team for support before the round started. </p>
                    <p className="leading-7 mb-5">My opponent opens Ralts, but then benches two Klefki and retreats to one. I’m in for a long, slow, game. Luckily, I had a Forest Seal Stone in hand to help me get started. Slowly but surely I KO the Klefkis to get setup and eventually win the game.</p>
                    <p className="leading-7 mb-5">Game 2 my opponent opens Ralts and passes. The door is wide open, except my hand is awful, and I struggle to start. Finally time is called and I need to prevent my opponent from making a Sky Seal Stone Play with their benched Zacian V. Digging for a big combo play with only two modifiers in deck feels risky. Plus I'd have to bump Path to the Peak for my opponent to have a chance. I opt to keep my stadium in play and KO their Shining Arcana Gardevoir. My opponent starts the turn with a twinkle in their eye and starts styling on me—they have it all. The game ends with Sky Seal Stone activated to OHKO my Mew VMax. Tie.</p>
                    <p className="leading-7 mb-5">While I’m waiting to sign the match slip my opponent is holding hostage, they also do me the favor of gleefully explaining the play-by-play of what had happened on the last turn of the game—incase I missed it the first time. After watching them happily circle TIE, I grab my things and walk over to sign my drop slip. I’m not going to Yokohoma, I did not earn my invite to the 2023 World Championships.</p>
                    <div className="MB-10">
                        <div className="flex row items-center justify-start gap-4 mb-3">
                            <h1 className="text-3xl font-bold">Worlds Invite-Final Standing</h1>
                            <img src={japanFlag} style={{ width: '50px', height: '50px' }} alt="event location" />
                        </div>
                        <figure>
                            <img className="px-4" src={japanEvent} alt="" />
                        </figure>

                        <div className="stats shadow" style={{ width: "auto" }}>


                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                </div>
                                <div className="stat-value">POINT TOTAL</div>
                                <div className="stat-value text-secondary">320/350</div>

                            </div>

                            <div className="stat">
                                <div className="stat-value" style={{ width: "auto" }}>EVENTS ATTENDED</div>
                                <div className="stat-value text-secondary">20</div>
                            </div>

                        </div>
                    </div>
                </div>



            </div>
    )
}

export default Fresno