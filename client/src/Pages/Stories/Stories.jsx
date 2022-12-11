import React, { useState, useEffect, useContext } from 'react';
import Post from '../../components/Post/Post.jsx'
import './Stories.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AContext } from '../../context/AuthContext.jsx';

const Stories = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const { token, setToken } = useContext(AContext);

  const [ posts, setPosts ] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:4000/post/")
    .then(r=>r.json())
    .then(data => {
      setPosts(data);
    }).catch((e) => console.error(e));
  }, []);

  return (
    <div>
      <div className="containerStories">
        <h1 className='anonStories' data-aos="zoom-in-right" data-aos-duration="1000">anonymous stories</h1>
        { posts.map(post => (
              <Post title={post.title} bodyText={post.content} profilePhoto={post.user.avatarUrl} />
            )
          )
        }
      </div>
    </div>
  );
}

export default Stories;