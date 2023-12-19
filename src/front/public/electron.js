const { app, BrowserWindow, ipcMain, dialog } = require('electron')
const { PythonShell } = require('python-shell');

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

    ipcMain.on('code', (event, code) => {
        const nomeJogo = "jogo_teste.txt"
        const filePath = path.join(__dirname, '..', '..', 'games', `${nomeJogo}`);

        fs.writeFile(filePath, code, 'utf-8', (err) => {
            if (err) {
                console.log(err);
                return;
            }

            console.log("Jogo salvo com sucesso! " + filePath);
        });

        let pyshell = new PythonShell('../qal/electron_script.py');

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

    ipcMain.on('gameName', (event, gameName) => {
        let pyshell = new PythonShell('../games/game1.py');

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
    createWindow();
});
