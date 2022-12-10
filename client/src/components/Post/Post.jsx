import React from 'react'
import './Post.css'


const Post = (props) => {
  return (
    <div className='containerPost'>
        <div className="headPost">
        <h3>{props.title}</h3>
        <img src='' alt='Profilna'/>
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