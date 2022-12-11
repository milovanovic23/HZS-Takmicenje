import React from 'react'
import './Post.css'
import profilePhoto from '../../assets/profilePhoto.png'


const Post = (props) => {
  

  
  
  
  return (
    <div className='containerPost'>
        <div className="headPost">
          <div className="titlePost">
          <h3>{props.title}</h3>
          </div>
          <div className="imagePost">
            <img src={profilePhoto} alt='Profile photo'/>
          </div>
        
        </div>
        <div className="bodyPost">
            <div className="bodyPostText">
                {props.bodyText.substring(0, 100) + '...'}
            </div>
            <p>find out more...</p>
        </div>

        

    </div>
  )
}

export default Post