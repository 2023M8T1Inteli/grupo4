import React from "react";
import { useNavigate } from "react-router-dom";
import "./kid-profile.css";
import Header from '../../components/header/header'
import Back from '../../components/svgs/Back';
import KidPhoto from '../../assets/kid-image.png';

function KidsProfile() {
    const navigate = useNavigate();

    const handleInitSession = () => {
        // Navigate to the "/Session" screen when the button is clicked
        navigate('/Session');
    };

    return (
        <div className="main-kid-profile">
            <Header />
            <div className='back-button'>
                <BackButton />
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
                    <button id="oi" onClick={handleInitSession}>Iniciar sessão</button>

                    <button id="teste">Relatórios</button>
                </div>
            </div>
        </div>
    );
}

const BackButton = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        // Navigate to the "/" page when the back button is pressed
        navigate('/');
    };

    return (
        <Back onClick={handleBack} />
    );
};


export default KidsProfile;
