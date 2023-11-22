import React from 'react';
import Header from '../../components/header/header'
import Back from '../../components/svgs/Back';
import CreateGame from '../../components/create-game/create-game';
import SelectGame from '../../components/select-game/select';
import './Create-session.css'

class CreateSession extends React.Component{
    render(){
        return(
            <div className='main'>
                <Header />
                <div className='back-button'>
                    <Back />
                </div>
                <div className='setting-section'>
                    <h1>Adicione um nome para sessão:</h1>
                    <input placeholder='Sessão 1'></input>
                </div>
                <div className='choose-game'>
                    <h1>Escolha um jogo:</h1>
                    <div className='game-list'>
                        <CreateGame />
                        <SelectGame buttonText="Jogo 1"/>
                        <SelectGame buttonText="Jogo 2"/>
                    </div>
                </div>
            </div> 
            
        )
    }
}

export default CreateSession