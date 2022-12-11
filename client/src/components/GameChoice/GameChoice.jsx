import React from 'react';

const GameChoice = ({ choice }) => {
  return (
    <>
        { choice ? <div> <button>c1</button> <button>c2</button> </div> : <p>text</p> }
    </>
  );
}

export default GameChoice;