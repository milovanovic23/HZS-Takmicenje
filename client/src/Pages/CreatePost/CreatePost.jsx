import React from 'react';
import './CreatePost.css'
const ContactUs = () => {
  return (
   <div>
    <div className="containerYourStory">
      <h1 className='shareYourStory' data-aos="zoom-in-right" data-aos-duration="1000">share your story</h1>
      <div className="yourStoryWrapper">
        <input type="text" className="fieldsShare" name='title' id='title' placeholder='Title'/>
        <input type="text" className="fieldsShare" name='desc' id='desc' placeholder='Description'/>
        <input type="submit" value="Share" className='buttonShare'/>
      </div>

      </div>
    </div>
  );
}

export default ContactUs;