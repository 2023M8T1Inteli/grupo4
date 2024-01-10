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
            imports: `import pygame\nimport sys\nfrom pygame.locals import *\npygame.init()\nscreen = pygame.display.set_mode((960, 540))\nscreen.fill((255, 255, 255))\npygame.display.set_caption("Jogo")\nrunning = True\nfont_title = pygame.font.Font(None, 50)\nfont_text = pygame.font.Font(None, 36)\nclock = pygame.time.Clock()\n`,
            base: `while True:
    # Seu código Python continua aqui...\n
    for event in pygame.event.get():\n
        if event.type == pygame.QUIT:
            pygame.quit()
            exit()\n`, 
            code: "",
            imagePath: "",
            vars: "", 
            contadorImagens: 0,
            contadorSons: 0, 
        };       
        console.log(this.props.gameData);
    }

    // Criação de variáveis para imagens
    createVars = (variable, path) => {
        const newVars = `image_path${variable} = r'${path}'\nimage${variable} = pygame.image.load(image_path${variable}).convert()\nimage${variable} = pygame.transform.scale(image${variable}, (550, 300))\nimage_rect${variable} = image${variable}.get_rect(center=screen.get_rect().center)\n`;
        this.setState(prevState => ({
            vars: prevState.vars + newVars
        }));
    }
    
    // Criação de variáveis para sons
    createSoundVars = (variable, path) => {
        const newVars = `sound_path${variable} = pygame.mixer.Sound(r'${path}')\n`;
        this.setState(prevState => ({
            vars: prevState.vars + newVars
        }));
    }

    // Manipulação de criação de blocos na seção de block programming
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
                //console.log("File saved successfully:", filePath);
                this.createVars(this.state.contadorImagens, filePath);
                // Update the state with the new image block after saving the image
                this.setState((prevState) => ({
                    blocks: [
                        ...prevState.blocks,
                        {
                            id: `custom_${Date.now()}`,
                            text: ["Imagem", '\n', "imagem"],
                            indentLevel: this.determinarIndentLevel(text[0], prevState.blocks), // Adiciona indentLevel
                        },
                    ],
                }), () => {
                    this.rebuildCodeFromBlocks();
                });
    
            } catch (error) {
                console.error("Error saving image:", error);
            }
        }
        
        else if (blockTextTest === "Áudio") {
            try {
                const result = await window.inputFile.inputAudio();
                this.createSoundVars(this.state.contadorSons, result.filePath);
                const { filePath, originalPath } = result;
                
                // Update the state with the new audio block after saving the audio
                this.setState((prevState) => ({
                    audioPath: filePath,
                    blocks: [
                        ...prevState.blocks,
                        {
                            id: `custom_${Date.now()}`,
                            text: ["Áudio", '\n', "áudio"],
                            indentLevel: this.determinarIndentLevel(text[0], prevState.blocks), // Adiciona indentLevel
                        },
                    ],
                }), () => {
                    this.rebuildCodeFromBlocks();
                    //console.log("Audio saved successfully:", this.state.audioPath);
                    //console.log("BlockText: ", this.state.blocks);
                });

            } catch (error) {
                console.error("Error saving audio:", error);
            }
        } 
        else if (blockTextTest == "Mostrar Imagem") {
            this.setState((prevState) => ({
                contadorImagens: prevState.contadorImagens + 1,
                blocks: [
                    ...prevState.blocks,
                    {
                        id: `custom_${Date.now()}`,
                        text: ["Mostrar Imagem", `screen.blit(image${prevState.contadorImagens + 1}, image_rect${prevState.contadorImagens + 1})`, "BlockMessages"],
                        indentLevel: this.determinarIndentLevel(text[0], prevState.blocks),
                    },
                ],
            }), () => {
                this.rebuildCodeFromBlocks();
            });
        } 
        
        else if (blockTextTest == "Tocar Som") {
            this.setState((prevState) => ({
                contadorImagens: prevState.contadorSons + 1,
                blocks: [
                    ...prevState.blocks,
                    {
                        id: `custom_${Date.now()}`,
                        text: ["Tocar Som", `pygame.mixer.Sound.play(sound_path${prevState.contadorSons})`, "BlockMessages"],
                        indentLevel: this.determinarIndentLevel(text[0], prevState.blocks),
                    },
                ],
            }), () => {
                this.rebuildCodeFromBlocks();
            });
        } else {
            this.setState((prevState) => ({
                blocks: [
                    ...prevState.blocks,
                    {
                        id: `custom_${Date.now()}`,
                        text: text,
                        indentLevel: this.determinarIndentLevel(text[0], prevState.blocks),
                    },
                ],
            }), () => {
                this.rebuildCodeFromBlocks();
            });
        }
    };
    
    // determinar numero de espações de cada linha do codigo gerado
    determinarIndentLevel = (tipoBloco, blocosExistentes) => {
        const ultimoBloco = blocosExistentes[blocosExistentes.length - 1];
    
        if (tipoBloco === "então") {
            // Incrementa a indentação para blocos 'se' e 'se não'
            return blocosExistentes.length > 0 ? ultimoBloco.indentLevel + 2 : 1;
        } else if (tipoBloco === "Acerto" || tipoBloco === "Erro") {
            // Mantém a indentação do último bloco 'se' ou 'se não'
            const ultimoCond = [...blocosExistentes].reverse().find(bloco => bloco.text[0] === "então" || bloco.text[0] === "se não");
            return ultimoCond ? ultimoCond.indentLevel : 0;
        } else {
            // Para outros blocos, ajusta a indentação com base no último bloco
            if (ultimoBloco && (ultimoBloco.text[0] === "Acerto")) {
                return 3;
            } else if (ultimoBloco && ultimoBloco.text[0] === "se não") {
                return ultimoBloco.indentLevel + 1;
            } 
        }
    
        // Por padrão, mantém a indentação do bloco anterior
        return blocosExistentes.length > 0 ? ultimoBloco.indentLevel : 2;
    };
    
    
    // carregar o código que foi salvo
    rebuildCodeFromBlocks = () => {
        const newCode = this.state.blocks.map(block => {
    
            const tabs = "    ".repeat(block.indentLevel);
            return tabs + block.text[1];
        }).join("");
    
        this.setState({ code: this.state.imports + this.state.vars + this.state.base + newCode + "\n    pygame.display.update()\n"});
    };
    
    

    // Manipulação de entradas de teclado
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
    
    handleInputTextChange = (blockId, inputValue) => {
        this.setState(prevState => ({
            blocks: prevState.blocks.map(block => {
                if (block.id === blockId && block.text[0] === "Texto") {
                    // Substitui o texto do bloco pelo valor do input
                    return { ...block, text: ["Texto", `escreverTexto('${inputValue}')`, "BlockMessagesText"] };
                }
                return block;
            }),
        }), () => {
            this.rebuildCodeFromBlocks(); // Reconstruir o código após atualizar os blocos
        });
    };
    

    // função remover bloco
    handleRemoveBlock = (id) => {
        this.setState((prevState) => ({
            code: prevState.code.replace(prevState.blocks.find((block) => block.id === id).text[1], ''),
            blocks: prevState.blocks.filter((block) => block.id !== id),
        }), () => {
            this.rebuildCodeFromBlocks();
        });
    };

    // função criar código
    handleCode = () => {
        console.log(this.state.code);
        console.log(this.state.blocks);
        const data = {
            "name": this.props.gameData.nome_jogo,
            "emailCriador": this.props.gameData.criadorEmail,
            "publico": this.props.gameData.publico,
            // pegar os dados que preciso mandar pra rota 
        }
        const serializedState = JSON.stringify(this.state.blocks);
        window.handAPI.sendCode(this.state.code, serializedState, data);
    };
    
    handleSaveImage = async () => {
        console.log("Saving image...");
    
        try {
            const result = await window.inputFile.inputImage();
            console.log(result);
    
            const { filePath, originalPath } = result;
    
            this.setState((prevState) => ({
                blocks: [
                    ...prevState.blocks,
                    {
                        id: `custom_${Date.now()}`,
                        text: ["Imagem", filePath, "imagem"], // Update with the image path
                    },
                ],
            }), () => {
                console.log("BlockText: ", this.state.blocks);
            });
    
        } catch (error) {
            console.error("Error saving image:", error);
        }
    };

    // salvar audio
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
    };
    
    // pegar caminho do file
    getFileName = (filePath) => {
        const parts = filePath.split('\\')
        return parts[parts.length - 1];
    };

    // iniciar jogo
    initGame = () => {
        console.log("initGame");
        window.initGame.initGame(this.props.gameData.nome_jogo);
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
                                        SALVAR
                                    </button>
                                    <button className="NavbarBtn" onClick={this.initGame} >Iniciar</button>

                                </div>
                            </div>
                        </div>

                        <div className="MainContent">
                            <div className="CodeType">
                                <div className="ProgSectionHeader">
                                    <EditGameName nome_jogo={this.props.gameData.nome_jogo} />
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
                                                        <input type="number" name="tentacles" min="1" max="16" onChange={(e) => this.handleInputChange(block.id, e.target.value)}/>
                                                    </div>
                                                )}
                                                <div className="textInputSection">
                                                    <input className="textInput" onChange={(e) => this.handleInputTextChange(block.id, e.target.value)} />
                                                </div>
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
