import React from "react";
import DropDownItem from "./DropDownItem/DropDownItem";
import jsonData from "./Itens.json";


class DropDownList extends React.Component {
    render() {
        return (
            <div>
                {Object.entries(jsonData.blocks).map(([blockKey, blockValues]) => (
                    <DropDownItem key={blockKey}>
                        <div className="HeaderItem">
                            <p className="HeaderItemText">{blockValues[0]}</p>
                        </div>
                        <div className="showItem">
                            <div className="ContentItem">
                                {blockValues.slice(1).map((text, index) => (
                                    <div className="Block" key={index}>
                                        <p className="TextBlock">{text}</p>
                                    </div>
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
