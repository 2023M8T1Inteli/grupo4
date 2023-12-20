import React from 'react';
import { useEffect, useState } from 'react';
import "./ChildrenList.css";
import Perfil from '../../assets/Perfil.png';
import { useNavigate } from 'react-router-dom';

function ChildrenList() { 

  // Estado que armazena a lista de crianças
  const [children, setChildren] = useState([]);
  // Estado que controla a visibilidade do modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Hook de navegação do React Router
  const navigate = useNavigate();

    // Função para navegar para a tela de sessão
    const handleInitSession = () => {
        navigate('/Session');
    };

    // Função para navegar para o perfil de uma criança específica
    const handleKidProfile = (childId) => {
      navigate(`/Profile/${childId}`);
  };

  useEffect(() => {
    fetchChildrens();
  }, []);

  // Função assíncrona para buscar as crianças da API
  async function fetchChildrens() {
    try {
      const response = await fetch(`http://localhost:8080/pacientes`);
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

  // Função para encontrar a data da próxima sessão para uma criança
  const findNextSessionDate = (sessions) => {
    const upcomingSessions = sessions.filter(session => new Date(session.data) > new Date());
    if (upcomingSessions.length > 0) {
      const nextSession = upcomingSessions.reduce((min, session) =>
        new Date(session.data) < new Date(min.data) ? session : min
      );
      return nextSession.data;
    }
    return "Nenhuma sessão agendada";
  };
  
    return (
      <div className='children-list'>
        {children.map((child) => (  
          <a key={child.id} onClick={() => handleKidProfile(child.id)}>

            <div className='children'>
              <div className='children-info-list'>
                <img src={Perfil} className='img-paciente'/>
                <p className='text-comp bold'>{child.nome_completo}</p>
              </div>
              <div className='pointer'>
                <p className='init-session text-comp bold pointer'><label className='simple-text pointer'>Próxima sessão: </label>  {findNextSessionDate(child.sessoes)}</p>
              </div>  
            </div>
          </a>
      ))}
      </div>
    );
  }
  
  export default ChildrenList;
  