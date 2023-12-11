const { app, BrowserWindow, ipcMain } = require('electron')
const { PythonShell } = require('python-shell');

const isDev = require('electron-is-dev');
const path = require('path');
const fs = require('fs');

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
        const joguinho = "jogo_teste.txt"
        const filePath = path.join(__dirname, '..', '..', 'games', `${joguinho}`);

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
        // const pqp = "jogo_teste.txt"
        // const filePath = path.join(__dirname, '..', '..', 'games', `${pqp}`);

        // fs.writeFile(filePath, code, 'utf-8', (err) => {
        //     if (err) {
        //         console.log(err);
        //         return;
        //     }

        //     console.log("Jogo salvo com sucesso! " + filePath);
        // });

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

app.whenReady().then(createWindow)
