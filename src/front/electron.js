const {app, BrowserWindow} = require('electron')

function createWindow() {

    let win = new BrowserWindow(
        {width:1400, 
         height:800, 
         webPreferences:{nodeIntegration:true}}
    )
    // win.webContents.openDevTools()
    win.loadURL('http://localhost:3000/')
    
    win.focus();

    
}

app.whenReady().then(createWindow)