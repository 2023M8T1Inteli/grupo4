import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import DropDownItem from "./DropDownItem/DropDownItem";
import jsonData from "./Itens.json";

const DraggableBlock = ({ text, onDrop }) => {
  const ref = useRef(null);

  const [, drag] = useDrag({
    type: "BLOCK",
    item: { text },
  });

  const [, drop] = useDrop({
    accept: "BLOCK",
    drop: (item) => onDrop(item.text),
  });

  drag(drop(ref));

  return (
    <button ref={ref} className="Block">
      <p className="TextBlock">{text}</p>
    </button>
  );
};

class DropDownList extends React.Component {
  handleBlockClick = (blockKey) => {
    this.props.onCreateBlock(blockKey);
  };

  handleBlockDrop = (blockKey, droppedText) => {
    // Adicione o código para tratar a ação de drop conforme necessário
    console.log(`Dropped ${droppedText} into ${blockKey}`);
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
                  <DraggableBlock
                    key={index}
                    text={text[0]}
                    onDrop={(droppedText) => this.handleBlockDrop(blockKey, droppedText)}
                  />
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
