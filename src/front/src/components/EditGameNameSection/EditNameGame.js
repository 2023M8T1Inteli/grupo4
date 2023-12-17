import React from "react";
import "./style.css";
import { MdEdit } from "react-icons/md";

class EditGameName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            inputValue: "",
            codeTypeText: "Jogo de Adivinhação"
        };
    }

    handleIconBtnClick = () => {
        this.setState((prevState) => ({
            isEditing: !prevState.isEditing
        }));
    };

    handleInputChange = (e) => {
        this.setState({ inputValue: e.target.value });
    };

    handleSaveClick = () => {
        this.setState((prevState) => ({
            isEditing: false,
            codeTypeText: prevState.inputValue
        }));
    };

    render() {
        const { isEditing, inputValue, codeTypeText } = this.state;

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
                                <button onClick={this.handleSaveClick}>Salvar</button>
                            </div>
                        ) : (
                            <h1 className="CodeTypeText">{codeTypeText}</h1>
                        )}
                    </div>
                    <button className="IconBtn" onClick={this.handleIconBtnClick}>
                        <MdEdit className="Icon" />
                    </button>
                </div>
            </>
        );
    }
}

export default EditGameName;
