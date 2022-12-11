import React from 'react';
import Post from '../../components/Post/Post.jsx'
import './Stories.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Stories = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <div className="containerStories">
      <h1 className='anonStories' data-aos="zoom-in-right" data-aos-duration="1000">anonymous stories</h1>
      <Post title='Lorem ipsum'  bodyText='Lorem sadsa dasds dasd as  dasd dasd  asds sad sd sd  dsad  dsa ds d sd sdsad  das dsasdds sdas dasd sdas sd ipsum dolor dsad adsdasd dasdasd sdasdas dasdasd asdsd  asda s asdasdasd dasd dasd asd dasdasdas asdasdas dasdasd dasdasd dasdas dsadasd asdasda dasdas'/>
      <Post title='Lorem ipsum' bodyText='Lorem sadsa dasds dasd as  dasd dasd  asds sad sd sd  dsad  dsa ds d sd sdsad  das dsasdds sdas dasd sdas sd ipsum dolor dsad adsdasd dasdasd sdasdas dasdasd asdsd  asda s asdasdasd dasd dasd asd dasdasdas asdasdas dasdasd dasdasd dasdas dsadasd asdasda dasdas'/>
      <Post title='Lorem ipsum' bodyText='Lorem sadsa dasds dasd as  dasd dasd  asds sad sd sd  dsad  dsa ds d sd sdsad  das dsasdds sdas dasd sdas sd ipsum dolor dsad adsdasd dasdasd sdasdas dasdasd asdsd  asda s asdasdasd dasd dasd asd dasdasdas asdasdas dasdasd dasdasd dasdas dsadasd asdasda dasdas'/>
      <Post title='Lorem ipsum' bodyText='Lorem sadsa dasds dasd as  dasd dasd  asds sad sd sd  dsad  dsa ds d sd sdsad  das dsasdds sdas dasd sdas sd ipsum dolor dsad adsdasd dasdasd sdasdas dasdasd asdsd  asda s asdasdasd dasd dasd asd dasdasdas asdasdas dasdasd dasdasd dasdas dsadasd asdasda dasdas'/>
      <Post title='Lorem ipsum' bodyText='Lorem sadsa dasds dasd as  dasd dasd  asds sad sd sd  dsad  dsa ds d sd sdsad  das dsasdds sdas dasd sdas sd ipsum dolor dsad adsdasd dasdasd sdasdas dasdasd asdsd  asda s asdasdasd dasd dasd asd dasdasdas asdasdas dasdasd dasdasd dasdas dsadasd asdasda dasdas'/>
  
      </div>
      
    
    
    
    </div>
  );
}

export default Stories;