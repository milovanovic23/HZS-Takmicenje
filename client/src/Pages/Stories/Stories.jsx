import React from 'react';
import Post from '../../components/Post/Post.jsx'
import './Stories.css'
const Stories = () => {
  return (
    <div>
      <div className="containerStories">
      <h1 className='anonStories'>anonymous stories</h1>
      <Post title='Lorem ipsum' bodyText='Lorem ipsum dolor'/>
      <Post title='Lorem ipsum' bodyText='Lorem ipsum dolor'/>
      <Post title='Lorem ipsum' bodyText='Lorem ipsum dolor'/>
      <Post title='Lorem ipsum' bodyText='Lorem ipsum dolor'/>
      </div>
      
    
    
    
    </div>
  );
}

export default Stories;