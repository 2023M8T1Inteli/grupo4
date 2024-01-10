<table>
<tr>
<td>
<a href= "https://aacd.org.br/"><img src="https://aacd.org.br/wp-content/uploads/2019/10/logo-footer.jpg" alt="aacd.org.br" border="0" width="60%"></a>
</td>
<td><a href= "https://www.inteli.edu.br/"><img src="./inteli-logo.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0" width="50%"></a>
</td>
</tr>
</table>

# Introdução

Este é um dos repositórios do projeto de alunos do Inteli em parceria com a AACD no 2º semestre de 2023. Este projeto está sendo desenvolvido por alunos do Módulo 8 do curso de Ciência da Computação.

# Projeto: Tapete sensorial para apoiar pessoas com leves desordens neurológicas e sem alteração/restrição sensorial em atividades do cotidiano

# Grupo: Aladdin

## Integrantes:

* [André Lessa](https://www.linkedin.com/in/andrelessajr/)
* [Gabriel Carneiro](https://www.linkedin.com/in/gabecarneiro/)
* [Leandro Custódio](https://www.linkedin.com/in/leandro-custodio/)
* [Sarah Ribeiro](https://www.linkedin.com/in/sarah-miranda-ribeiro/)
* [Stefano Butori](https://www.linkedin.com/in/sbutori/)
* [Vinicius Souza](https://www.linkedin.com/in/vinicius-souza-santos/) 
* [Yasmin Rocha](https://www.linkedin.com/in/yasminvit%C3%B3riarocha/)


# Descrição

O projeto foca no desenvolvimento de uma Interface de Desenvolvimento de Software (IDE) para um sistema embarcado. Esse sistema é direcionado a um tapete sensorial, projetado para auxiliar pessoas com leves desordens neurológicas e sem alterações sensoriais em atividades cotidianas. O tapete sensorial, interligado ao dispositivo denominado Greg Maker, é um recurso adaptado que permite a estimulação tátil e proprioceptiva, integrando os sistemas nervosos central e periférico, melhorando assim respostas motoras funcionais e desempenhos ocupacionais.

# Configuração de Desenvolvimento

Nossa aplicação é um executável baseado em Electron, e atualmente está em desenvolvimento. Contudo, é possível executar a aplicação desde que alguns recursos sejam instalados:

## Pré-Requisitos

### Node.js e npm

Node.js é um ambiente de execução para JavaScript no lado do servidor. npm é o gerenciador de pacotes para JavaScript. Para instalar o Node.js e npm, siga estas etapas:

1. **Baixar Node.js**: Visite o site oficial do Node.js em [https://nodejs.org/](https://nodejs.org/) e baixe o instalador apropriado para o seu sistema operacional.

2. **Instalação**: Execute o instalador baixado e siga as instruções para instalar o Node.js e npm. A instalação do npm acompanha a do Node.js, então não é necessário instalar separadamente.

3. **Verificação da Instalação**: Para verificar se o Node.js e npm foram instalados corretamente, abra um terminal e digite os seguintes comandos:

   ```bash
   node -v
   npm -v
   ```
   Se a instalação estiver correta, os comandos acima retornarão as versões instaladas do Node.js e npm, respectivamente.

### Python

Python é uma linguagem de programação de alto nível, interpretada, de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte. É necessário para algumas dependências de desenvolvimento do Electron.

1. **Baixar Python**: Acesse [https://www.python.org/downloads/](https://www.python.org/downloads/) e baixe a versão mais recente do Python para o seu sistema operacional.

2. **Instalação**: Execute o instalador baixado. Durante a instalação, certifique-se de marcar a opção de "Adicionar Python ao PATH" para poder executar o Python a partir do terminal.

3. **Verificação da Instalação**: Para verificar se o Python foi instalado corretamente, abra um terminal e digite o comando:

   ```bash
   python --version
   ```
Este comando deve retornar a versão do Python instalada.

### Pygame

O Pygame é uma biblioteca Python Voltada para o desenvolvimento de games e interfaces gráficas. É uma aplicação que, assim como a sua linguagem base, possui não apenas um funcionamento simples, mas também uma instalação em pouquíssimos passos.

Com o Python já instalado em sua máquina, basta abrir um terminal e digitar o seguinte comando:

   ```bash
   python -m pip install -U pygame
   ```
   Se a instalação estiver correta, os comandos acima retornarão mensagens indicando que o Pygame foi instalado ou atualizado com sucesso.


## Como executar?

### Aplicação Electron 

Após a instalação dos pré-requisitos, você está pronto para configurar o ambiente de desenvolvimento para a aplicação Electron. Entre na pasta src/ide/front e execute os seguintes comandos:

```
npm i 
npm run start
```

Em outro terminal, no mesmo diretório execute:
```
npm run electron
```

Preparamos uma série de vídeos para auxiliar na compreensão da IDE: 

**[Vídeo explicativo - Sprint 5](https://youtu.be/tJKouexjaWM)**.

### Backend NestJS

Entre na pasta src/ide/backend e execute:

```
npm run start
```

Estamos utilizando o [Swagger](https://swagger.io/) para documentar nosso backend, e você pode acessá-lo através: http://localhost:8080/api

[Vídeo demonstrativo - Backend - Sprint 4](https://youtu.be/6Q9Tx7d2HvI)

Para modelar o Banco de Dados, utilizamos o Luna Modeler, e para provisionamento de um banco de dados PostgreSQL, empregamos os serviços do Amazon RDS. Os arquivos do Luna Modeler, bem como uma imagem de referência, estão disponíveis em:

[artefatos/img/Diagrama_Luna_Monder_Arquivo.dmm](./artefatos/img/Diagrama_Luna_Monder_Arquivo.dmm)

[artefatos/img/Diagrama_Luna_Mondeler.png](./artefatos/img/Diagrama_Luna_Mondeler.png)

### Gerar executável

Para gerar a versão do executável da aplicação, é necessário entrar na pasta src/ide/front e executar os seguintes comandos:

```
npm run build

npm run electron:package:Nome_do_sistema

```
A versão do executável será gerada na pasta chamada 'dist' dentro de front. Para garantir o funcionamento da aplicação, siga os passos adicionais abaixo:

1- Copie a pasta 'games' do diretório 'ide' e cole na pasta 'dist'.
<br />
2 - Copie as pastas 'qal' e 'tool' do diretório 'compilador' e cole no diretório 'dist'.

Após concluir essas etapas, você poderá utilizar o executável que estará dentro da pasta dist.

**Observação 1:** Se estiver utilizando o Windows, substitua Nome_do_sistema por 'win'
<br />
**Observação 2:** Se estiver utilizando o Linux, substitua Nome_do_sistema por 'lin'.
<br />
**Observação 3:** Se estiver utilizando o macOS, substitua Nome_do_sistema por 'mac'.

# Tag

* [SPRINT1](https://github.com/2023M8T1Inteli/grupo4/releases/tag/sprint1): Analisador léxico (versão 1), Entendimento do Negócio, Entendimento do Usuário e Arquitetura inicial
* [SPRINT2](https://github.com/2023M8T1Inteli/grupo4/releases/tag/sprint2): Analisador léxico (versão 2), Analisador sintático (versão 1), IDE (versão 1), Artigo (versão 1)
* [SPRINT3](https://github.com/2023M8T1Inteli/grupo4/releases/tag/sprint3): Analisador sintático (v2) e semântico (v1), IDE (v2) e Artigo (v2)
* [SPRINT4](https://github.com/2023M8T1Inteli/grupo4/releases/tag/sprint4): Analisador sintático (v3), semântico (v2), Gerador de código(v1), IDE (v3) e Artigo (v3)
* [SPRINT5](https://github.com/2023M8T1Inteli/grupo4/releases/tag/sprint5): Analisadores léxico, sintático e semântico (versões finais), Refinamento da IDE, Artigo (versão final) e Organização do GitHub

## 📋 Licença/License

<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/">

<a property="dct:title" rel="cc:attributionURL">Grupo</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName">Inteli, André Lessa, Gabriel Carneiro, Leandro Custódio, Sarah Ribeiro, Stefano Butori, Vinicius Souza, Yasmin Rocha</a> is licensed under <a href="https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" rel="license noopener noreferrer" style="display:inline-block;">Attribution 4.0 International</a>.</p>
