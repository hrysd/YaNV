'use strict';

const App           = require('electron').app,
      BrowserWindow = require('electron').BrowserWindow;

App.on('ready', () => {
  let mainWindow = new BrowserWindow({
    titleBarStyle: 'hidden-inset'
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`);

  mainWindow.on('closed', App.quit);
});
