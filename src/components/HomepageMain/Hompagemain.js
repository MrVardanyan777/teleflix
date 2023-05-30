import React from 'react';
import './homepagemain.css';
import { useNavigate } from 'react-router-dom';




const Hompagemain = () => {

    const navigate = useNavigate();

    return (
        <div className='teleflix__homepage-main'>
            <div className='teleflix__homepage-main_heading'>
                <h1>Teleflix</h1>
                <p>Your Personal Movie Guru</p>
            </div>
            <div className='teleflix__homepage-main_btnBox'>
                <button onClick={() => {navigate('/recomendation')}} >Get Started</button>
                <div className="scroll"></div>
            </div>
        </div>
    )
}

export default Hompagemain;