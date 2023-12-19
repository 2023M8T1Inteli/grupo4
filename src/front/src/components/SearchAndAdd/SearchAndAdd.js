import React, { useState } from 'react';
import "./SearchAndAdd.css";
import SearchBtn from './img/searchBtn.png';
import Add from './img/addIcon.png';
// Importe aqui o componente do modal, ou crie um modal dentro deste arquivo

const SearchAndAdd = () => {
  const [inputValue, setInputValue] = useState('');
  const [showModal, setShowModal] = useState(false); // Estado para controlar a exibição do modal
  const [nome_completo, setName] = useState('');
  const [ficha_medica, setDiagnosis] = useState('');
  const [data_de_nascimento, setAge] = useState('');
  const [nome_responsavel, setResponsavel] = useState('');

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
        <input className='input-search'></input>
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
                  <input value={nome_completo} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='diagnostico'>
                  <p>Diagnostico</p>
                  <input value={ficha_medica} onChange={(e) => setDiagnosis(e.target.value)} />
                </div>
                <div className='responsavel'>
                  <p>Nome do Responsável</p>
                  <input value={nome_responsavel} onChange={(e) => setDiagnosis(e.target.value)} />
                </div>
                <div className='idade'>
                  <p>Data de Nascimento</p>
                  <input value={data_de_nascimento} onChange={(e) => setAge(e.target.value)} />
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