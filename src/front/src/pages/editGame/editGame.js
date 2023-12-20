import React from "react";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

//styles
import "./style.css";

// components
import BlockProgramming from "../../components/BlockProgramming/BlockProgramming";
import Header from '../../components/header/header'



// exortando tela de editGame
function EditGame() {

    const [game, setGame] = useState('');
    const { id } = useParams(); // Obtém o id da rota



    useEffect(() => {
        async function fetchGame() {
          try {
            const response = await fetch(`http://localhost:8080/jogos/${id}`);
            if (response.ok) {  
              const data = await response.json();
              console.log(data)
              setGame(data); // Define os produtos no estado
            } else {
              console.error('Erro ao buscar produtos:', response.statusText);
            }
          } catch (error) {
            console.error('Erro na requisição:', error);
            
          }
        }
    
        fetchGame();
      }, []);

        return(
        <>
        <Header />
        <div className="Container">      
          <BlockProgramming gameData={game} />
        </div>
        </>
    );
    }


export default EditGame