# Subcoder Cipher Matrix Launcher

Write-Host "═══════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "    SUBCODER CIPHER MATRIX LAUNCHER" -ForegroundColor Cyan
Write-Host "═══════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""

$htmlPath = Join-Path $PSScriptRoot "src\index.html"

if (Test-Path $htmlPath) {
    Write-Host "✓ Found index.html" -ForegroundColor Green
    Write-Host "✓ Launching in your default browser..." -ForegroundColor Green
    
    # Open in default browser
    Start-Process $htmlPath
    
    Write-Host ""
    Write-Host "✓ App launched successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Browser opened with your Cipher Matrix app." -ForegroundColor Yellow
    Write-Host "You can close this window." -ForegroundColor Yellow
} else {
    Write-Host "✗ Error: Could not find src\index.html" -ForegroundColor Red
    Write-Host "  Please make sure you're in the correct directory." -ForegroundColor Red
}

Write-Host ""
Write-Host "Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")