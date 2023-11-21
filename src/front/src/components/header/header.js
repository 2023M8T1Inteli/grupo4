import React from 'react';
import Profile from '../../assets/Profile';
import './header.css';

class Header extends React.Component{
    render(){
        return(
            <div className="main-head">
                <p>Menu</p>
                <p>Jogos</p>
                <p>Relatório</p>
                <Profile />
            </div>
        )
    }
}
export default Header