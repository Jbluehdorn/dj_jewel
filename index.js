const { app, BrowserWindow } = require('electron')

const WIDTH = 800
const HEIGHT = 600

function createWindow() {
    console.log('doing a thing')
    const win = new BrowserWindow({
        width: WIDTH,
        height: HEIGHT,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('index.html')
    
    win.webContents.openDevTools()
}

app.whenReady().then(createWindow)