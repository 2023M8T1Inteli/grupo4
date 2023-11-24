import React from "react";
import DropDownList from "../DropDownList/DropdownList"; // Importe a lista de DropDownItem
//styles
import "./style.css";

class BlockProgramming extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedBlock: null,
            blocks: [],
        };
    }
    

    handleCreateBlock = () => {
        // Adicione o código para criar um novo bloco conforme necessário
        const newBlock = {
            id: `custom_${Date.now()}`,
            text: "Novo Bloco", // Pode definir o texto conforme necessário
        };

        this.setState((prevState) => ({
            blocks: [...prevState.blocks, newBlock],
        }));
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
                            {/* Use a lista de DropDownItem aqui */}
                            <DropDownList />
                        </div>
                    </div>
                </div>

                <div className="BlockProgrammingSection">
                <div className="Navbar">
                    <div className="TopNavbar">
                        <p>Jogo 2</p>
                    </div>
                    <div className="BottomNavbar">
                        <button className="NavbarBtn" onClick={this.handleCreateBlock}>
                            Criar
                        </button>
                        <button className="NavbarBtn">Iniciar</button>
                    </div>
                </div>

                <div className="MainContent">
                    <div className="Code">
                        {this.state.blocks.map((block) => (
                            <div className="Block" key={block.id}>
                                {block.text}
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
