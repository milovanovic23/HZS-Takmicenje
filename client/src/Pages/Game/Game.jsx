import React from 'react';
import './Game.css';

const Game = (props) => {
  return (
    <div>
      <div className="avatarHolder">
        <img src={props.avatar}/>
      </div>
    </div>
  );
}

export default Game;