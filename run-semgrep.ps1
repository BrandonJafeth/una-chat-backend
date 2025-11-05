# Script para ejecutar Semgrep con PATH correcto
$semgrepPath = "C:\Users\Brandon\AppData\Roaming\Python\Python312\Scripts"
$env:PATH = "$semgrepPath;$env:PATH"

# Verificar instalacion
Write-Host "Verificando Semgrep..." -ForegroundColor Cyan
& "$semgrepPath\semgrep.exe" --version

Write-Host "`nEjecutando escaneo personalizado..." -ForegroundColor Cyan
& "$semgrepPath\semgrep.exe" --config=.semgrep.yml src/
