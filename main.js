const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

// Keep a global reference of the window object
let mainWindow;

/**
 * Creates the main application window
 */
function createWindow() {
    // Create the browser window
    mainWindow = new BrowserWindow({
        width: 1400,
        height: 1000,
        minWidth: 1000,
        minHeight: 700,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            enableRemoteModule: false
        },
        icon: path.join(__dirname, 'PFP.png'),
        show: false, // Don't show until ready to prevent visual flash
        titleBarStyle: 'default',
        autoHideMenuBar: false // Show menu bar
    });

    // Load the index.html file from src directory
    mainWindow.loadFile(path.join(__dirname, 'src', 'index.html'));

    // Show window when ready
    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
        
        // Focus the window
        if (mainWindow) {
            mainWindow.focus();
        }
    });

    // Handle mouse wheel zoom with Ctrl key
    mainWindow.webContents.on('before-input-event', (event, input) => {
        // Handle Ctrl + Mouse Wheel for zooming
        if (input.control && input.type === 'mouseWheel') {
            const currentZoom = mainWindow.webContents.getZoomFactor();
            
            if (input.wheelDeltaY > 0) {
                // Scroll up = Zoom In
                mainWindow.webContents.setZoomFactor(Math.min(3.0, currentZoom + 0.1));
            } else if (input.wheelDeltaY < 0) {
                // Scroll down = Zoom Out
                mainWindow.webContents.setZoomFactor(Math.max(0.3, currentZoom - 0.1));
            }
        }
    });

    // Alternative method for mouse wheel zoom
    mainWindow.webContents.on('zoom-changed', (event, zoomDirection) => {
        const currentZoom = mainWindow.webContents.getZoomFactor();
        
        if (zoomDirection === 'in') {
            mainWindow.webContents.setZoomFactor(Math.min(3.0, currentZoom + 0.1));
        } else if (zoomDirection === 'out') {
            mainWindow.webContents.setZoomFactor(Math.max(0.3, currentZoom - 0.1));
        }
    });

    // Handle window closed
    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    // Create a simple application menu
    const template = [
        {
            label: 'File',
            submenu: [
                {
                    label: 'Exit',
                    accelerator: process.platform === 'darwin' ? 'Cmd+Q' : 'Ctrl+Q',
                    click: () => {
                        app.quit();
                    }
                }
            ]
        },
        {
            label: 'View',
            submenu: [
                {
                    label: 'Reload',
                    accelerator: 'F5',
                    click: () => {
                        mainWindow.reload();
                    }
                },
                {
                    label: 'Zoom In',
                    accelerator: 'CmdOrCtrl+numadd',
                    click: () => {
                        const currentZoom = mainWindow.webContents.getZoomFactor();
                        mainWindow.webContents.setZoomFactor(Math.min(3.0, currentZoom + 0.1));
                    }
                },
                {
                    label: 'Zoom In (Plus)',
                    accelerator: 'CmdOrCtrl+=',
                    click: () => {
                        const currentZoom = mainWindow.webContents.getZoomFactor();
                        mainWindow.webContents.setZoomFactor(Math.min(3.0, currentZoom + 0.1));
                    }
                },
                {
                    label: 'Zoom Out',
                    accelerator: 'CmdOrCtrl+numsub',
                    click: () => {
                        const currentZoom = mainWindow.webContents.getZoomFactor();
                        mainWindow.webContents.setZoomFactor(Math.max(0.3, currentZoom - 0.1));
                    }
                },
                {
                    label: 'Zoom Out (Minus)',
                    accelerator: 'CmdOrCtrl+-',
                    click: () => {
                        const currentZoom = mainWindow.webContents.getZoomFactor();
                        mainWindow.webContents.setZoomFactor(Math.max(0.3, currentZoom - 0.1));
                    }
                },
                {
                    label: 'Reset Zoom',
                    accelerator: 'CmdOrCtrl+0',
                    click: () => {
                        mainWindow.webContents.setZoomFactor(1.0);
                    }
                }
            ]
        },
        {
            label: 'Help',
            submenu: [
                {
                    label: 'About Subcoder Cipher Matrix',
                    click: () => {
                        // Simple about message
                        const { dialog } = require('electron');
                        dialog.showMessageBox(mainWindow, {
                            type: 'info',
                            title: 'About',
                            message: 'Subcoder Cipher Matrix',
                            detail: 'Version 1.0.0\nAdvanced Encryption & Decryption Tool\n\nSupports Caesar Cipher, Vigenère Cipher, Atbash Cipher, Binary, and Hex conversion.'
                        });
                    }
                }
            ]
        }
    ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
}

// This method will be called when Electron has finished initialization
app.whenReady().then(() => {
    createWindow();

    // Handle app activation (macOS)
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

// Quit when all windows are closed
app.on('window-all-closed', () => {
    // On macOS, applications stay active until explicitly quit
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// Security: Prevent opening new windows
app.on('web-contents-created', (event, contents) => {
    contents.on('new-window', (event, url) => {
        event.preventDefault();
    });
});

// Handle certificate errors (for security)
app.on('certificate-error', (event, webContents, url, error, certificate, callback) => {
    event.preventDefault();
    callback(false);
});