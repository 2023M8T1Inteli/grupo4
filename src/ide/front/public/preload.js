const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('handAPI', {
    sendCode: (code, json, data) => ipcRenderer.send('code', code, json, data)
});

contextBridge.exposeInMainWorld('initGame', {
    initGame: (gameName) => ipcRenderer.send('gameName', gameName)
});

contextBridge.exposeInMainWorld('inputFile', {
    inputImage: () => ipcRenderer.invoke('uploadImage'),
    inputAudio: () => ipcRenderer.invoke('uploadAudio')
});
