# DigitalMunshi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5.

#How to Set uo the developement env.

1.npm i -g @angular/cli //Install angular-cli globally

2.ng new my-app //Create New angular app

3.cd my-app //cd to created app directory

4.npm install electron --save-dev //Install electron and save as a dev dependency

5.Create a main.js file and add following lines of code
	const { app, BrowserWindow } = require("electron");
	const path = require("path");
	const url = require("url");

	let win;

	function createWindow() {
	  win = new BrowserWindow({ width: 800, height: 600 });

	  // load the dist folder from Angular
	  win.loadURL(
	    url.format({
	      pathname: path.join(__dirname, `/dist/index.html`),
	      protocol: "file:",
	      slashes: true
	    })
	  );

	  // The following is optional and will open the DevTools:
	  // win.webContents.openDevTools()

	  win.on("closed", () => {
	    win = null;
	  });
	}

	app.on("ready", createWindow);

	// on macOS, closing the window doesn't quit the app
	app.on("window-all-closed", () => {
	  if (process.platform !== "darwin") {
	    app.quit();
	  }
	});

	// initialize the app's main window
	app.on("activate", () => {
	  if (win === null) {
	    createWindow();
	  }
	});

6.Add following lines in package.json
	
  "main": "main.js",
	 "scripts": {
	     "electron": "ng build --base-href ./ && electron .",
	    "electron-prod": "ng build --base-href ./ --prod && electron ."
	    ..
	}
  

7.Remove project name "outPath" property in angular.json("outputPath": "dist",)

8.Change the <base href="/"> to <base href="./"> in src/index.html
