import React from 'react';
import { useEffect, useState } from 'react';
import "./ChildrenList.css";
import Perfil from '../../assets/Perfil.png';
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

        <div className='children' onClick={handleKidProfile}>
          <div className='children-info-list'>
            <img src={Perfil} className='img-paciente'/>
            <p className='text-comp bold'>Paciente 1</p>
          </div>
          <div className='pointer'>
            <p className='init-session text-comp bold pointer'><label className='simple-text pointer'>Próxima sessão: </label> Hoje as 10h</p>
          </div>  
        </div>
        <div className='children' onClick={handleKidProfile}>
          <div className='children-info-list'>
            <img src={Perfil} className='img-paciente'/>
            <p className='text-comp bold'>Paciente 1</p>
          </div>
          <div>
            <p className='init-session text-comp bold'><label className='simple-text'>Próxima sessão: </label> Hoje as 10h</p>
          </div>  
        </div>
        <div className='children' onClick={handleKidProfile}>
          <div className='children-info-list'>
            <img src={Perfil} className='img-paciente'/>
            <p className='text-comp bold'>Paciente 1</p>
          </div>
          <div>
            <p className='init-session text-comp bold'><label className='simple-text'>Próxima sessão: </label> Hoje as 10h</p>
          </div>  
        </div>
        {/* <div className='children2'>
            <img src={Perfil} className='img-paciente'/>
            <h3 onClick={handleKidProfile}>Paciente 2</h3>
            <button onClick={handleInitSession}>Iniciar sessão</button>
        </div>
        <div className='children3'>
            <img src={Perfil} className='img-paciente'/>
            <h3 onClick={handleKidProfile}>Paciente 3</h3>
            <button onClick={handleInitSession}>Iniciar sessão</button>
        </div>
        <div className='children4'>
            <img src={Perfil} className='img-paciente'/>
            <h3 onClick={handleKidProfile}>Paciente 4</h3>
            <button onClick={handleInitSession}>Iniciar sessão</button>
        </div> */}
      </div>
    );
  }
  
  export default ChildrenList;
  