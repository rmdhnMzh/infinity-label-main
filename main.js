const { app, BrowserWindow } = require('electron');
require('./app');

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 1080,
        height: 600,
        icon: './public/adminlte/iconsApps/InfinityLabelIconsApp.ico',
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadURL("http://localhost:3000");

    // Emitted when the window is closed.
    win.on('closed', () => {
        win = null;
    });

    // DevTools.
    // win.webContents.openDevTools()
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    // On macOS
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On macOS
    if (win === null) {
        createWindow();
    }
});