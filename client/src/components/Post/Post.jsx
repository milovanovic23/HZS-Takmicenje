import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Post.css'
import profilePhoto from '../../assets/profilePhoto.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Post = (props) => {
  const navigate=useNavigate();
  useEffect(() => {
    AOS.init();
  }, [])

  
  
  
  return (
    <div className='containerPost' data-aos="fade-right" data-aos-duration="1000">
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
                {props.bodyText.substring(0, 500) + '...'}
            </div>
            <p className='findOut' onClick={()=>{}}>find out more...</p>
        </div>

        

    </div>
  )
}

export default Post