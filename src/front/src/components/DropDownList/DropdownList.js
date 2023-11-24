import React from "react";
import DropDownItem from "./DropDownItem/DropDownItem";
import jsonData from "./Itens.json";


class DropDownList extends React.Component {

    handleBlockClick = (blockKey) => {
        // Chame a função fornecida por props para informar ao pai qual bloco foi clicado
        this.props.onBlockClick(blockKey);
    };

    render() {
        return (
            <div>
                
                {Object.entries(jsonData.blocks).map(([blockKey, blockValues]) => (
                    <DropDownItem key={blockKey} onClick={() => this.handleBlockClick(blockKey)}>
                        <div className="HeaderItem">
                            <p className="HeaderItemText">{blockValues[0]}</p>
                        </div>
                        <div className="showItem">
                            <div className="ContentItem">
                                {blockValues.slice(1).map((text, index) => (
                                    <button className="Block" key={index}>
                                        <p className="TextBlock">{text}</p>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </DropDownItem>
                ))}
            </div>
        );
    }
}

export default DropDownList;
