import React from "react";
import Block from "../../assets/Block.png";
import "./select.css";

class SelectGame extends React.Component {
    render() {
        const { buttonText } = this.props;

        return (
            <div className="card-select" >
                <div className="button-div">
                    <button>Editar</button>
                </div>
                <div className="play-div">
                    <img src={Block} alt="Símbolo de quebra cabeça: Selecionar jogo " />
                    <p>{buttonText}</p>
                </div>  
            </div>
        );
    }
}

export default SelectGame;
