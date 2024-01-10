import React from "react";
import './LoginLayout.css';
import IMG from '../../assets/LoginAACD.png';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";



function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [Email, setEmail] = useState('');
  const [Senha, setSenha] = useState('');

  

	
    
  const handleInitHome = async () => {
  if (error !== '') {
    return;
  }

  // chamada à API de autenticação
  try {
    const response = await fetch(`http://localhost:8080/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: Email,
      senha: Senha,
    }),
    
    });


    if (response.ok) {
    // Se a autenticação for bem-sucedida, obtém o token da resposta
    const data = await response.json();
    const auth = data.email; 	
    localStorage.setItem('token', auth);

    // Redireciona para a página do painel após o login
    console.log(auth)
    navigate('Home');
    } else {
    setError('Authentication failed. Please check your credentials.');
    window.alert('Authentication failed. Please check your credentials.'); // Usando window.alert para exibir um alerta nativo do navegador

    }
  } catch (error) {
    console.error('Error during authentication:', error);
    setError('An error occurred during authentication. Please try again later.');
    window.alert(error); // Usando window.alert para exibir um alerta nativo do navegador

  }
  };

  return (
    <div className="App">
      <div className="login-container">
      <div className="login-form">
          <h2 className='title'>Login</h2>
          <h3>E-mail</h3>
          <input placeholder='email@gmail.com' value={Email} onChange={(e) => setEmail(e.target.value)}></input>
          <h3>Senha</h3>
          <input placeholder='senha' value={Senha} onChange={(e) => setSenha(e.target.value)}></input>
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
