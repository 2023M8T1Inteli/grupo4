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
                                <div className="BottomNavbarBtns">
                                    <button className="NavbarBtn" onClick={this.handleCode}>
                                        Criar
                                    </button>
                                    <button className="NavbarBtn">Iniciar</button>
                                </div>
                            </div>
                        </div>

                        <div className="MainContent">
                            <div className="CodeType">
                                <h1 className="CodeTypeText">Jogo de Advinhação</h1>

                                <div className="Code">
                                    {this.state.blocks.map((block) => (
                                        <div className="CreatedBlock">
                                        <div className={`${block.text[2]}Created`} key={block.id}>
                                            <p>{block.text[0]}</p>
                                            <input type="number" id="tentacles" name="tentacles" min="1" max="16" />
                                        </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default BlockProgramming;
