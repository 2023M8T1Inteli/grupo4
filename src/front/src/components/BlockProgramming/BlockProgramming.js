import React from "react";
import DropDownList from "../DropDownList/DropdownList";
import "./style.css";
import { GoArrowLeft } from "react-icons/go";

class BlockProgramming extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedBlock: null,
            blocks: [],
            code: "", // Adicione a variável code ao estado
        };
    }

    handleCreateBlock = (text) => {
        const blockText = text[1]; 
    
        this.setState((prevState) => ({
            code: prevState.code + blockText,
            blocks: [
                ...prevState.blocks,
                {
                    id: `custom_${Date.now()}`,
                    text: text, // Mantenha o texto completo do bloco
                },
            ],
        }));
    };


    handleCode = () => {
        console.log(this.state.code);
        window.handAPI.sendCode(this.state.code);
    };

    render() {
        return (
            <div className="Container">
                <div className="IconContainer">
                    <GoArrowLeft className="Icon"/>
                </div>
                <div className="ContentContainer">
                    <div className="Sidebar">
                        <div className="TitleSidebar">
                            <p className="TextSidebar">Edição</p>
                        </div>
                        <div className="Content">
                            <div className="ContentRight">
                                <DropDownList onCreateBlock={this.handleCreateBlock} />
                            </div>
                        </div>
                    </div>

                    <div className="BlockProgrammingSection">
                        <div className="Navbar">
                            <div className="BottomNavbar">
                                <h1>Edite seu jogo: </h1>
                                <div className="BottomNavbarBtns">
                                    <button className="NavbarBtn" onClick={this.handleCode}>
                                        Criar
                                    </button>
                                    <button className="NavbarBtn">Iniciar</button>
                                </div>
                            </div>
                        </div>

                        <div className="MainContent">
                            <div className="Code">
                                {this.state.blocks.map((block) => (
                                    <div className="BlockInserted" key={block.id}>
                                        {block.text[0]}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlockProgramming;
