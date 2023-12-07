import React from "react";
import DropDownItem from "./DropDownItem/DropDownItem";
import jsonData from "./Itens.json";

import ReactDOM from 'react-dom';
import Draggable, { DraggableCore } from 'react-draggable';

class DropDownList extends React.Component {

  handleBlockClick = (blockKey) => {
    // Chame a função fornecida por props para criar um bloco no pai
    this.props.onCreateBlock(blockKey);
  };

  eventLogger = (e, data) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };

  render() {
    return (
      <div>
        <div style={{ position: "absolute", width: "100vw", height: "100vh" }}>
          <Draggable
            style={{ position: "absolute" }}
            axis="both"
            defaultPosition={{ x: 0, y: 0 }}
            enableUserSelectHack="true"
            grid={[25, 25]}
            scale={1}
            onStart={() => console.log("iniciou")}
            onDrag={(e) => console.log(e)}
            onStop={() => console.log("parou")}

          >
            <div>
              <div className="handle">Drag from here</div>
              <div>This readme is really dragging on...</div>
            </div>
          </Draggable>
        </div>
        {Object.entries(jsonData.blocks).map(([blockKey, blockValues]) => (
          <DropDownItem key={blockKey} onClick={() => this.handleBlockClick(blockKey)}>
            <div className="headerItem">
              <p className="headerItemText">{blockKey}</p>
            </div>
            <div className="showItem">
              <div className="ContentItem">
                {blockValues.map((text, index) => (
                  <button
                    className="Block"
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
