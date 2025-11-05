# 🔍 Semgrep Security Scanning - Guía de Demostración

## 📋 Descripción

Esta guía explica cómo usar **Semgrep** para análisis estático de seguridad (SAST) en VS Code, detectando vulnerabilidades y code smells en tiempo real.

---

## 🚀 Instalación

### 1. Instalar Semgrep CLI

**Opción 1: Python (Recomendado)**
```powershell
pip install semgrep
```

**Opción 2: Homebrew (macOS/Linux)**
```bash
brew install semgrep
```

**Opción 3: Docker**
```bash
docker pull returntocorp/semgrep
```

### 2. Instalar Extensión de VS Code

1. Abrir VS Code
2. Ir a extensiones (`Ctrl + Shift + X`)
3. Buscar **"Semgrep"**
4. Instalar la extensión oficial de **Semgrep Inc.**
5. Recargar VS Code

---

## ⚙️ Configuración

### Archivos Ya Configurados

✅ **`.semgrep.yml`** - Reglas de seguridad personalizadas (10 reglas)
✅ **`.vscode/settings.json`** - Configuración de VS Code
✅ **`package.json`** - Scripts npm para Semgrep

### Verificar Configuración

```powershell
# Verificar instalación
semgrep --version

# Verificar que detecta el archivo de configuración
semgrep --config=.semgrep.yml --dry-run src/
```

---

## 🎯 Uso - Scripts Disponibles

### 1. **Escaneo Automático (Reglas de Semgrep Cloud)**
```powershell
npm run semgrep
```
- Usa reglas automáticas de la comunidad
- Detecta vulnerabilidades comunes
- Rápido y confiable

### 2. **Escaneo de Seguridad (OWASP Top 10 + Node.js)**
```powershell
npm run semgrep:security
```
- Usa rulesets oficiales:
  - `p/owasp-top-ten`: Detecta las 10 vulnerabilidades más críticas
  - `p/nodejs`: Reglas específicas de Node.js
- Más exhaustivo que el escaneo automático

### 3. **Escaneo con Reglas Personalizadas**
```powershell
npm run semgrep:custom
```
- Usa el archivo `.semgrep.yml` local
- 10 reglas personalizadas para este proyecto:
  1. ❌ Hardcoded JWT secrets
  2. ❌ Uso peligroso de `eval()`
  3. ❌ SQL injection
  4. ⚠️ `console.log` en producción
  5. ❌ Contraseñas hardcodeadas
  6. ⚠️ Uso directo de `process.env`
  7. ❌ CORS con wildcard (`*`)
  8. ⚠️ Rate limiting débil
  9. ⚠️ Rutas sin validación
  10. ⚠️ Uso de `any` en TypeScript

### 4. **Modo Watch (Escaneo Continuo)**
```powershell
npm run semgrep:watch
```
- Escanea automáticamente al guardar archivos
- Útil durante desarrollo
- Presionar `Ctrl + C` para detener

### 5. **Reporte JSON para CI/CD**
```powershell
npm run semgrep:ci
```
- Genera `semgrep-report.json`
- Formato para integración con pipelines
- Útil para reportes automáticos

### 6. **Chequeo Completo de Seguridad**
```powershell
npm run check-security
```
- Ejecuta: ESLint → Semgrep → Tests
- Validación completa antes de commit
- Recomendado antes de push

---

## 🎓 Demostración para Clase

### Paso 1: Mostrar Vulnerabilidades Existentes

```powershell
# Ejecutar escaneo personalizado
npm run semgrep:custom
```

**Resultado Esperado:**
```
Ran 10 rules on 15 files: 8 findings.

Findings:
  src/config/environment.ts
    ⚠️ direct-process-env-usage
       Line 10: const port = process.env.PORT

  src/routes/chat.routes.ts
    ⚠️ missing-input-validation
       Line 45: router.get('/messages/history', ...)
```

### Paso 2: Mostrar en VS Code (Integración IDE)

