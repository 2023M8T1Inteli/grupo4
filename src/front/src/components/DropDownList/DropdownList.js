import React from "react";
import DropDownItem from "./DropDownItem/DropDownItem"; // Importe o componente DropDownItem
import jsonData from "./Itens.json"; // Substitua pelo caminho real do seu arquivo JSON

class DropDownList extends React.Component {
    render() {
        const { blocks, conditionals } = jsonData;

        return (
            <div>
                {Object.keys(blocks).map((blockKey) => (
                    <DropDownItem key={blockKey}>
                        <div className="HeaderItem">
                            <p className="HeaderItemText">{blocks[blockKey]}</p>
                        </div>
                        <div className="ContentItem">
                            {Array.from({ length: 8 }, (_, index) => (
                                <div className="Block" key={index}></div>
                            ))}
                        </div>
                    </DropDownItem>
                ))}
            </div>
        );
    }
}

export default DropDownList;