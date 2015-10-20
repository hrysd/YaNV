'use strict';

const app           = require('app'),
      BrowserWindow = require('browser-window');

require('crash-reporter').start();

app.on('ready', () => {
  let mainWindow = new BrowserWindow({});

  mainWindow.loadUrl(`file://${__dirname}/index.html`);

  mainWindow.on('closed', app.quit);
});
