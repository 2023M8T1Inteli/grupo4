import React from "react";

//styles
import "./style.css";

// exortando dela de Cart

class BlockProgramming extends React.Component {

    render (){
        return(
        <div className="Container">
            <div className="Title">
                <p className="TitleText">Jogo 2</p>
            </div>    
            <div className="NavBar">
                <button className="CreateBtn">Testar Jogo</button>
                <button className="CreateBtn">Criar</button>
            </div>

            <div className="Content">
                
            </div>       
        </div>
        );
    }
}

export default BlockProgramming;