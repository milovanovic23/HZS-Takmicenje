import React, { useState, useEffect } from 'react';
// import GameChoice from '../../components/GameChoice/GameChoice';
import './Game.css';

import idle from "../../assets/Azaric-Idle.gif";
import walking from "../../assets/Azaric-Walking.gif";
import frozen from "../../assets/Azaric.png";

const Game = (props) => {
  const [ currChoice, setCurrChoice ] = useState(0);
  const [ text, setText ] = useState("");

  const [ state, setState ] = useState(frozen);
  const [ started, setStarted ] = useState(false);
  const [ allowNext, setAllowNext ] = useState(false);

  const messages = [{
    text: "You ever heard of the butterfly effect? Essentially, the butterfly effect goes something along the lines of “little insignificant events can lead to significant results over time.” It’s 2004, Kai was born in the sign of aquarius, the creative, witty sign that sees the world through heart shaped sunglasses.",
    type: "text"
  },{
    text: "Our protagonist is somewhat of a butterfly themselves, their bubbly personality always left a mark on people’s hearts. Kai was smiling at all times, even when they tripped over, they didn’t ever cry.",
    type: "text"
  },{
    text: "Years have passed, and Kai was growing up on the internet. By the age of 11 they had some online friends they met by playing their favorite online video game. Some were their age, others younger and only a few older.",
    type: "text"
  },{
    text: "On their 12th birthday, Kai, as on their every birthday, started playing their favorite game, and told people that it’s her birthday today. Someone stood out, it was Avery. Avery was three years older than Kai, and Kai had a lot of fun playing games with Avery.",
    type: "text"
  },{
    text: "At the ripe age of 13, Kai opened up their first social media account. It was a picture sharing website, Papchat. Papchat’s main feature is their private messaging using images and they call it “papping”. Immediately, Kai added Avery on Papchat, I mean, how dangerous could it be considering Kai has known Avery for a year now?",
    type: "text"
  },{
    text: "They started talking, night and day. Kai even used to fall asleep on their phone while talking to Avery. Kai, at one point, forgot how it is to feel rested, every night was the same, up until the late night hours. Avery was Kai’s first love.",
    type: "text"
  },{
    text: "One night Avery asked Kai if they wanted to play a game called “21 questions”. “I play it often with my friends. It’s fun.”, said Avery, “Have you ever played i t?”. “No”, Kai responded, “I have never played it, but I’m down to try”.",
    type: "text"
  },{
    text: "Kai thought Avery knew everything about them, I mean, Avery even got to talk to Kai’s mother on FaceTime a few times. “What’s the point of the game?”, Kai thought to themselves.",
    type: "text"
  },{
    text: "“Have you ever sent nudes?”. Kai was struck by this question. They heard about nudes before, they know what they are, but never even thought about taking them, let alone send them to anyone.",
    type: "text"
  },{
    text: "Avery started to sweet talk Kai. “I think your body is so nice, I have never seen a petite one like yours”, “Those jeans looked so good on you, I would love to see you take them off yourself”. Kai felt a rush, their body temperature raised and they started getting dizzy.",
    type: "text"
  },{
    text: "Will Kai do what their friend Avery asked them to do?",
    optionA: 17,
    optionAText: "Yes",
    optionB: 16,
    optionBText: "No",
    type: "choice"
  },{
    text: "Six months have passed since that evening. For Kai, all nighters while texting about fun things were long gone. They felt trapped in this cycle of not wanting to lose their favorite friend and feeling bad about themselves.",
    type: "text"
  },{
    text: "Will Kai try to break this cycle?",
    optionA: 17,
    optionAText: "Yes",
    optionB: 13,
    optionBText: "No",
    type: "choice"
  },{
    text: "Six more months have passed. Kai felt even worse about herself. The constant feeling of being used and the thoughts about feeling like a “sl*t” have come across her mind too many times. Avery was asking for more and more.",
    type: "text"
  },{
    text: "Will Kai try to break this cycle?",
    optionA: 17,
    optionAText: "Yes",
    optionB: 15,
    optionBText: "No",
    type: "choice"
  },{
    text: "It’s been a year and a half since Kai caved in to Avery’s request. Avery’s been acting strange lately, they stopped sweet talking Kai and completely changed the way they talked to them, but Kai thought it was just love, they didn’t know any better.",
    type: "text"
  },{
    text: "Kai couldn’t accept their fate. That bubbly personality disappeared, the sweet little kid that was once  always smiling disappeared. Like her favorite Disney character Snow White, she just fell asleep and never woke up.",
    type: "game-over",
  },{
    text: "Kai’s attempt backfired. Avery fell into a frenzy of rage. “Wh*re”, “sl*t”, ”worthless piece of sh*t”, “You were nothing but a toy to me”. Kai couldn’t believe that the Avery they once knew had become such a monster, unrecognisable from the person they met.",
    type: "text"
  },{
    text: "Kai cried so much that the area around their eyes became a mix of deep blue, purple and red, in a pattern that would make Kai look like they are on their dying bed. In a way, maybe Kai was on their dying bed. Her soul completely died off, not having energy to even stand up and go to the bathroom, even if it meant that they were physically hurting from that.",
    type: "text"
  },{
    text: "A few days passed, Kai started to have good days, even though they have a scar on their loving heart. Avery hasn’t sent a message in a while, which was still weird to Kai, even though Avery hurt Kai. “Why do I miss them?” - Kai thought to herself.",
    type: "text"
  }];

  function advance() {
    if (!started) return;
    
    setText(messages[currChoice].text);
    
    //console.log(started && messages[currChoice].type === "choice");
    
    switch (messages[currChoice].type) {
      case "game-over":
        setText("There are no right or wrong choices. The butterfly always flies, it’s up to us to choose the direction the butterfly flies away in.");
        break;
      case "choice":
        // setCurrChoice(messages[currChoice].nextChoice);
        // setText()
        setCurrChoice(currChoice + 1);
        setState(idle);
        setAllowNext(false);
        break;
      case "text":
        setCurrChoice(currChoice + 1);
        break;
    }
  }

  // useEffect(()=>{
  //   option === "A" ? setCurrChoice(messages[currChoice - 1 < 0 ? 0 : currChoice - 1].optionA) : setCurrChoice(messages[currChoice - 1 < 0 ? 0 : currChoice - 1].optionB);
  // }, [option]);

  return (
    <div className="game-wrapper">
      <div className="game">
        <img src={state} alt="character" />
        <p>{ text }</p>
        { !started ? <button onClick={() => {setStarted(true); setState(walking); setAllowNext(true);}} >Start game</button> : <></> }
        { started && messages[currChoice - 1 < 0 ? 0 : currChoice - 1].type === "choice" ? <div className="game-choices"> <button onClick={()=>{ setCurrChoice(messages[currChoice - 1 < 0 ? 0 : currChoice - 1].optionA); advance() }} >{ messages[currChoice - 1 < 0 ? 0 : currChoice - 1].optionAText }</button> <button onClick={()=>{ setCurrChoice(messages[currChoice - 1 < 0 ? 0 : currChoice - 1].optionB); advance() }}>{ messages[currChoice - 1 < 0 ? 0 : currChoice - 1].optionBText }</button> </div> : <></>}

        { allowNext ? <button onClick={advance}>Next</button> : <></> }
      </div>
    </div>
  );
}

export default Game;