import React, { useState, useEffect } from 'react';
import './SearchAndAdd.css';
import SearchBtn from './img/searchBtn.png';
import Add from './img/addIcon.png';
import { useNavigate } from 'react-router-dom'; // Importe o useHistory para fazer o redirecionamento


const SearchAndAdd = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showSuccessFeedback, setShowSuccessFeedback] = useState(false);
  const [nome_completo, setName] = useState('');
  const [ficha_medica, setDiagnosis] = useState('');
  const [data_de_nascimento, setAge] = useState('');
  const [nome_responsavel, setResponsavel] = useState('');
  const [contato_responsavel, setContato] = useState('');
  const navigate = useNavigate();


  // Manipula a mudança no input de pesquisa
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Abre o modal de adição de paciente
  const openModal = () => {
    setShowModal(true);
  };

  // Fecha o modal de adição de paciente
  const closeModal = () => {
    setShowModal(false);
  };

  const handleButtonClick = async () => {
    if (error !== '') {
      return;
    }

    try {
      // Realiza uma solicitação POST para cadastrar um novo paciente
      const response = await fetch(`http://localhost:8080/pacientes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome_completo: nome_completo,
          data_de_nascimento: data_de_nascimento,
          nome_responsavel: nome_responsavel,
          contato_responsavel: contato_responsavel,
          ficha_medica: ficha_medica,
        }),
      });

      if (response.ok) {
        window.alert('Paciente cadastrado com sucesso!'); // Usando window.alert para exibir um alerta nativo do navegador
        closeModal()
        window.location.reload();
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setError('An error occurred during registration. Please try again later.');
    }
  };

  // Efeito useEffect para esconder o feedback de sucesso após alguns segundos
  useEffect(() => {
    if (showSuccessFeedback) {
      const timeoutId = setTimeout(() => {
        setShowSuccessFeedback(false);
      }, 3000); // Oculta o feedback após 3 segundos, ajuste conforme necessário

      return () => clearTimeout(timeoutId);
    }
  }, [showSuccessFeedback]);

  return (
    <div className="search-add">
      <div className="search">
        <input className="input-search" />
        <button className="search-button">
          <img src={SearchBtn} alt="Botão de procurar" className="search-icon" />
        </button>
      </div>
      <div className="add">
        <button onClick={openModal} className="add-button">
          <img src={Add} alt="Botão de adicionar paciente" className="addBtn" />
        </button>
      </div>
      {showModal && (
        <div>
          <div className="overlay" onClick={closeModal}></div>
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <div className="input-cadastro-paciente">
                <div className="name">
                  <p>Nome</p>
                  <input value={nome_completo} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="responsavel">
                  <p>Nome do Responsável</p>
                  <input value={nome_responsavel} onChange={(e) => setResponsavel(e.target.value)} />
                </div>
                <div className="diagnostico">
                  <p>Diagnóstico</p>
                  <input value={ficha_medica} onChange={(e) => setDiagnosis(e.target.value)} />
                </div>
                <div className="idade">
                  <p>Data de Nascimento:</p>
                  <input value={data_de_nascimento} onChange={(e) => setAge(e.target.value)} />
                </div>
                <div className="contato">
                  <p>Contato:</p>
                  <input value={contato_responsavel} onChange={(e) => setContato(e.target.value)} />
                </div>
                <div className="cadastrar-paciente" onClick={handleButtonClick}>
                  <button className="btn-cadastrar-paciente">Cadastrar paciente</button>
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
