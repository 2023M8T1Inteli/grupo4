import React, { Component } from "react";
import DropDownItem from "./DropDownItem/DropDownItem";
import jsonData from "./Itens.json";
import Draggable from 'react-draggable';

class DropDownList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mouseX: 0,
      mouseY: 0,
      pode: false,
    };
  }

  handleBlockClick = (blockKey) => {
    if (this.state.pode) {
      this.props.onCreateBlock(blockKey);
    }
  };

  handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const areaSize = 100;

    // Verifica se o mouse está dentro da área específica
    const dentroDaArea = (
      clientX >= centerX - areaSize / 2 &&
      clientX <= centerX + areaSize / 2 &&
      clientY >= centerY - areaSize / 2 &&
      clientY <= centerY + areaSize / 2
    );

    this.setState({
      mouseX: clientX,
      mouseY: clientY,
      pode: dentroDaArea,
    });
  };

  render() {
    const { mouseX, mouseY, pode } = this.state;

    return (
      <div onMouseMove={this.handleMouseMove}>
        {Object.entries(jsonData.blocks).map(([blockKey, blockValues]) => (
          <DropDownItem key={blockKey} onClick={() => this.handleBlockClick(blockKey)}>
            <div className="headerItem">
              <p className="headerItemText">{blockKey}</p>
            </div>
            <div className="showItem">
              <div className="ContentItem">
                {blockValues.map((text, index) => (
                  <Draggable
                    key={index}
                    style={{ position: "absolute" }}
                    axis="both"
                    defaultPosition={{ x: 0, y: 0 }}
                    enableUserSelectHack={true}
                    grid={[25, 25]}
                    scale={1}
                    onStart={() => console.log("iniciou")}
                    onDrag={(e, data) => console.log(data)}
                    onStop={() => console.log("parou")}
                  >
                    <button
                      className="Block"
                      onClick={() => this.handleBlockClick(text)}
                    >
                      <p className="TextBlock">{text[0]}</p>
                    </button>
                  </Draggable>
                ))}
              </div>
            </div>
          </DropDownItem>
        ))}
        
        <p>Posição do Mouse: {mouseX}, {mouseY}</p>
        <p>pode: {pode.toString()}</p>
      </div>
    );
  }
}

export default DropDownList;
