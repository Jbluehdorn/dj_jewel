const { app, BrowserWindow } = require('electron')

const WIDTH = 800
const HEIGHT = 600

function createWindow() {
    const win = new BrowserWindow({
        width: WIDTH,
        height: HEIGHT,
        webPreferences: {
            nodeIntegration: true,
            webSecurity: false
        },
        resizable: false
    })

    win.loadFile('index.html')
    
    win.webContents.openDevTools()
}

app.whenReady().then(createWindow)