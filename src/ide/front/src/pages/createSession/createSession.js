import React from "react";
import { useEffect, useState } from 'react';
import {View, Alert} from 'react';
import { useNavigate } from 'react-router-dom'; // Importe o useHistory para fazer o redirecionamento
import Back from '../../components/svgs/Back';



//styles
import "./style.css";

// components
import Header from '../../components/header/header'



// exortando tela de editGame
function CreateSessionPage() {

    // Estados
    const [children, setChildren] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState({});
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedGame, setSelectedGame] = useState();
    const [error, setError] = useState('');
    const [games, setGames] = useState([]);
    const [createNewGame, setCreateNewGame] = useState(false); // Novo estado para controlar a criação de um novo jogo
    const navigate = useNavigate();


    // Efeito useEffect para carregar pacientes e jogos ao montar a página
    useEffect(() => {
        fetchChildrens();
        handleRegister();
        fetchGames();
      }, []);

      // Função para registrar uma nova sessão
      const handleRegister = async () => {
        if (!selectedPatient || !selectedGame) {
            console.error('Selected patient or game is not defined');
            return;
          }
        try {

            console.log(typeof selectedGame)

            const token = localStorage.getItem( 'token'); // Substitua 'seuToken' pelo nome da chave em que o token está armazenado
            const response = await fetch(`http://localhost:8080/sessoes/create`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                paciente_id: selectedPatient,
                terapeuta_email: `${token}`,
                data: `${selectedDate}`,
                jogo_id: parseInt(selectedGame)
            }),
          });
    
          if (response.ok) {
            window.alert('Sessão criada com sucesso'); // Usando window.alert para exibir um alerta nativo do navegador
            navigate('/Session');

   
          } else {
            setError('Registration failed. Please try again.');
          }
        } catch (error) {
          console.error('Error during registration:', error);
          setError('An error occurred during registration. Please try again later.');
        }
      };
    
    // Função para buscar a lista de pacientes 
      async function fetchChildrens() {
        try {
          const response = await fetch(`http://localhost:8080/pacientes`);
          if (response.ok) {
            const data = await response.json();
            // console.log(data)
            setChildren(data); // Define os produtos no estado
          } else {
            console.error('Erro ao buscar produtos:', response.statusText);
          }
        } catch (error) {
          console.error('Erro na requisição:', error);
        }
      }

      // Função para buscar a lista de jogos
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
            console.log(games.data_criacao)
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
        <div className="main">
        <Header />        
          <div className="Container">
          <div className='back-button'>
                <BackButton />
        </div>  
            <div className="Contentsession">
              <div className="ContentSections">
                <div className="InputBox">
                  <h1>Nome do paciente</h1>
                  <select
                    className="input"
                    value={selectedPatient}
                    onChange={(e) => setSelectedPatient(e.target.value)}
                  >
                    <option value="">
                      Selecione um paciente
                    </option>
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
                    onChange={(e) => setSelectedGame(parseInt(e.target.value))}
                  >
                    <option value="">
                      Selecione um jogo
                    </option>
                    <option value={createNewGame}>
                      Criar Jogo
                    </option>
                    {games.map((game) => (
                      <option key={game.id} value={game.id}>
                        {game.nome_jogo}
                      </option>
                    ))}
                  </select>
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
            

        </div>
        </>
      );
    }
    const BackButton = () => {
        const navigate = useNavigate();
        const handleBack = () => {
            // Navigate to the "/" page when the back button is pressed
            navigate('/Home');
        };
    
        return (
            <Back onClick={handleBack} />
        );
    };

export default CreateSessionPage