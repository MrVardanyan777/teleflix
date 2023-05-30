import React from 'react';
import './homepage.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Homepagesecondary, Hompagemain } from '../../components';
import backPhoto from '../../assets/pexels-tima-miroshnichenko-7991318.jpg';

const Homepage = () => {
  return (
    <>
        <div className='teleflix__homepage'>
            <Parallax pages={2} id="teleflix__homepage-parallax">
                <ParallaxLayer offset={0} style={{backgroundImage: `url(${backPhoto})`, 
                                                  backgroundSize: 'cover', backgroundPosition: 'center'}} 
                                                  factor={1.5} speed={0.5}>
                    <Hompagemain />
                </ParallaxLayer>

                <ParallaxLayer offset={1}>
                   <Homepagesecondary />
                </ParallaxLayer>
            </Parallax>
        </div>
    </>
  )
}

export default Homepage