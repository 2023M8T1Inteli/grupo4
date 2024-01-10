import React from "react";
import DropDownItem from "./DropDownItem/DropDownItem";
import jsonData from "./Itens.json";

class DropDownList extends React.Component {

    // Manipula o clique em um bloco, chamando a função fornecida por props
    handleBlockClick = (blockKey) => {
        this.props.onCreateBlock(blockKey);
    };

    render() {
        return (
            <div>
                {/*Criar seção de blocos com base no json data*/}
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
                                        
                                        onClick={() => {
                                            const blockType = text[0] === "Imagem" ? "imagem" : text;
                                            this.handleBlockClick(text)
                                        }}
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
