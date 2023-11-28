const { app, BrowserWindow, ipcMain } = require('electron')

const path = require('path')
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
        const gameName = "jogo_teste.txt"
        const filePath = path.join(__dirname, '..', '..', 'games', `${gameName}`);

        fs.writeFile(filePath, code, 'utf-8', (err) => {
            if (err) {
                console.log(err);
                return;
            }

            console.log("Jogo salvo com sucesso! " + filePath);
        });

        let pyshell = new PythonShell('./qal/script.py');

        pyshell.send(gameName);

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

    win.loadURL('http://localhost:3000/')

    win.focus();


}

app.whenReady().then(createWindow)
