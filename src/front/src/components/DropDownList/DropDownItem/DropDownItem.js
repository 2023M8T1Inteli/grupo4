import React from "react";
import "./style.css";

class DropDownItem extends React.Component {
    render() {
        const { children } = this.props; // Adicione esta linha para acessar as props

        return (
            <>
            
                <div className="ContainerItem">
                    {children} {/* Renderize as props aqui */}
                </div>
            
            </>
        );
    }
}

export default DropDownItem;
