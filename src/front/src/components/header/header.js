import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../Svgs/Profile';
import AACD from '../../assets/AACD.png';
import './header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="main-head">
                <span className="nav-logo">
                    <img src={AACD} alt="logo AACD" className="logo" />
                </span>
                <div className='option-nav-bar'>
                    <Link to="/">Menu</Link>
                    <Link to="/Session">Jogos</Link>
                    <Link to="/Reports">Relatórios</Link>
                </div>
                <Profile />
            </div>
        );
    }
}

export default Header;
