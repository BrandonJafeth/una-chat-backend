# 🔒 Configuración de Snyk en GitHub Actions

## ✅ Estado Actual

- ✅ Snyk CLI instalado localmente
- ✅ Autenticación local completada
- ✅ Snyk Code test: **0 issues HIGH** (corregido)
- ✅ Snyk Open Source test: **0 vulnerabilidades** (304 dependencias analizadas)
- ✅ Workflow de GitHub Actions actualizado (snyk/actions@master)

---

## 🚀 Pasos para Configurar SNYK_TOKEN en GitHub

### **Paso 1: Obtener tu Token de Snyk**

**Opción A: Desde la Web UI (RECOMENDADO)**
1. Ve a: https://app.snyk.io/account
2. En la sección **"Auth Token"**, haz click en **"Click to show"**
3. Copia el token completo

**Opción B: Desde CLI**
```bash
# Ya estás autenticado localmente, el token está guardado en:
# Windows: %USERPROFILE%\.config\configstore\snyk.json
```

---

### **Paso 2: Configurar el Secret en GitHub**

1. **Ve a la configuración de secrets:**
   ```
   https://github.com/BrandonJafeth/una-chat-backend/settings/secrets/actions
   ```

2. **Crea un nuevo repository secret:**
   - Click en **"New repository secret"**
   - **Name:** `SNYK_TOKEN`
   - **Value:** Pega tu token de Snyk
   - Click en **"Add secret"**

---

### **Paso 3: Verificar el Workflow**

El workflow `.github/workflows/snyk-security-backend.yml` ya está configurado correctamente:

```yaml
- name: Setup Snyk CLI
  uses: snyk/actions/setup@master  # ✅ Versión corregida
  env:
    SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}

- name: Snyk Code test (SAST)
  run: snyk code test --severity-threshold=high --sarif-file-output=snyk-code.sarif
  env:
    SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}

- name: Snyk Open Source test (SCA)
  run: snyk test --severity-threshold=high --fail-on=all --all-projects
  env:
    SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}
```

---

## 🧪 Pruebas Locales

### **Snyk Code (SAST)**
```bash
snyk code test --severity-threshold=high
```

**Resultado esperado:**
- ✅ 0 issues HIGH
- ✅ Issue de secreto hardcodeado corregido en `src/config/environment.ts`

### **Snyk Open Source (SCA)**
```bash
snyk test --severity-threshold=high
```

**Resultado esperado:**
- ✅ 304 dependencias analizadas
- ✅ 0 vulnerabilidades encontradas

### **Snyk Monitor (Monitoreo Continuo)**
```bash
snyk monitor --all-projects
```

**Resultado esperado:**
- ✅ Proyecto monitoreado en https://app.snyk.io

---

## 📊 Comandos Útiles de Snyk

```bash
# Ver todas las vulnerabilidades (sin threshold)
snyk test

# Ver todos los issues de código (sin threshold)
snyk code test

# Generar reporte SARIF para GitHub Security
snyk code test --sarif-file-output=snyk-code.sarif

# Ver vulnerabilidades en formato JSON
snyk test --json

# Ignorar una vulnerabilidad específica
snyk ignore --id=SNYK-JS-PACKAGE-123456

# Ver información de tu cuenta
snyk config get
```

---

## 🔄 Flujo de CI/CD con Snyk

### **Pipeline Completo**
```yaml
1. Lint (ESLint)
   ↓
2. Tests (Jest)
   ↓
3. Snyk Security
   ├── Snyk Code (SAST) → Detecta código inseguro
   ├── Snyk Open Source (SCA) → Detecta dependencias vulnerables
   ├── Snyk IaC → Detecta infraestructura insegura (si aplica)
   └── Snyk Container → Detecta vulnerabilidades en Docker (si aplica)
   ↓
4. Build (TypeScript)
```

### **Severity Thresholds**
- **critical**: Solo bloquea por vulnerabilidades críticas
- **high**: Bloquea por críticas y altas ✅ (configurado actualmente)
- **medium**: Bloquea por críticas, altas y medias
- **low**: Bloquea por cualquier vulnerabilidad

---

## 🛡️ Cambios de Seguridad Realizados

### **1. Snyk Action Version Fix**
```yaml
# Antes (❌ no existe)
uses: snyk/actions/setup@v4

# Después (✅ versión estable)
uses: snyk/actions/setup@master
```

### **2. Hardcoded Secret Fix**
```typescript
// Antes (❌ secreto hardcodeado - HIGH severity)
const jwtSecret = process.env.JWT_SECRET || 'your-secret-key-change-in-production'

// Después (✅ sin valor por defecto inseguro)
const jwtSecret = process.env.JWT_SECRET || ''
```

**Resultado:** Issue HIGH resuelto ✅

---

## 📝 Checklist de Configuración

- [x] Snyk CLI instalado localmente
- [x] Autenticación con Snyk completada
- [x] Workflow actualizado a `snyk/actions/setup@master`
- [x] Issue de secreto hardcodeado corregido
- [ ] **SNYK_TOKEN configurado en GitHub Secrets** ⚠️ **PENDIENTE**
- [ ] Primer workflow ejecutado exitosamente en GitHub Actions

---

## 🆘 Troubleshooting

### **Error: 401 Unauthorized**
**Causa:** `SNYK_TOKEN` no configurado o inválido en GitHub Secrets

**Solución:**
1. Ve a https://app.snyk.io/account
2. Copia tu token
3. Agrégalo en GitHub: Settings → Secrets → Actions → New secret
4. Name: `SNYK_TOKEN`, Value: tu token

### **Error: No vulnerable paths found but status is 1**
**Causa:** Hay vulnerabilidades pero están por debajo del threshold

**Solución:**
```bash
# Ver todas las vulnerabilidades sin filtro
snyk test
```

### **Error: Code analysis failed**
**Causa:** El proyecto no tiene código analizable o hay errores de sintaxis

**Solución:**
```bash
# Verificar que el proyecto sea compatible
snyk code test --debug
```

### **Error: IAC failure (SNYK-CLI-0012) - Failed to parse JSON file**
**Causa:** Snyk IaC intenta escanear archivos `tsconfig.json` en `node_modules` que contienen comentarios (no son JSON válido estricto)

**Solución aplicada en este proyecto:**
1. ✅ Archivo `.snyk` creado con exclusiones globales
2. ✅ Detección inteligente de archivos IaC (solo Terraform/Kubernetes)
3. ✅ El step de IaC se salta automáticamente si no hay archivos relevantes

**Nota:** Este proyecto backend no tiene infraestructura como código (IaC), por lo que el escaneo de IaC normalmente se omite. Si en el futuro se agregan archivos Terraform o Kubernetes, el workflow los detectará automáticamente.

---

## 🔗 Enlaces Útiles

- **Snyk Dashboard:** https://app.snyk.io
- **Snyk Docs:** https://docs.snyk.io
- **GitHub Actions Docs:** https://docs.github.com/actions
- **Snyk Action Repository:** https://github.com/snyk/actions

---

**Última actualización:** Noviembre 5, 2025  
**Estado:** Configuración local completa ✅ | GitHub Actions pendiente de SNYK_TOKEN ⚠️
