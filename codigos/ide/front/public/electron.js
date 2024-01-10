const { app, BrowserWindow, ipcMain, dialog } = require('electron')
const { PythonShell } = require('python-shell');
const axios = require('axios');
const FormData = require('form-data');
const isDev = require('electron-is-dev');
const path = require('path');
const fs = require('fs');

async function handleImageUpload() {
    try {
        const { canceled, filePaths } = await dialog.showOpenDialog({title:"Image Filter" ,filters: [{ name: 'Images', extensions: ['jpg', 'png', 'gif']}], properties: ['openFile'] });

        if (canceled) {
            throw new Error('File selection canceled');
        }

        const filePath = filePaths[0];
        const destinationPath = path.join(__dirname, '..', '..', 'games', 'img');

        // Use fs.promises.copyFile to handle asynchronous copying
        fs.cpSync(filePath, path.join(destinationPath, path.basename(filePath)));

        console.log('Image copied successfully!');

        return {
            filePath: path.join(destinationPath, path.basename(filePath)),
            originalPath: filePath,
        };
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function handleAudioUpload() {
    try {
        const { canceled, filePaths } = await dialog.showOpenDialog({
            title: "Audio Filter",
            filters: [{ name: 'Audio Files', extensions: ['mp3', 'wav', 'ogg'] }],
            properties: ['openFile']
        });

        if (canceled) {
            throw new Error('File selection canceled');
        }

        const filePath = filePaths[0];
        const destinationPath = path.join(__dirname, '..', '..', 'games', 'audio');

        // Use fs.promises.copyFile to handle asynchronous copying
        fs.cpSync(filePath, path.join(destinationPath, path.basename(filePath)));

        console.log('Audio copied successfully!');

        return {
            filePath: path.join(destinationPath, path.basename(filePath)),
            originalPath: filePath,
        };
    } catch (error) {
        console.error(error);
        throw error;
    }
}


function createWindow() {

    let win = new BrowserWindow({
        width: 1400,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            webSecurity: false,
            plugins: true
        }
    })


    win.webContents.openDevTools()

    ipcMain.on('code', async (event, code, json, data) => {
        const nomeJogo = data.name + ".py";
        const filePathJogo = path.join(__dirname, '..', '..', 'games', `${nomeJogo}`);
    
        const nomeJSON = data.name + ".json";
        const filePathJSON = path.join(__dirname, '..', '..', 'games', 'json', `${nomeJSON}`);
    
        try {
            await fs.promises.writeFile(filePathJogo, code, 'utf-8');
            await fs.promises.writeFile(filePathJSON, json, 'utf-8');
            console.log(fs.createReadStream(filePathJogo), nomeJogo);
            // const formData = new FormData();
            // formData.append('files', fs.createReadStream(filePathJogo), nomeJogo);
            // formData.append('files', fs.createReadStream(filePathJSON), nomeJSON);
            // formData.append('nomeJogo', data.name);
            // formData.append('emailCriador', data.emailCriador);
            // formData.append('publico', data.publico);
    
            // const response = await axios.post('http://localhost:8080/jogos/create', formData, {
            //     headers: formData.getHeaders(),
            // });
    
            // console.log(response.data);
            alert("Jogo criado com sucesso!")
        } catch (error) {
            console.error(error);
        }
    });
    
    ipcMain.on('gameName', (event, gameName) => {
        let pyshell = new PythonShell(`../games/${gameName}.py`);

        pyshell.on('message', function (message) {
            console.log(message);
        });

        pyshell.end(function (err) {
            if (err) {
                throw err;
            }
            console.log('finished');

            // Sending a response back to the renderer process
            event.reply('code-reply', 'Message received successfully');
        });
    })
        
    win.loadURL(isDev ? 'http://localhost:3000/' : `file://${path.join(__dirname, "../build/index.html")}`)

    win.focus();
}

app.whenReady().then(() => {
    ipcMain.handle('uploadImage', handleImageUpload);
    ipcMain.handle('uploadAudio', handleAudioUpload);
    createWindow();
});
