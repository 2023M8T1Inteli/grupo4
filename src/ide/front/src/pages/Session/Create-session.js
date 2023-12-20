import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header'
import CreateGame from '../../components/CreateGame/create-game';
import Back from '../../components/svgs/Back';
import { useEffect, useState } from "react";
import Block from "../../assets/Block.png";
import './Create-session.css';

function CreateSession() {
        // Função de navegação para transição de páginas
        const navigate = useNavigate();
        // Estado para armazenar a lista de jogos disponíveis
        const [games, setGames] = useState([]);

         // Função para navegar para a tela de edição de jogo quando o botão é clicado
        const handleEditGame = (gameId) => {
            navigate(`/EditGame/${gameId}`);

        };

        // Efeito useEffect para buscar a lista de jogos ao montar a página
        useEffect(() => {
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
    
            fetchGames();
          }, []);

        return (
            <div className='main'>
                <Header />
                <div className='back-button'>
                    <BackButton />
                </div>
                <div className='setting-section'>
                    <h1>Adicione um nome para sessão:</h1>
                    <input placeholder='Sessão 1'></input>
                </div>
                <div className='choose-game'>
                <h1>Escolha um jogo:</h1>
                {/* <CreateGame className="first-in-row"/> */}

                <div className='game-grid'>
                {games.map((game, index) => (  
                    <a key={game.id} className={`games ${index % 3 === 0 ? 'first-in-row' : ''}`}   >
                            <div className='game-list'>
                                <div className="card-select">
                                <div className="play-div" onClick={() => handleEditGame(game.id)}>
                                    <img src={Block} alt="Símbolo de quebra cabeça: Selecionar jogo " />
                                    <p className="name">{game.nome_jogo}</p>
                                </div>  
                                </div>
                            </div>
                    </a>
                ))}

                </div>
                
                    


                </div>
            </div>
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



export default CreateSession;
