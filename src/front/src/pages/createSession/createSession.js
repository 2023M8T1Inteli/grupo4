import React from "react";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importe o useHistory para fazer o redirecionamento


//styles
import "./style.css";

// components
import Header from '../../components/header/header'



// exortando tela de editGame
function CreateSessionPage() {

    const [children, setChildren] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedGame, setSelectedGame] = useState('');
    const [error, setError] = useState('');
    const [games, setGames] = useState([]);
    const [createNewGame, setCreateNewGame] = useState(false); // Novo estado para controlar a criação de um novo jogo
    const navigate = useNavigate();


    useEffect(() => {
        fetchChildrens();
        handleRegister();
        fetchGames();

      }, []);

      const handleRegister = async () => {
        if (error !== '') {
          return;
        }
    
        try {

            if (createNewGame) {
                // Se criar um novo jogo estiver selecionado
                const token = localStorage.getItem('token');
                const newGameResponse = await fetch('http://localhost:8080/jogos', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'email': `${token}`
                  },
                  body: JSON.stringify({
                    // Se necessário, adicione dados para a criação do jogo
                  }),
                });
        
                if (newGameResponse.ok) {
                  const newGameData = await newGameResponse.json();
                  setSelectedGame(newGameData.id); // Define o novo jogo como selecionado
                  navigate('/nova-rota'); // Substitua '/nova-rota' pelo caminho para a nova tela
                } else {
                  setError('Failed to create a new game. Please try again.');
                  return;
                }
              }

            const token = localStorage.getItem( 'token'); // Substitua 'seuToken' pelo nome da chave em que o token está armazenado
            const response = await fetch(`http://localhost:8080/sessoes`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'email': `${token}`
            },
            body: JSON.stringify({
                paciente_id: selectedPatient,
                terapeuta_email: `${token}`,
                data: selectedDate,
                email: `${token}`
            }),
          });
    
          if (response.ok) {
            const responseBody = await response.json();
            console.log(responseBody)
   
          } else {
            setError('Registration failed. Please try again.');
          }
        } catch (error) {
          console.error('Error during registration:', error);
          setError('An error occurred during registration. Please try again later.');
        }
      };
    
    
      async function fetchChildrens() {
        try {
          const response = await fetch(`http://localhost:8080/pacientes`);
          if (response.ok) {
            const data = await response.json();
            console.log(data)
            setChildren(data); // Define os produtos no estado
          } else {
            console.error('Erro ao buscar produtos:', response.statusText);
          }
        } catch (error) {
          console.error('Erro na requisição:', error);
        }
      }

      async function fetchGames() {
        try {
            
          const token = localStorage.getItem( 'token'); // Substitua 'seuToken' pelo nome da chave em que o token está armazenado
          const response = await fetch(`http://localhost:8080/jogos`, {
            method: 'POST',
            body: {
              'email': `${token}`, // Inclua o token no cabeçalho de autorização
            },
          });

          if (response.ok) {
            const data = await response.json();
            console.log(games)
            console.log(games.nome_jogo)
            setGames(data);
          } else {
            console.error('Erro ao buscar jogos:', response.statusText);
          }
        } catch (error) {
          console.error('Erro na requisição:', error);
        }
      }

    
      return (
        <>
          <Header />
          <div className="Container">
            <div className="Contentsession">
              <div className="ContentSections">
                <div className="InputBox">
                  <h1>Nome do paciente</h1>
                  <select
                    className="input"
                    value={selectedPatient}
                    onChange={(e) => setSelectedPatient(e.target.value)}
                  >
                    {/* <option value="" disabled>
                      Selecione um paciente
                    </option> */}
                    {children.map((child) => (
                      <option key={child.id} value={child.id}>
                        {child.nome_completo}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="ContentSections">
                <div className="InputBox">
                  <h1>Jogo</h1>
                  <select
                    className="input"
                    value={selectedGame}
                    onChange={(e) => setSelectedGame(e.target.value)}
                  >
                    <option value="" disabled>
                      Selecione um paciente
                    </option>
                    {games.map((game) => (
                      <option key={game.id} value={game.id}>
                        {game.nome_jogo}
                      </option>
                    ))}
                  </select>
                  <label>
                    <input
                    type="checkbox"
                    checked={createNewGame}
                    onChange={() => setCreateNewGame(!createNewGame)}
                    />
                    Criar Novo Jogo
                </label>
                </div>
              </div>
              <div className="ContentSection2">
                <div className="InputBox">
                  <h1>Data e Hora</h1>
                  <input
                  className="input"
                    type="datetime-local"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="ContentSections">
                <button onClick={handleRegister}>AGENDAR SESSÃO</button>
              </div>
            </div>
          </div>
        </>
      );
    }

export default CreateSessionPage