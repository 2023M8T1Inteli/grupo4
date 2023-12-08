import React from "react";
import './LoginLayout.css';
import IMG from '../../assets/LoginAACD.png';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  
  const handleInitHome = () => {
    // Navigate to the "/Session" screen when the button is clicked
    navigate('/Home');
  };

  return (
    <div className="App">
      <div className="login-container">
      <div className="login-form">
        <h2 className='title'>Login</h2>
          <h3>E-mail</h3>
          <input placeholder='nome.sobrenome@gmail.com'></input>
          <h3>Senha</h3>
          <input placeholder='minha@senha123'></input>
          <a href='#'>Esqueci a senha</a>
          <button className='entrarBtn' onClick={handleInitHome}>Fazer Login</button>
      </div>
      <div className="illustration">
        <img src={IMG} alt="Imagem Ilustrativa" className='img-welcome'/>
      </div>
    </div>
    </div>
  );
}

export default Login;
