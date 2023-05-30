import React from 'react';
import './homepagesecondary.css';
import Imageslider from '../ImageSlider/Imageslider';
import { useNavigate } from 'react-router-dom';


const Homepagesecondary = () => {

  const navigate = useNavigate();

  return (
    <div className='teleflix__homepagesecondary section__padding'>

      <div className='teleflix__homepagesecondary-left_section'>
        <Imageslider duration={5000} />
      </div>


      <div className='teleflix__homepagesecondary-center_section'>
        <h1>Teleflix</h1>
        <p>Discover what to watch tonight.</p>
        <button onClick={() => { navigate('/recomendation') }} >Get Started</button>
      </div>

      <div className='teleflix__homepagesecondary-right_section'>
        <Imageslider duration={3000} />
      </div>
    </div>
  )
}

export default Homepagesecondary;