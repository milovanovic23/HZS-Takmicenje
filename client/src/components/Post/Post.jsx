import React from 'react'
import './Post.css'
import profilePhoto from '../../assets/profilePhoto.png'


const Post = (props) => {
  return (
    <div className='containerPost'>
        <div className="headPost">
        <h3>{props.title}</h3>
        <img src={profilePhoto} alt='Profile photo'/>
        </div>
        <div className="bodyPost">
            <div className="bodyPostText">
                {props.bodyText}
            </div>
            <p>find out more...</p>
        </div>

        

    </div>
  )
}

export default Post