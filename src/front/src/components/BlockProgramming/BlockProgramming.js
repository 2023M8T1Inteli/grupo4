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
            name: "",
            base: `import pygame\nimport sys\nfrom pygame.locals import *\npygame.init()\nscreen = pygame.display.set_mode((960, 540))\nscreen.fill((255, 255, 255))\npygame.display.set_caption("Jogo")\nrunning = True\nfont_title = pygame.font.Font(None, 50)\nfont_text = pygame.font.Font(None, 36)\nclock = pygame.time.Clock()
while True:
    # Seu código Python continua aqui...\n
    for event in pygame.event.get():\n
        if event.type == pygame.QUIT:
            pygame.quit()
            exit()
        elif event.type == pygame.KEYDOWN:\n
    `, 
            code: "",// Adicione a variável code ao estado
            imagePath: "", // Add the 'imagePath' variable to the state
        };       
    }

    handleCreateBlock = async (text) => {
        console.log("Handling block creation:", text);
        const blockTextTest = text[0];
        const blockText = text[1];
        console.log("BlockText: ", blockTextTest);

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
        }
        
        else if (blockTextTest === "Áudio") {
            try {
                const result = await window.inputFile.inputAudio();
                console.log(result);

                const { filePath, originalPath } = result;
                console.log("File saved successfully:", filePath);

                // Update the state with the new audio block after saving the audio
                this.setState((prevState) => ({
                    audioPath: filePath,
                    blocks: [
                        ...prevState.blocks,
                        {
                            id: `custom_${Date.now()}`,
                            text: ["Áudio", filePath, "áudio"],
                        },
                    ],
                }), () => {
                    console.log("Audio saved successfully:", this.state.audioPath);
                    console.log("BlockText: ", this.state.blocks);
                });

            } catch (error) {
                console.error("Error saving audio:", error);
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
            }), () => {
                this.rebuildCodeFromBlocks();
            });
        }
    };
    
    rebuildCodeFromBlocks = () => {
        const newCode = this.state.base + this.state.blocks.map(block => block.text[1]).join("");
        this.setState({ code: newCode });
    };
    

    handleInputChange = (blockId, inputValue) => {
        const keyMappings = {
            1: "pygame.K_UP",
            2: "pygame.K_DOWN",
            3: "pygame.K_RIGHT",
            4: "pygame.K_LEFT"
        };
    
        const mappedValue = keyMappings[Number(inputValue)]; // Garante que o inputValue seja um número
    
        this.setState(prevState => ({
            blocks: prevState.blocks.map(block => {
                if (block.id === blockId) {
                    let newText = [...block.text];
    
                    // Verifica se o bloco já tem um valor mapeado e substitui pelo novo valor
                    const lastMapping = Object.values(keyMappings).find(val => newText[1].includes(val));
                    if (lastMapping) {
                        newText[1] = newText[1].replace(lastMapping, mappedValue);
                    } else {
                        newText[1] += ` ${mappedValue}`;
                    }
    
                    return { ...block, text: newText };
                }
                return block;
            }),
        }), () => {
            this.rebuildCodeFromBlocks(); // Reconstruir o código após atualizar os blocos
        });
    };
    
    handleRemoveBlock = (id) => {
        this.setState((prevState) => ({
            code: prevState.code.replace(prevState.blocks.find((block) => block.id === id).text[1], ''),
            blocks: prevState.blocks.filter((block) => block.id !== id),
        }), () => {
            this.rebuildCodeFromBlocks();
        });
    };


    handleCode = () => {
        console.log(this.state.code);
        console.log(this.state.blocks);
        //window.handAPI.sendCode(this.state.code);
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

    handleSaveAudio = async () => {
        console.log("Saving audio...");

        try {
            const result = await window.inputFile.inputAudio();
            console.log(result);

            const { filePath, originalPath } = result;
            console.log("File saved successfully:", filePath);

            this.setState((prevState) => ({
                audioPath: filePath,
                blocks: [
                    ...prevState.blocks,
                    {
                        id: `custom_${Date.now()}`,
                        text: ["Áudio", filePath, "áudio"], // Update with the audio path
                    },
                ],
            }), () => {
                console.log("Audio saved successfully:", this.state.audioPath);
                console.log("BlockText: ", this.state.blocks);
            });

            // You can perform additional operations or update the code accordingly
        } catch (error) {
            console.error("Error saving audio:", error);
        }
    };
    
    getFileName = (filePath) => {
        const parts = filePath.split('\\')
        return parts[parts.length - 1];
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
                                                        <p id="img-p">{block.text[0]}</p>
                                                        <img id="image-block" src={block.text[1]} alt="Imagem" />
                                                    </div>
                                                ) : block.text[0] === "Áudio" ? (
                                                    <div className="buttonContent" id="buttonContent-p">
                                                        <p id="img-p">{this.getFileName(block.text[1])}</p>
                                                        <audio id="audio-block" controls>
                                                            <source src={block.text[1]} type="audio/mp3" />
                                                            Your browser does not support the audio element.
                                                        </audio>
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