1. Abrir VS Code
2. Abrir cualquier archivo en `src/`
3. En el panel **PROBLEMS** (`Ctrl + Shift + M`), ver:
   - ⚠️ Warnings de Semgrep
   - ❌ Errors de ESLint
4. Hacer click en un problema para navegar al código

### Paso 3: Crear Vulnerabilidad de Prueba

Agregar en `src/config/test-vuln.ts`:

```typescript
// ❌ DEMO: Vulnerabilidad intencional
const JWT_SECRET = "hardcoded-secret-123"
const password = "admin123"
```

Guardar y ver cómo Semgrep detecta inmediatamente:
- ❌ `hardcoded-jwt-secret`
- ❌ `hardcoded-password`

### Paso 4: Mostrar Reporte JSON

```powershell
npm run semgrep:ci
```

Abrir `semgrep-report.json` y mostrar estructura:
```json
{
  "results": [
    {
      "check_id": "hardcoded-jwt-secret",
      "path": "src/config/test-vuln.ts",
      "start": { "line": 2, "col": 7 },
      "end": { "line": 2, "col": 45 },
      "extra": {
        "severity": "ERROR",
        "message": "Hardcoded JWT secret detected..."
      }
    }
  ]
}
```

---

## 📊 Reglas Personalizadas Implementadas

| Regla | Severidad | Descripción | Ejemplo Detectado |
|-------|-----------|-------------|-------------------|
| `hardcoded-jwt-secret` | ERROR | JWT secrets en código | `jwt.sign(..., "secret", ...)` |
| `dangerous-eval-usage` | ERROR | Uso de `eval()` | `eval(userInput)` |
| `sql-injection-risk` | ERROR | Concatenación SQL | `db.query("SELECT * FROM " + table)` |
| `console-log-production` | WARNING | Console.log en src/ | `console.log("debug")` |
| `hardcoded-password` | ERROR | Contraseñas hardcodeadas | `password = "admin123"` |
| `direct-process-env-usage` | WARNING | process.env fuera de config | `process.env.API_KEY` |
| `insecure-cors-wildcard` | ERROR | CORS origin: "*" | `cors({ origin: "*" })` |
| `weak-rate-limiting` | WARNING | Rate limit > 1000 | `rateLimit({ max: 5000 })` |
| `missing-input-validation` | WARNING | Rutas sin validación | `router.post("/api", handler)` |
| `typescript-any-type` | WARNING | Uso de `any` | `const data: any = ...` |

---

## 🔧 Solución de Problemas

### Error: "semgrep: command not found"

**Solución:**
```powershell
# Reinstalar Semgrep
pip install --upgrade semgrep

# Verificar PATH
where semgrep
```

### La extensión de VS Code no funciona

**Solución:**
1. Verificar que Semgrep CLI está instalado
2. Recargar ventana: `Ctrl + Shift + P` → "Reload Window"
3. Verificar configuración en `.vscode/settings.json`

### No muestra errores en el código

**Solución:**
```powershell
# Ejecutar manualmente para ver output
npm run semgrep:custom

# Verificar que el archivo .semgrep.yml es válido
semgrep --validate --config=.semgrep.yml
```

---

## 📚 Recursos Adicionales

- [Documentación Oficial de Semgrep](https://semgrep.dev/docs/)
- [Semgrep Registry (Reglas)](https://semgrep.dev/explore)
- [VS Code Extension](https://marketplace.visualstudio.com/items?itemName=Semgrep.semgrep)
- [OWASP Top 10 Ruleset](https://semgrep.dev/p/owasp-top-ten)

---

## ✅ Checklist de Demostración

- [ ] Semgrep CLI instalado (`semgrep --version`)
- [ ] Extensión de VS Code instalada
- [ ] Ejecutar `npm run semgrep:custom` exitosamente
- [ ] Ver problemas en panel de VS Code
- [ ] Crear vulnerabilidad de prueba y ver detección
- [ ] Generar reporte JSON con `npm run semgrep:ci`
- [ ] Explicar cada regla en `.semgrep.yml`
- [ ] Mostrar integración con `npm run check-security`

---

**Última actualización:** Octubre 2025  
**Versión:** 1.0
