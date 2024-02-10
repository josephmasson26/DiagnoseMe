const { app, BrowserWindow } = require('electron')

app.commandLine.appendSwitch('disable-http-cache');

function createWindow () {
    let win = new BrowserWindow({
        width: 800,
        height: 740,
        webPreferences: {
            nodeIntegration: true,
        }
    })

    win.loadFile('public/index.html')
}

app.whenReady().then(createWindow)

