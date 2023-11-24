import React, { useState } from "react";
import "./Navbar.css";
import AACD from '../../assets/AACD.png';
import Perfil from './img/Perfil.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo"><img src={AACD} alt="logo AACD" className="logo"/></span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Home</a>
        <a href="/about">Jogos</a>
        <a href="/service">Relatórios</a>
      </div>
      <img src={Perfil} className="perfil-usuario" alt="Perfil do usuário"/>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
    
  );
};

export default Navbar;