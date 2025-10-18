# 🎯 Índice Rápido de Especificaciones

## 📚 Documentos Generados

### 1. AGENTS.MD (Especificaciones Detalladas para Agentes de IA)
**Uso:** Referencia completa para desarrolladores e IA para mantener calidad y seguridad

#### Secciones Disponibles:
```
├── Principios Generales
│   ├── SOLID Principles (obligatorio)
│   ├── Legibilidad y convención
│   └── Testing First (BDD)
│
├── Convenciones Backend
│   ├── Estructura de carpetas
│   ├── Convenciones de nombres
│   ├── Estructura de controladores
│   ├── Estructura de servicios
│   ├── Endpoints claros
│   ├── Error handling
│   └── Testing con BDD
│
├── Convenciones Frontend
│   ├── Estructura de carpetas
│   ├── Convenciones de nombres
│   ├── Componentes bien estructurados
│   ├── Hooks personalizados
│   ├── Context y Providers
│   ├── Services (separación de preocupaciones)
│   └── Testing Frontend
│
├── Estándares de Seguridad
│   ├── Backend Security
│   │   ├── Validación de entrada
│   │   ├── Sanitización de datos
│   │   ├── Rate limiting
│   │   ├── CORS seguro
│   │   ├── Helmet headers
│   │   ├── JWT seguro
│   │   └── Logging
│   └── Frontend Security
│       ├── Sanitización de contenido
│       ├── Token storage seguro
│       ├── URL validation
│       └── CSP
│
├── Flujo de Desarrollo
│   ├── Paso 1: Crear Pruebas (Test-First)
│   ├── Paso 2: Implementar Funcionalidad
│   ├── Paso 3: Refactorización
│   ├── Paso 4: Validación de Seguridad
│   └── Paso 5: Commit y Push
│
├── Checklist de Calidad
│   ├── Convenciones de nombres
│   ├── Seguridad
│   ├── Testing
│   ├── Linting
│   ├── Build
│   ├── SOLID Principles
│   ├── Código limpio
│   └── Documentación
│
└── Stack Recomendado
    ├── Backend
    └── Frontend
```

---

### 2. README.md (Documentación Principal del Proyecto)
**Uso:** Overview del proyecto, arquitectura, quick start, documentación general

#### Secciones Disponibles:
```
├── Descripción del Proyecto
├── Arquitectura
│   ├── Backend (Node.js + Express)
│   └── Frontend (React + Vite)
├── Quick Start
│   ├── Requisitos previos
│   ├── Instalación
│   └── Desarrollo
├── Estructura del Proyecto
│   ├── Backend
│   └── Frontend
├── Convenciones de Código
│   ├── Backend
│   └── Frontend
├── Seguridad (Backend & Frontend)
├── Testing
├── SOLID Principles
├── Flujo de Desarrollo
├── Checklist Antes de Push
├── Stack Tecnológico
├── Documentación
├── Escaneo de Seguridad
├── Deployment
├── Variables de Entorno
└── Referencias
```

---

## ⚡ Guía Rápida de Uso

### Para Backend Developers

**Referencia Rápida:**
- Variables/funciones: `camelCase`
- Constantes: `UPPER_SNAKE_CASE`
- Clases/Servicios: `PascalCase`

**Flujo:**
1. Crear tests en `tests/unit/` o `tests/integration/`
2. Implementar en `src/`
3. Ejecutar: `npm run lint`, `npm test`, `npm run build`
4. Commit: `[tipo]: descripción`

**Checklist Seguridad:**
- ✅ Validación con Zod/Joi
- ✅ Sanitización XSS
- ✅ Rate limiting activado
- ✅ CORS restrictivo
- ✅ JWT con expiración corta
- ✅ Logging de eventos

---

### Para Frontend Developers

**Referencia Rápida:**
- Variables estado: `camelCase` con prefijo (`isLoading`, `currentUser`)
- Componentes: `PascalCase` (`ChatContainer`, `MessageList`)
- Hooks: `use` + `PascalCase` (`useAuth`, `useChat`)
- Constantes: `UPPER_SNAKE_CASE`

**Separación de Lógica:**
- Componentes → Presentación
- Hooks → Lógica de estado y efectos
- Services → Comunicación con API/WebSocket
- Context → Estado global
- Providers → Composición de contexts

**Flujo:**
1. Crear tests (Vitest)
2. Implementar componentes
3. Usar hooks para lógica
4. Services para comunicación
5. Context para estado global

**Checklist Seguridad:**
- ✅ Sanitizar con DOMPurify
- ✅ Token en sessionStorage (no localStorage)
- ✅ Validar URLs antes de redirect
- ✅ CSP configurado

---

## 🔐 Principios Clave

### SOLID
```
S - Single Responsibility
O - Open/Closed
L - Liskov Substitution
I - Interface Segregation
D - Dependency Inversion
```

### Testing
```
Test-First (TDD) → BDD (Given-When-Then) → 80% Coverage Mínimo
```

### Seguridad
```
Validación → Sanitización → Rate Limiting → Logging
```

### Código Limpio
```
Máx 50 líneas/función → Máx 3 niveles anidamiento → Sin comentarios innecesarios
```

---

## 📊 Checklist de Calidad (Antes de cada Commit)

```
☐ Nombres siguiendo convenciones (camelCase, UPPER_SNAKE_CASE, PascalCase)
☐ Entrada validada (schema validation)
☐ Salida sanitizada (XSS prevention)
☐ No hardcodear secrets
☐ Tests green (80% cobertura mínima)
☐ Linting sin errores: npm run lint
☐ Build sin errores: npm run build
☐ Código limpio (máx 50 líneas por función)
☐ SOLID principles aplicados
☐ Documentación actualizada
```

---

## 🛠️ Comandos Principales

### Backend
```bash
npm run dev              # Desarrollo con hot-reload
npm run lint             # ESLint
npm test                 # Jest tests
npm run build            # Compilar
npm start                # Producción
npm run generate-sbom    # Generar SBOM
```

### Frontend
```bash
npm run dev              # Vite dev server
npm run lint             # ESLint
npm test                 # Vitest
npm run build            # Build para producción
npm run preview          # Preview de build
```

---

## 📞 Contacto y Soporte

**Proyecto:** UNA Chat Backend - SSDLC Implementation  
**Autor:** Brandon Jafeth  
**Institución:** Universidad Nacional de Costa Rica (UNA)  
**Curso:** Ciberseguridad - Implementación Segura de Aplicaciones

---

## 📚 Enlaces Rápidos

- **AGENTS.MD** - Especificaciones detalladas
- **README.md** - Documentación principal
- **GENERACION_ESPECIFICACIONES.md** - Resumen de generación
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [SOLID Principles](https://en.wikipedia.org/wiki/SOLID)
- [Test-Driven Development](https://en.wikipedia.org/wiki/Test-driven_development)

---

**Última actualización:** Octubre 2025  
**Versión:** 1.0
