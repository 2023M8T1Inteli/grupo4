import React from "react";
import "./style.css";
import { GiConfirmed } from "react-icons/gi";
import { IoMdCloseCircleOutline } from "react-icons/io";

class SuccessModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true
        };
    }

    // função de esconder / mostrar modal
    handleCloseModal = () => {
        this.setState({ isOpen: false });
    };

    render() {
        const { isOpen } = this.state;

        return (
            <div className={`ContainerSuccessModal ${isOpen ? 'visible' : 'hidden'}`}>
                <div className="messageContainer">
                    <button className="CloseModalSuccess" onClick={this.handleCloseModal}>
                        <IoMdCloseCircleOutline />
                    </button>
                    <div className="SuccessMainContent">
                        <GiConfirmed className="SuccessIcon" />
                        <h1 className="SuccessLabel">Cadastro Confirmado</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default SuccessModal;
