import React from "react";
import { useNavigate } from "react-router-dom";
import "./kid-profile.css";
import Header from '../../components/header/header'
import Back from '../../components/svgs/Back';
import KidPhoto from '../../assets/kid-image.png';
import { CiPlay1 } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";

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
                        <div className="info"><p className="bold">Responsável:</p><p className="normal">Goya</p></div>
                        <div className="info"><p className="bold">Contato:</p><p className="normal">(11) 92643-7145</p></div>
                        <div className="info"><p className="bold">Idade:</p><p className="normal">5</p></div>
                        <div className="info"><p className="bold">Diagnostico:</p><p className="normal">Diplegia</p></div>
                    </div>
                </div>
                <div className="button-options">
                    <div className="button-options-content">
                        <div>
                            <h1>Quer Iniciar Uma Sessão?</h1>
                            <div className="start-session-btn">
                                <div className="start-session-btn-label">
                                    <h1>Jogo teste</h1>
                                    <p>20/12/2023 - <span>10:20</span></p>
                                </div>
                                <button className="start-session-btn1" id="oi" onClick={handleInitSession}><FaRegEdit /></button>
                                <button className="start-session-btn2" onClick={handleInitSession}><CiPlay1 /></button>
                            </div>
                        </div>

                        <div>
                            <h1>Quer visualizar o progresso do seu paciente?</h1>
                            <button id="teste">Relatórios</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const BackButton = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/Home');
    };

    return (
        <Back onClick={handleBack} />
    );
};


export default KidsProfile;
