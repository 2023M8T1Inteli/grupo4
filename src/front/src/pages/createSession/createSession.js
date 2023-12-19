import React from "react";

//styles
import "./style.css";

// components
import Header from '../../components/header/header'




// exortando tela de editGame
class createSessionPage extends React.Component{
    redirectToSession = () => {
        window.location.href = "#/Session";
    }

    render(){
        return(
        <>
        <Header />
        <div className="Container">
            <div className="Content">
                <div className="ContentSections">
                    <div className="InputBox">
                    <h1>Nome do paciente</h1>
                    <input></input>
                    </div>
                </div>
                <div className="ContentSection2">
                    <div className="InputBox">
                    <h1>Nome do paciente</h1>
                    <input></input>
                    </div>
                    <div className="InputBox">
                    <h1>Nome do paciente</h1>
                    <input></input>
                    </div>
                </div>
                <div className="ContentSections">
                    <button onClick={this.redirectToSession}>AGENDAR SESSÃO</button>
                </div>
            </div>
        </div>
        </>
    );
    }
}

export default createSessionPage