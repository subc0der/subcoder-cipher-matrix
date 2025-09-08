@echo off
echo ═══════════════════════════════════════════
echo    SUBCODER CIPHER MATRIX LAUNCHER
echo ═══════════════════════════════════════════
echo.
echo Installing dependencies (if needed)...
call npm install
echo.
echo Launching Electron app...
echo.
call npm run dev
echo.
echo Press any key to exit...
pause >nul