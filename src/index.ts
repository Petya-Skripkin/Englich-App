import { app, BrowserWindow } from "electron";
const AutoLaunch = require('auto-launch');
declare const MAIN_WINDOW_WEBPACK_ENTRY: any;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  // eslint-disable-line global-require
  app.quit();
}

export const createWindow = (): void => {
  // Create the browser window.
  const MWindow = new BrowserWindow({
    width: 0,
    height: 0,
    show: false,
  });

  // and load the index.html of the app.
  MWindow.loadFile("load.html");

  const FirstWindow = new BrowserWindow({
    width: 300,
    height: 350,
    resizable: false,
    frame: false,
    alwaysOnTop: true,
  });

  // and load the index.html of the app.
  FirstWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  const mainWindow = new BrowserWindow({
    width: 300,
    height: 350,
    resizable: false,
    frame: false,
    alwaysOnTop: true,
  });

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  setInterval(() => {
    if (BrowserWindow.getAllWindows().length < 2) {
      const mainWindow = new BrowserWindow({
        width: 300,
        height: 350,
        resizable: false,
        frame: false,
        alwaysOnTop: true,
      });

      // and load the index.html of the app.
      mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

      // Open the DevTools.
      // mainWindow.webContents.openDevTools();
    }
  }, 7 * 60000);
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", () => {
  let autoLaunch = new AutoLaunch({
    name: 'Englich',
    path: app.getPath('exe'),
  });
  autoLaunch.isEnabled().then((isEnabled: any) => {
    if (!isEnabled) autoLaunch.enable();
  });
  return createWindow()
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
