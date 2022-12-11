import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Post.css'
// import profilePhoto from '../../assets/profilePhoto.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Post = (props) => {
  const navigate=useNavigate();
  useEffect(() => {
    AOS.init();
  }, [])

  const [isShowMore, setIsShowMore] = useState(false);
  return (
    <div className='containerPost' data-aos="fade-right" data-aos-duration="1000">
        <div className="headPost">
          <div className="titlePost">
          <h3>{props.title}</h3>
          </div>
          <div className="imagePost">
            <img src={props.profilePhoto} alt='Profile photo'/>
          </div>
        
        </div>
        <div className="bodyPost">
            <div className="bodyPostText">
                {isShowMore ? props.bodyText : props.bodyText.substring(0,300)+'...'}
            </div>
            <p className='findOut' onClick={()=>{ setIsShowMore(!isShowMore) }}>{isShowMore ? "collapse" : "find out more..." }</p>
        </div>

        

    </div>
  )
}

export default Post