import React, { useState } from 'react';
import "./SearchAndAdd.css";
import SearchBtn from './img/searchBtn.png';
import Add from './img/addIcon.png';
// Importe aqui o componente do modal, ou crie um modal dentro deste arquivo

const SearchAndAdd = () => {
  const [inputValue, setInputValue] = useState('');
  const [showModal, setShowModal] = useState(false); // Estado para controlar a exibição do modal

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    // Faça algo com o valor do input quando o botão for clicado
    console.log('Valor do input:', inputValue);
    // Por enquanto, apenas limpando o campo de entrada após o clique do botão
    setInputValue('');
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="search-add">
      <div className='search'>
        <input className='input-search' placeholder='Procurar'></input>
        <button className='search-button'><img src={SearchBtn} alt="Botão de procurar" className='search-icon'/></button>
      </div>
      <div className='add'>
        <button onClick={openModal} className='add-button'><img src={Add} alt='Botão de adicionar paciente' className='addBtn'/></button>
      </div>
      {showModal && (
        <div>
          {/* Sobreposição escura */}
          <div className="overlay" onClick={closeModal}></div>
          {/* Modal */}
          <div className="modal">
            {/* Conteúdo do modal */}
            <div className="modal-content">
              <span className="close" onClick={closeModal}> 
                &times; 
              </span>
              <div className='input-cadastro-paciente'>
                <div className='name'>
                  <p>Nome</p>
                  <input></input>
                </div>
                <div className='diagnostico'>
                  <p>Diagnostico</p>
                  <input></input>
                </div>
                <div className='idade'>
                  <p>Idade</p>
                  <input></input>
                </div>
                <div className='cidade'>
                  <p>Cidade</p>
                  <input></input>
                </div>
                <div className='cadastrar-paciente'>
                  <button className='btn-cadastrar-paciente'>Cadastrar paciente</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchAndAdd;