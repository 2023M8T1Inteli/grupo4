const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('handAPI', {
    sendCode: (code) => ipcRenderer.send('code', code)
})

contextBridge.exposeInMainWorld('initGame', {
    initGame: (gameName) => ipcRenderer.send('gameName', gameName)
})