import React from "react";
import "./style.css";
import { MdEdit, MdOutlineCancel } from "react-icons/md";

class EditGameName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            inputValue: this.props.nome_jogo || "", // Inicializa com o nome do jogo, se disponível
            codeTypeText: this.props.nome_jogo || "",
            isCancelIcon: false
        };
        console.log(this.props.nome_jogo);
    }

    // Manipula o clique no ícone de editar/cancelar
    handleIconBtnClick = () => {
        this.setState((prevState) => ({
            isEditing: !prevState.isEditing,
            isCancelIcon: !prevState.isEditing
        }));
    };

    // Manipula a mudança no input de edição
    handleInputChange = (e) => {
        this.setState({ inputValue: e.target.value });
    };

    // Manipula o clique no botão de salvar
    handleSaveClick = () => {
        this.setState((prevState) => ({
            isEditing: false,
            codeTypeText: prevState.inputValue,
            isCancelIcon: false
        }));
    };

    render() {
        const { isEditing, inputValue, codeTypeText, isCancelIcon } = this.state;

        return (
            <>
                <div className="container">
                    <div className={`codeName ${isEditing ? "editing" : ""}`}>
                        {isEditing ? (
                            <div className="EditName">
                                <input
                                    value={inputValue}
                                    onChange={this.handleInputChange}
                                />
                                <button onClick={this.handleSaveClick}>
                                        Salvar
                                </button>
                            </div>
                        ) : (
                            <h1 className="CodeTypeText">{codeTypeText}</h1>
                        )}
                    </div>
                    <button className="IconBtn" onClick={this.handleIconBtnClick}>
                        {isCancelIcon ? <MdOutlineCancel className="IconClose" /> : <MdEdit className="Icon" />}
                    </button>
                </div>
            </>
        );
    }
}

export default EditGameName;
