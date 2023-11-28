const { app, BrowserWindow } = require('electron')
const url = require('url')
const path = require('path')

function createWindow() {
    let mainWindow = new BrowserWindow({
        width: 1024,
        height: 600,
        frame: true,
        webPreferences: {
            webSecurity: false,
            plugins: true
        }
    });

    mainWindow.loadURL(`file://${path.join(__dirname, './front/build/index.html')}`)

    mainWindow.focus()
    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
}

app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});