import React from "react";
import DropDownList from "../DropDownList/DropdownList";
import "./style.css";
import { GoArrowLeft } from "react-icons/go";

import EditGameName from "../EditGameNameSection/EditNameGame";
import EditGameVisibility from "../EditGameVisibility/EditGameVisibility";

class BlockProgramming extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedBlock: null,
            blocks: [],
            code: "", // Adicione a variável code ao estado
            imagePath: "", // Add the 'imagePath' variable to the state
        };
    }

    handleCreateBlock = async (text) => {
        console.log("Handling block creation:", text);
        const blockTextTest = text[0];
        const blockText = text[1];
    
        if (blockTextTest === "Imagem") {
            try {
                const result = await window.inputFile.inputImage();
                console.log(result);
    
                const { filePath, originalPath } = result;
                console.log("File saved successfully:", filePath);
    
                // Update the state with the new image block after saving the image
                this.setState((prevState) => ({
                    imagePath: filePath,
                    blocks: [
                        ...prevState.blocks,
                        {
                            id: `custom_${Date.now()}`,
                            text: ["Imagem", filePath, "imagem"],
                        },
                    ],
                }), () => {
                    console.log("Image saved successfully:", this.state.imagePath);
                    console.log("BlockText: ", this.state.blocks);
                });
    
            } catch (error) {
                console.error("Error saving image:", error);
            }
        } else {
            this.setState((prevState) => ({
                code: prevState.code + blockText,
                blocks: [
                    ...prevState.blocks,
                    {
                        id: `custom_${Date.now()}`,
                        text: text,
                    },
                ],
            }));
        }
    };
    

    handleRemoveBlock = (id) => {
        this.setState((prevState) => ({
        code: prevState.code.replace(prevState.blocks.find((block) => block.id === id).text[1], ''),
        blocks: prevState.blocks.filter((block) => block.id !== id),
        }));
    };


    handleCode = () => {
        console.log(this.state.code);
        window.handAPI.sendCode(this.state.code);
    };

    handleSaveImage = async () => {
        console.log("Saving image...");
    
        try {
            const result = await window.inputFile.inputImage();
            console.log(result);
    
            const { filePath, originalPath } = result;
            console.log("File saved successfully:", filePath);
    
            this.setState((prevState) => ({
                imagePath: filePath,
                blocks: [
                    ...prevState.blocks,
                    {
                        id: `custom_${Date.now()}`,
                        text: ["Imagem", filePath, "imagem"], // Update with the image path
                    },
                ],
            }), () => {
                console.log("Image saved successfully:", this.state.imagePath);
                console.log("BlockText: ", this.state.blocks);
            });
    
            // You can perform additional operations or update the code accordingly
        } catch (error) {
            console.error("Error saving image:", error);
        }
    };
    

    initGame = () => {
        console.log("initGame");
        window.initGame.initGame("Jogo2");
    }

    render() {
        return (
            <div className="Container">
                <div className="IconContainer">
                    <GoArrowLeft className="Icon"/>
                </div>
                <div className="ContentContainer">
                    <div className="Sidebar">
                        <div className="TitleSidebar">
                            <p className="TextSidebar">Edição</p>
                        </div>
                        <div className="Content">
                            <div className="ContentRight">
                                <DropDownList onCreateBlock={this.handleCreateBlock} />
                            </div>
                        </div>
                    </div>

                    <div className="BlockProgrammingSection">
                        <div className="Navbar">
                            <div className="BottomNavbar">
                                <div className="BottomNavbarBtns">
                                    <button className="NavbarBtn" onClick={this.handleCode}>
                                        Criar
                                    </button>
                                    <button className="NavbarBtn" onClick={this.initGame} >Iniciar</button>
                                </div>
                            </div>
                        </div>

                        <div className="MainContent">
                            <div className="CodeType">
                                <div className="ProgSectionHeader">
                                    <EditGameName />
                                    <EditGameVisibility />
                                </div>

                                <div className="Code">
                                {this.state.blocks.map((block) => (
                                    <div key={block.id} className={`CreatedBlock ${block.text[2]}`} id={block.id}>
                                        <button onClick={() => this.handleRemoveBlock(block.id)}>x</button>
                                        <div className={`${block.text[2]}Created`}>
                                            {block.text[0] === "Imagem" ? (
                                                <div className="buttonContent" id="buttonContent-p">
                                                    <p id="img-p">{block.text[0]}</p>,
                                                    <img id="image-block" src={block.text[1]} alt="Imagem" />
                                                </div>
                                            ) : (
                                                <div className="buttonContent">
                                                    <p>{block.text[0]}</p>
                                                    <input type="number" name="tentacles" min="1" max="16" />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlockProgramming;
