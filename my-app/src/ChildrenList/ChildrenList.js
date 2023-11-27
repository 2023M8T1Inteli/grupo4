import React from 'react';
import "./ChildrenList.css";
import Perfil from './img/Perfil.png';

function ChildrenList() {
    return (
      <div className='children-list'>
        <div className='children1'>
            <img src={Perfil} className='img-paciente'/>
            <h3>Paciente 1</h3>
            <button className='init-session'>Iniciar sessão</button>
        </div>
        <div className='children2'>
            <img src={Perfil} className='img-paciente'/>
            <h3>Paciente 2</h3>
            <button>Iniciar sessão</button>
        </div>
        <div className='children3'>
            <img src={Perfil} className='img-paciente'/>
            <h3>Paciente 3</h3>
            <button>Iniciar sessão</button>
        </div>
        <div className='children4'>
            <img src={Perfil} className='img-paciente'/>
            <h3>Paciente 4</h3>
            <button>Iniciar sessão</button>
        </div>
        
      </div>
    );
  }
  
  export default ChildrenList;
  