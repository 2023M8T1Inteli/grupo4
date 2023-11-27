import React from "react";
import DropDownList from "../DropDownList/DropdownList";
import "./style.css";

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
        const blockText = text.slice(1); // Remove o título da seção (índice 0)
    
        this.setState((prevState) => ({
            code: prevState.code + blockText + "\n",
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
    };

    render() {
        return (
            <div className="Container">
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
                        <div className="TopNavbar">
                            <p>Jogo 2</p>
                        </div>
                        <div className="BottomNavbar">
                            <button className="NavbarBtn" onClick={this.handleCode}>
                                Criar
                            </button>
                            <button className="NavbarBtn">Iniciar</button>
                        </div>
                    </div>

                    <div className="MainContent">
                        <div className="Code">
                            {this.state.blocks.map((block) => (
                                <div className="BlockInserted" key={block.id}>
                                    {block.text.slice(1)}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlockProgramming;