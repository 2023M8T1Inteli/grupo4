const {app, BrowserWindow, ipcMain} = require('electron')

const path = require('path')

function createWindow() {

    let win = new BrowserWindow({
        width:1400, 
        height:800, 
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            webSecurity: false,
            plugins: true
        }
    })
    
    
    win.webContents.openDevTools()

    ipcMain.on('code', (event, code) => {
        console.log(code)
    })

    win.loadURL('http://localhost:3000/')
    
    win.focus();

    
}

app.whenReady().then(createWindow)
