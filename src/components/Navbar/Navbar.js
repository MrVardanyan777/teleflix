import React from 'react';
import './navbar.css';
import CodeIcon from '@mui/icons-material/Code';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className='teleflix__navbar'>
        <div className='teleflix__navbar-logo'>
            <h2 onClick={() => {navigate('/')}}>TF</h2>
        </div>       

        <div className='teleflix__navbar-git'>
            <CodeIcon fontSize='large' sx={{
                'cursor': 'pointer',
                'color': '#4cd137'
            }} />
        </div>
    </div>
  )
}

export default Navbar;