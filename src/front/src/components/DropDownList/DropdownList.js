import React from "react";
import DropDownItem from "./DropDownItem/DropDownItem";
import jsonData from "./Itens.json";

class DropDownList extends React.Component {

    handleBlockClick = (blockKey) => {
        const blockValues = jsonData.blocks[blockKey].slice(1);

        // Chame a função fornecida por props para criar um bloco no pai
        this.props.onCreateBlock(blockValues);
    };

    render() {
        return (
            <div>
                {Object.entries(jsonData.blocks).map(([blockKey, blockValues]) => (
                    <DropDownItem key={blockKey} onClick={() => this.handleBlockClick(blockKey)}>
                        <div className="headerItem">
                            <p className="headerItemText">{blockValues[0]}</p>
                        </div>
                        <div className="showItem">
                            <div className="ContentItem">
                                {blockValues.slice(1).map((text, index) => (
                                    <button
                                        className="Block"
                                        key={index}
                                        onClick={() => this.handleBlockClick(blockKey)}
                                    >
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