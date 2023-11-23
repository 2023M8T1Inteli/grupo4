import React from "react";

//styles
import "./style.css";

// exortando dela de Cart

class BlockProgramming extends React.Component {

    render (){
        return(
        <><div className="Container">
                <div className="Sidebar">
                    <div className="TitleSidebar">
                        <p className="TextSidebar">Edição</p>
                    </div>
                    <div className="Content">
                        <div className="ContentLeft"></div>
                        <div className="ContentRight"></div>
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


                    <div className="MainContent">

                    </div>
                </div>
            </div></>
        );
    }
}

export default BlockProgramming;