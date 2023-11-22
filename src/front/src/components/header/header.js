import React from 'react';
import Profile from '../svgs/Profile';
import './header.css';

class Header extends React.Component{
    render(){
        return(
            <div className="main-head">
                <p>Menu</p>
                <p>Jogos</p>
                <p>Relatórios</p>
                <Profile />
            </div>
        )
    }
}
export default Header