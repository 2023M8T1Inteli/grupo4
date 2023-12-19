import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import "./kid-profile.css";
import Header from '../../components/header/header'
import Back from '../../components/svgs/Back';
import KidPhoto from '../../assets/kid-image.png';

function KidsProfile() {
    const navigate = useNavigate();
    const [children, setChildren] = useState([]);
    const { id } = useParams(); // Obtém o id da rota


    const handleInitSession = () => {
        // Navigate to the "/Session" screen when the button is clicked
        navigate('/Session');
    };

    useEffect(() => {
        async function fetchChildren() {
          try {
            const response = await fetch(`http://localhost:8080/pacientes/${id}`);
            if (response.ok) {  
              const data = await response.json();
              console.log(data)
              setChildren(data); // Define os produtos no estado
            } else {
              console.error('Erro ao buscar produtos:', response.statusText);
            }
          } catch (error) {
            console.error('Erro na requisição:', error);
            
          }
        }
    
        fetchChildren();
      }, []);

    return (
        <div className="main-kid-profile">
            {children.map((child) => (
            <a key={child.id}>
                <Header />
            <div className='back-button'>
                <BackButton />
            </div>
            <div className="content">
                <div className="informations">
                    <div className="general-info">
                        <img src={KidPhoto} alt="Imagem de perfil na barra de navegação: Informações de perfil" />
                        <h1>{child.name}</h1>
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
          
            </a>
            ))}
            
        </div>
    );
}

const BackButton = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        // Navigate to the "/" page when the back button is pressed
        navigate('/Home');
    };

    return (
        <Back onClick={handleBack} />
    );
};


export default KidsProfile;
