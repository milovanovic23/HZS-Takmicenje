import React, { useState } from 'react';
import GameChoice from '../../components/GameChoice/GameChoice';
import './Game.css';

import idle from "../../assets/Azaric-Idle.gif";
import walking from "../../assets/Azaric-Walking.gif";
import frozen from "../../assets/Azaric.png";

const Game = (props) => {
  const [ state, setState ] = useState(frozen);
  const [ choice, setChoice ] = useState(false);
  const [ started, setStarted ] = useState(false);

  

  function advance() {
    // if ()
  }

  return (
    <div className="game-wrapper">
      <div className="game" onClick={advance}>
        <img src={state} alt="character" />
        <div className="options">
          { !started ? <button onClick={() => {setStarted(true); setState(walking)}} >Start game</button> : <GameChoice choice={choice} />}
        </div>
      </div>
    </div>
  );
}

export default Game;