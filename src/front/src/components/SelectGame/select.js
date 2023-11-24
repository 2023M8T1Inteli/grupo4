import React from "react";
import Block from "../../assets/Block.png";
import { useNavigate } from 'react-router-dom';
import "./select.css";

function SelectGame(props) {

        const { buttonText } = props;

        const navigate = useNavigate();

        const handleEditGame = () => {
            // Navigate to the "/Session" screen when the button is clicked
            navigate('/EditGame');
        };

        return (
            <div className="card-select" >
                <div className="button-div">
                    <button onClick={handleEditGame}>Editar</button>
                </div>
                <div className="play-div">
                    <img src={Block} alt="Símbolo de quebra cabeça: Selecionar jogo " />
                    <p>{buttonText}</p>
                </div>  
            </div>
        );

}

export default SelectGame;
