import React, { useState, useEffect } from 'react';
// import GameChoice from '../../components/GameChoice/GameChoice';
import './Game.css';

import idle from "../../assets/Azaric-Idle.gif";
import walking from "../../assets/Azaric-Walking.gif";
import frozen from "../../assets/Azaric.png";
import backgroundMusic from "../../assets/musica de la herry freud.mp3";

const Game = (props) => {
  let audio = new Audio(backgroundMusic);
  const [ currChoice, setCurrChoice ] = useState(0);
  const [ text, setText ] = useState("");
  const start = () => {
    audio.play();
  }
  const [ state, setState ] = useState(frozen);
  const [ started, setStarted ] = useState(false);
  const [ allowNext, setAllowNext ] = useState(false);

  const [ paths, setPaths ] = useState([0]);
  const [ i, setI ] = useState(0);


  // function advance() {
  //   if (!started) return;
    
  //   setText(messages[currChoice].text);
    
  //   //console.log(started && messages[currChoice].type === "choice");
    
  //   switch (messages[currChoice].type) {
  //     case "game-over":
  //       setText("There are no right or wrong choices. The butterfly always flies, it’s up to us to choose the direction the butterfly flies away in.");
  //       break;
  //     case "choice":
  //       // setCurrChoice(messages[currChoice].nextChoice);
  //       // setText()
  //       setCurrChoice(currChoice + 1);
  //       setState(idle);
  //       setAllowNext(false);
  //       break;
  //     case "text":
  //       setCurrChoice(currChoice + 1);
  //       break;
  //   }
  // }

  // useEffect(()=>{
  //   option === "A" ? setCurrChoice(messages[currChoice - 1 < 0 ? 0 : currChoice - 1].optionA) : setCurrChoice(messages[currChoice - 1 < 0 ? 0 : currChoice - 1].optionB);
  // }, [option]);

  const branches = [
    {
      id: 0,
      texts: ["You ever heard of the butterfly effect? Essentially, the butterfly effect goes something along the lines of “little insignificant events can lead to significant results over time.” It’s 2004, Kai was born in the sign of aquarius, the creative, witty sign that sees the world through heart shaped sunglasses.", "Our protagonist is somewhat of a butterfly themselves, their bubbly personality always left a mark on people’s hearts. Kai was smiling at all times, even when they tripped over, they didn’t ever cry.", "Years have passed, and Kai was growing up on the internet. By the age of 11 they had some online friends they met by playing their favorite online video game. Some were their age, others younger and only a few older.", "On their 12th birthday, Kai, as on their every birthday, started playing their favorite game, and told people that it’s her birthday today. Someone stood out, it was Avery. Avery was three years older than Kai, and Kai had a lot of fun playing games with Avery.", "At the ripe age of 13, Kai opened up their first social media account. It was a picture sharing website, Papchat. Papchat’s main feature is their private messaging using images and they call it “papping”. Immediately, Kai added Avery on Papchat, I mean, how dangerous could it be considering Kai has known Avery for a year now?", "They started talking, night and day. Kai even used to fall asleep on their phone while talking to Avery. Kai, at one point, forgot how it is to feel rested, every night was the same, up until the late night hours. Avery was Kai’s first love.", "One night Avery asked Kai if they wanted to play a game called “21 questions”. “I play it often with my friends. It’s fun.”, said Avery, “Have you ever played i t?”. “No”, Kai responded, “I have never played it, but I’m down to try”.", "Kai thought Avery knew everything about them, I mean, Avery even got to talk to Kai’s mother on FaceTime a few times. “What’s the point of the game?”, Kai thought to themselves.", "“Have you ever sent nudes?”. Kai was struck by this question. They heard about nudes before, they know what they are, but never even thought about taking them, let alone send them to anyone.", "Avery started to sweet talk Kai. “I think your body is so nice, I have never seen a petite one like yours”, “Those jeans looked so good on you, I would love to see you take them off yourself”. Kai felt a rush, their body temperature raised and they started getting dizzy."],
      question: "Will Kai do what their friend Avery asked them to do?",
      textPointer: 0,
      A: 1,
      B: 8
    },
    {
      id: 1,
      texts: ["...", "...", "Six months have passed since that evening. For Kai, all nighters while texting about fun things were long gone. They felt trapped in this cycle of not wanting to lose their favorite friend and feeling bad about themselves."],
      question: "Will Kai try to break this cycle?",
      textPointer: 0,
      A: 4,
      B: 2
    },
    {
      id: 2,
      texts: ["Six more months have passed. Kai felt even worse about herself. The constant feeling of being used and the thoughts about feeling like a “sl*t” have come across her mind too many times. Avery was asking for more and more."],
      question: "Will Kai try to break this cycle?",
      textPointer: 0,
      A: 4,
      B: 3
    },
    {
      id: 3,
      texts: ["It’s been a year and a half since Kai caved in to Avery’s request. Avery’s been acting strange lately, they stopped sweet talking Kai and completely changed the way they talked to them, but Kai thought it was just love, they didn’t know any better.", "Kai couldn’t accept their fate. That bubbly personality disappeared, the sweet little kid that was once  always smiling disappeared. Like her favorite Disney character Snow White, she just fell asleep and never woke up."],
      question: "GAME OVER",
      textPointer: 0,
    },
    {
      id: 4,
      texts: ["Kai’s attempt backfired. Avery fell into a frenzy of rage. “Wh*re”, “sl*t”, ”worthless piece of sh*t”, “You were nothing but a toy to me”. Kai couldn’t believe that the Avery they once knew had become such a monster, unrecognisable from the person they met.", "Kai cried so much that the area around their eyes became a mix of deep blue, purple and red, in a pattern that would make Kai look like they are on their dying bed. In a way, maybe Kai was on their dying bed. Her soul completely died off, not having energy to even stand up and go to the bathroom, even if it meant that they were physically hurting from that.", "A few days passed, Kai started to have good days, even though they have a scar on their loving heart. Avery hasn’t sent a message in a while, which was still weird to Kai, even though Avery hurt Kai. “Why do I miss them?” - Kai thought to herself.", "*ding* Kai checked the notification. Unexpectedly, it was from Avery."],
      question: "Does Kai answer this message?",
      textPointer: 0,
      A: 5,
      B: 6
    },
    {
      id: 5,
      texts: ["Kai was surprised. They felt relief.", "Relief?...", "Even though Avery was someone who hurt Kai, they still had feelings for Avery. Kai felt defeated, knowing they still get those same butterflies from Avery’s messages they used to get when they started talking.", "“Hey”, “Hi”. Everything seemed normal, at least to Kai, but she was still confused, why would Avery after all those words act like nothing happened. One thing lead to another, and Avery started to ask Kai for the same thing they fought over.", "Kai said no.", "Avery didn’t like that at all, but this time Avery did not start offending Kai, instead Avery started telling Kai it was her fault he even got to that state of mind. Kai was nervous, but they started thinking.", "Kai thought about everything Avery did to them, doubting herself if she should fall under his influence again. Kai already made the choice to break the cycle, why should she fall into the trap she already knows so well?", "Even if she did, she can always break the cycle again."],
      question: "And that’s okay.",
      textPointer: 0,
      A: 7,
      B: 7
    },
    {
      id: 6,
      texts: [],
      question: "Kai decided not to open the message.",
      A: 7,
      textPointer: 0,
      B: 7
    },
    {
      id: 7,
      texts: ["But what Kai went through was scary. All along from the start it wasn’t them that was the problem. It was Avery."],
      textPointer: 0,
    },
    {
      id: 8,
      texts: ["There are no right or wrong choices. The butterfly always flies, it’s up to us to choose the direction the butterfly flies away in."],
      textPointer: 0,
    }
  ];

  // function gameControls() {
  //   return (
  //     <div className="game-controls">
  //       <div className="choice">
  //         <button>A</button>
  //         <button>B</button>
  //       </div>
  //       <button>Next</button>
  //     </div>
  //   );
  // }

  
  return (
    <div className="game-wrapper">
      <div className="game">
        <img src={state} alt="character" />
        {/* <p>{ text }</p>
        { !started ? <button onClick={() => {setStarted(true); setState(walking); setAllowNext(true); start();}} >Start game</button> : <></> }
        { started && messages[currChoice - 1 < 0 ? 0 : currChoice - 1].type === "choice" ? <div className="game-choices"> <button onClick={()=>{ setCurrChoice(messages[currChoice - 1 < 0 ? 0 : currChoice - 1].optionA); advance() }} >{ messages[currChoice - 1 < 0 ? 0 : currChoice - 1].optionAText }</button> <button onClick={()=>{ setCurrChoice(messages[currChoice - 1 < 0 ? 0 : currChoice - 1].optionB); advance() }}>{ messages[currChoice - 1 < 0 ? 0 : currChoice - 1].optionBText }</button> </div> : <></>}

        { allowNext ? <button onClick={advance}>Next</button> : <></> } */}
        <p>{ text }</p>
        { !started ? <button onClick={() => {
            setStarted(true);
            setState(walking);
            setAllowNext(true);
            start();
            // setI(i + 1);
            setText(branches[0].texts[0]);
            console.log(branches[paths].textPointer)
            // setText("...");
          }} >Start game</button> : <div className="game-controls">
        <div className="choice">
          { branches[paths].texts.length === i ? <>
            <button onClick={() => {
              setPaths(branches[paths].A);
              // setI(0);
              setText(branches[paths].texts[branches[paths].textPointer]);
            }}>
            Yes
          </button>
          <button onClick={() => {
              setPaths(branches[paths].B);
              console.log(i)
              // setI(0);
              console.log(i)
              setText(branches[paths].texts[branches[paths].textPointer]);
            }}>
            No
          </button></> : <></> }
        </div>
        <button onClick={() => {
          // console.log(branches[paths].texts);
          // setI(i + 1);
          branches[paths].textPointer++;
          setText(branches[paths].texts[branches[paths].textPointer]);
          console.log(`i: ${i}, ${branches[paths].texts[branches[paths].textPointer]}, paths: ${paths}, text: ${text}`);
          // console.log(i);
          if (i >= branches[paths].texts.length - 1) {
            setText(branches[paths].question);
          }
        }}>Next</button>
      </div> }
        
      </div>
    </div>
    
  );
}

export default Game;