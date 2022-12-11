import React, { useState, useEffect, useContext } from 'react';
import { AContext } from '../../context/AuthContext';
import './CreatePost.css'

const ContactUs = () => {
  const { token, setToken } = useContext(AContext);

  const [ title, setTitle ] = useState("");
  const [ desc, setDesc ] = useState("");

  function handlePost() {
    console.log(token)

    fetch("http://localhost:4000/post", {
      method: 'POST',
      headers: { Authorization : token, "Content-Type" : 'application/json'},
      body: JSON.stringify({
        title,
        content: desc,
        tags: [],
        allowsReplies: false,
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
  }

  return (
    <div>
      <div className="containerYourStory">
        <h1 className='shareYourStory' data-aos="zoom-in-right" data-aos-duration="1000">share your story</h1>
        <div className="yourStoryWrapper">
          <input onChange={e => setTitle(e.target.value)} type="text" className="fieldsShare" name='title' id='title' placeholder='Title'/>
          <input onChange={e => setDesc(e.target.value)} type="text" className="fieldsShare" name='desc' id='desc' placeholder='Description'/>
          <input onClick={handlePost} type="submit" value="Share" className='buttonShare'/>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;