import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import "./kid-profile.css";
import Header from '../../components/header/header'
import Back from '../../components/svgs/Back';
import KidPhoto from '../../assets/kid-image.png';
import { CiPlay1 } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";

function KidsProfile() {
    // Função de navegação para transição de páginas
    const navigate = useNavigate();
    // Estado para armazenar as informações da criança
    const [child, setChild] = useState([]);
    // Obtém o id da rota para buscar as informações específicas da criança
    const { id } = useParams(); 

     // Função para navegar para a tela de sessão quando o botão é clicado
    const handleInitSession = () => {
        navigate('/Session');
    };

    // Efeito useEffect para buscar as informações da criança ao montar a página
    useEffect(() => {
        async function fetchChild() {
          try {
            const response = await fetch(`http://localhost:8080/pacientes/${id}`);
            if (response.ok) {  
              const data = await response.json();
              console.log(data)
              setChild(data); // Define as informações da criança no estado
            } else {
              console.error('Erro ao buscar produtos:', response.statusText);
            }
          } catch (error) {
            console.error('Erro na requisição:', error);
            
          }
        }
    
        fetchChild();
      }, []);

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
                        <h1>{child.nome_completo}</h1>
                    </div>
                    <div className="specif-info">
                        <div className="info"><p className="bold">Responsável:</p><p className="normal">{child.nome_responsavel}</p></div>
                        <div className="info"><p className="bold">Idade:</p><p className="normal">{child.idade}</p></div>
                        <div className="info"><p className="bold">Diagnóstico:</p><p className="normal">{child.ficha_medica}</p></div>
                        <div className="info"><p className="bold">Contato:</p><p className="normal">{child.contato_responsavel}</p></div>    
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
                            <div className="link">
                                <a href="#/createSession">Agendar uma nova sessão</a>
                            </div>
                        </div>

                        <div>
                            <h1>Quer visualizar o progresso do seu paciente?</h1>
                            <button className="progress" id="teste">Relatórios</button>
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
