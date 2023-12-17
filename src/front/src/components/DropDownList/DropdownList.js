import React from "react";
import DropDownItem from "./DropDownItem/DropDownItem";
import jsonData from "./Itens.json";

class DropDownList extends React.Component {

    handleBlockClick = (blockKey) => {
        // Chame a função fornecida por props para criar um bloco no pai
        this.props.onCreateBlock(blockKey);
    };

    render() {
        return (
            <div>
                {Object.entries(jsonData.blocks).map(([blockKey, blockValues]) => (
                    <DropDownItem key={blockKey} onClick={() => this.handleBlockClick(blockKey)}>
                        <div className="headerItem">
                            <p className="headerItemText">{blockKey}</p>
                        </div>
                        <div className="showItem">
                            <div className="ContentItem">
                                {blockValues.map((text, index) => (
                                    <button
                                        className={`InputBlock ${text[2]}`}
                                        key={index}
                                        
                                        onClick={() => this.handleBlockClick(text)}
                                    >
                                        <p className="TextBlock">{text[0]}</p>
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
