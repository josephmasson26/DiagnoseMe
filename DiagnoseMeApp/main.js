const { app, BrowserWindow } = require('electron')
const { spawn } = require('child_process')

let mainWindow
let serverProcess

function createWindow () {
  mainWindow = new BrowserWindow({ width: 800, height: 600 })

  mainWindow.loadFile('index.html')

  mainWindow.on('closed', function () {
    mainWindow = null
  })

  // Start Flask server
  serverProcess = spawn('python3', ['main.py'])

  serverProcess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  serverProcess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  serverProcess.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})

app.on('quit', function () {
  // Kill Flask server
  serverProcess.kill('SIGINT')
})