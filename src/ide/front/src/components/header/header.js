import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../svgs/Profile';
import AACD from '../../assets/AACD.png';
import './header.css';
import { useNavigate } from 'react-router-dom';

class header extends React.Component {
    
    render() {

        return (
            <div className="main-head">
                <span className="nav-logo"> 
                    <img src={AACD} alt="logo AACD" className="logo"/>
                </span>
                <div className='option-nav-bar'>
                    <Link to="/Home" className='linkText'>Menu</Link>
                    <Link to="/Session" className='linkText'>Jogos</Link>
                </div>
                <Profile />
            </div>
        );
    }
}

export default header;
