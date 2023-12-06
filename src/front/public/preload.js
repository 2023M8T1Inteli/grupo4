const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('handAPI', {
    sendCode: (code) => ipcRenderer.send('code', code)
})