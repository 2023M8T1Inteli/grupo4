import React from "react";

//styles
import "./style.css";

// components
import BlockProgramming from "../../components/BlockProgramming/BlockProgramming";
import Header from '../../components/Header/header'




// exortando tela de editGame
class EditGame extends React.Component{
    render(){
        return(
        <>
        <Header />
        <div className="Container">
            
            <BlockProgramming />
        </div>
        </>
    );
    }
}

export default EditGame