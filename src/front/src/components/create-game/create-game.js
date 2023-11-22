import React from "react";
import AddIcon from "../svgs/Add";
import "./create-game.css"

class CreateGame extends React.Component{
    render(){
        return(
            <div className="card-create">
                <AddIcon />
                <p>Criar jogo</p>
            </div>
        )
    }
}

export default CreateGame