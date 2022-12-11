import React from 'react';
import './Text.css'

const Text = ({ value }) => {
  return (
    <div className='textInStory'>{ value }</div>
  );
}

export default Text;