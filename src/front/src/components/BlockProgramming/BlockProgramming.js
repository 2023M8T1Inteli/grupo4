import React from "react";
import DropDownList from "../DropDownList/DropdownList"; // Importe a lista de DropDownItem
//styles
import "./style.css";

class BlockProgramming extends React.Component {
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
                            <button className="NavbarBtn">Criar</button>
                            <button className="NavbarBtn">Iniciar</button>
                        </div>
                    </div>

                    <div className="MainContent"></div>
                </div>
            </div>
        );
    }
}

export default BlockProgramming;
