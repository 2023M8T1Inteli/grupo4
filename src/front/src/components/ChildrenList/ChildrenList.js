import React from 'react';
import { useEffect, useState } from 'react';
import "./ChildrenList.css";
import Perfil from '../../assets/perfil.png';
import { useNavigate } from 'react-router-dom';

function ChildrenList() {

  const [children, setChildren] = useState([]);

  const navigate = useNavigate();

    const handleInitSession = () => {
        // Navigate to the "/Session" screen when the button is clicked
        navigate('/Session');
    };

    const handleKidProfile = (childId) => {
      navigate(`/Profile/${childId}`);
  };

  useEffect(() => {
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

    fetchChildrens();
  }, []);
  
    return (
      <div className='children-list'>
        {children.map((child) => (
          <a key={child.id} onClick={() => handleKidProfile(child.id)}>
            {/* <div className='children'>
              <img src={Perfil} className='img-paciente'/>
              <h3>{child.nome_completo}</h3>
              <button className='init-session' onClick={handleInitSession}>Iniciar sessão</button>
            </div> */}

            <div className='children'>
              <div className='children-info-list'>
                <img src={Perfil} className='img-paciente'/>
                <p className='text-comp bold'>{child.nome_completo}</p>
              </div>
              <div className='pointer'>
                <p className='init-session text-comp bold pointer'><label className='simple-text pointer'>Próxima sessão: </label> Hoje as 10h</p>
              </div>  
            </div>
          </a>
      ))}
        
      </div>
    );
  }
  
  export default ChildrenList;
  