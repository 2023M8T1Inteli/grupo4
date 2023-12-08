import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header'
import Back from '../../components/svgs/Back';
import CreateGame from '../../components/CreateGame/create-game';
import SelectGame from '../../components/SelectGame/select';
import './Create-session.css';

class CreateSession extends React.Component {
    render() {
        return (
            <div className='main'>
                <Header />
                <div className='back-button'>
                    <BackButton />
                </div>
                <div className='setting-section'>
                    <h1>Adicione um nome para sessão:</h1>
                    <input placeholder='Sessão 1'></input>
                </div>
                <div className='choose-game'>
                    <h1>Escolha um jogo:</h1>
                    <div className='game-list'>
                        <CreateGame />
                        <SelectGame buttonText="Jogo 1" />
                        <SelectGame buttonText="Jogo 2" />
                    </div>
                </div>
            </div>
        );
    }
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

export default CreateSession;
