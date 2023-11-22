import React from "react";
import "./kid-profile.css";
import Header from '../../components/header/header'
import Back from '../../components/svgs/Back';
import KidPhoto from '../../assets/kid-image.png';

class KidsProfile extends React.Component{
    render(){
        return(
            <div className="main-kid-profile">
                <Header />
                <div className='back-button'>
                    <Back />
                </div>
                <div className="content">
                    <div className="informations">
                        <div className="general-info">
                            <img src={KidPhoto} alt="Imagem de perfil na barra de navegação: Informações de perfil" />
                            <h1>Maria Luíza</h1>
                        </div>
                        <div className="specif-info">
                            <div className="info"><p className="bold">Cidade:</p><p className="normal">São Paulo</p></div>
                            <div className="info"><p className="bold">Idade:</p><p className="normal">5</p></div>
                            <div className="info"><p className="bold">Diagnóstico:</p><p className="normal">Diplegia</p></div>
                        </div>
                    </div>
                    <div className="button-options">
                        <button>Iniciar sessão</button>
                        <button>Relatórios</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default KidsProfile
