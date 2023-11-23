import React from "react";

//styles
import "./style.css";

// components
import EditGameSidebar from "../../components/EditGameSidebar/editGameSidebar";
import BlockProgramming from "../../components/BlockProgramming/BlockProgramming";




// exortando tela de editGame
class EditGame extends React.Component{
    render(){
        return(
        <>
        <div className="Container">
            <BlockProgramming />
        </div>
        </>
    );
    }
}

export default EditGame