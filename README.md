# 🔒 UNA Chat Backend - SSDLC Implementation# 🔒 UNA Chat Backend - SSDLC Implementation



[![Security-First](https://img.shields.io/badge/approach-security%20first-brightgreen)](./AGENTS.MD)[![Security-First](https://img.shields.io/badge/approach-security%20first-brightgreen)](./AGENTS.MD)

[![SOLID Principles](https://img.shields.io/badge/architecture-SOLID-blue)](./AGENTS.MD)[![SOLID Principles](https://img.shields.io/badge/architecture-SOLID-blue)](./AGENTS.MD)

[![Test-First Development](https://img.shields.io/badge/methodology-TDD%2FBDD-yellow)](./AGENTS.MD)[![Test-First Development](https://img.shields.io/badge/methodology-TDD%2FBDD-yellow)](./AGENTS.MD)

[![Coverage](https://img.shields.io/badge/coverage-87%25-green)]()[![Coverage](https://img.shields.io/badge/coverage-87%25-green)]()



Backend seguro para aplicación de chat en tiempo real con autenticación, validación y sanitización siguiendo **SSDLC (Secure Software Development Lifecycle)**.Backend seguro para aplicación de chat en tiempo real con autenticación, validación y sanitización siguiendo **SSDLC (Secure Software Development Lifecycle)**.



------



## 📚 Descripción del Proyecto##  Descripción del Proyecto



Este proyecto es parte de un curso de **Ciberseguridad - Implementación Segura de Aplicaciones** en la Universidad Nacional de Costa Rica (UNA). El objetivo principal es desarrollar una aplicación fullstack con máxima calidad, seguridad y mantenibilidad.Este proyecto es parte de un curso de **Ciberseguridad - Implementación Segura de Aplicaciones** en la Universidad Nacional de Costa Rica (UNA). El objetivo principal es desarrollar una aplicación fullstack con máxima calidad, seguridad y mantenibilidad.



### Puntos de Enfoque### Puntos de Enfoque



1. **SBOM (Software Bill of Materials)** - Documentación de dependencias1. **SBOM (Software Bill of Materials)** - Documentación de dependencias

2. **Análisis Estático de Seguridad** - Escaneo local de vulnerabilidades

3. **Validación de Código** - Linting, formatting, testing

4. **Seguridad en Desarrollo** - Validación, sanitización, rate limiting

### Access Points2. **Análisis Estático de Seguridad** - Escaneo local de vulnerabilidades

---



## 🚀 Quick Start

- **API Base:** http://localhost:5000/api3. **Validación de Código** - Linting, formatting, testing## 📚 Descripción del Proyecto```

```bash

# Install dependencies- **Swagger Docs:** http://localhost:5000/api-docs

npm install

- **Health Check:** http://localhost:5000/api/health4. **Seguridad en Desarrollo** - Validación, sanitización, rate limiting

# Run development server

npm run dev



# Run tests with coverage---

npm test



# Build for production

npm run build## 📚 API Documentation (Swagger)---



# Run production server

npm start

```Interactive API documentation available at:Este proyecto es parte de un curso de **Ciberseguridad - Implementación Segura de Aplicaciones** en la Universidad Nacional de Costa Rica (UNA). El objetivo principal es desarrollar una aplicación fullstack con máxima calidad, seguridad y mantenibilidad.## Desarrollo



### Access Points



- **API Base:** http://localhost:5000/api```## 🏗️ Arquitectura

- **Swagger Docs:** http://localhost:5000/api-docs

- **Health Check:** http://localhost:5000/api/healthhttp://localhost:5000/api-docs



---```



## 📦 SBOM - Software Bill of Materials



**Última actualización:** 8 de Noviembre, 2025 | **Versión:** 1.1### Swagger Features### Backend (Node.js + Express)



### 📊 Resumen Ejecutivo✅ Test endpoints directly in browser  



- ✅ **Total de dependencias:** 38 (20 frontend + 18 backend)✅ View request/response schemas  - **Patrón:** Arquitectura por Capas (Layered Architecture)### Puntos de EnfoquePara ejecutar en modo desarrollo con recarga automática:

- 🚨 **Componentes críticos:** 1 (requiere acción inmediata)

- 🔶 **Componentes de alto riesgo:** 7 (con controles implementados)✅ Automatic data validation  

- ⚠️ **Componentes de riesgo medio:** 6 (monitoreo requerido)

- ✅ **Componentes de bajo riesgo:** 24✅ Copy cURL and code examples  - **API:** REST + WebSockets (Socket.IO)



### 🎯 Matriz de Riesgos - Componentes Críticos



**Escala:** Riesgo Inherente (R) = Probabilidad (P) × Impacto (I)  📖 See [SWAGGER_DOCS.md](./SWAGGER_DOCS.md) for detailed documentation.- **Autenticación:** Auth0 + JWT

**Umbrales:** 1-4=Bajo ✅ | 5-9=Medio ⚠️ | 10-15=Alto 🔶 | 16-25=Crítico 🚨



#### 🚨 Riesgo Crítico (R ≥ 16)

---- **Base de Datos:** Flexible (MongoDB, PostgreSQL, etc.)

| Componente | Versión | P | I | R | Estado | Acción |

|------------|---------|---|---|---|--------|--------|

| **semgrep** | 0.0.1 | 5 | 4 | **20** | 🚨 Crítico | **ACTUALIZAR URGENTE** a v1.50+ |

## 🛡️ Security Features1. **SBOM (Software Bill of Materials)** - Documentación de dependencias```bash

**Justificación:** Versión extremadamente desactualizada. No detecta vulnerabilidades modernas. Reglas obsoletas.  

**Alternativas:** Snyk, SonarQube, ESLint Security Plugins



#### 🔶 Alto Riesgo (R = 10-15)| Feature | Implementation |### Frontend (React + Vite)



| Componente | Versión | Licencia | P | I | R | Controles Implementados ||---------|---------------|

|------------|---------|----------|---|---|---|-------------------------|

| **xss** | 1.0.14 | MIT | 3 | 5 | **15** | ⚠️ Poco mantenimiento<br>✅ Respaldo con isomorphic-dompurify<br>📌 **Recomendación:** Migrar a DOMPurify || **HTTP Security Headers** | Helmet with CSP |- **Patrón:** Arquitectura Híbrida (Feature-Based + Component-Based)2. **Análisis Estático de Seguridad** - Escaneo local de vulnerabilidadesnpm run dev

| **express** | 4.18.2 | MIT | 2 | 5 | **10** | ✅ Helmet configurado<br>✅ Rate limiting activo<br>✅ Input validation (Zod) |

| **socket.io** | 4.7.2 | MIT | 2 | 5 | **10** | ✅ Auth en handshake<br>✅ Rate limiting por socket<br>✅ Message validation || **CORS** | Restricted origins |

| **socket.io-client** | 4.8.1 | MIT | 2 | 5 | **10** | ✅ TLS obligatorio<br>✅ Sanitización<br>✅ Timeout configurado |

| **@auth0/auth0-react** | 2.8.0 | MIT | 2 | 5 | **10** | ✅ OAuth2/OIDC<br>✅ Token rotation<br>✅ Rate limiting login || **Rate Limiting** | Global: 100 req/min, Messages: 30 req/min |- **State Management:** TanStack Query + Context API

| **express-jwt** | 8.5.1 | MIT | 2 | 5 | **10** | ✅ RS256 algorithm<br>✅ Issuer validation<br>✅ Token exp: 15min |

| **jwks-rsa** | 3.2.0 | MIT | 2 | 5 | **10** | ✅ Key caching<br>✅ Issuer validation || **Input Validation** | Zod schemas |



#### ⚠️ Riesgo Medio (R = 5-9)| **XSS Protection** | Sanitization with xss library |- **Comunicación Real-Time:** Socket.IO Client3. **Validación de Código** - Linting, formatting, testing```



| Componente | Versión | R | Observaciones || **URL Validation** | Whitelisted domains for media |

|------------|---------|---|---------------|

| **cors** | 2.8.5 | **8** | ✅ Origins específicos configurados<br>❌ No usar wildcard (*) || **Error Handling** | Centralized, no detail exposure |- **Validación:** Zod + React Hook Form

| **axios** | 1.12.2 | **8** | ✅ URL validation<br>✅ Timeout: 10s<br>⚠️ Historial: SSRF en v0.21.x (resuelto) |

| **react** | 19.1.1 | **5** | ✅ Meta/Facebook mantiene<br>✅ Sin CVEs conocidos || **Logging** | Winston with security events |

| **dompurify** | 3.3.0 | **5** | ✅ Cure53 (firma de seguridad)<br>✅ Apache-2.0/MPL-2.0 |

| **isomorphic-dompurify** | 2.9.0 | **5** | ✅ Server-side sanitization<br>📌 Preferir sobre xss |4. **Seguridad en Desarrollo** - Validación, sanitización, rate limiting



### 📋 Inventario de Dependencias---



#### Backend (18 dependencias)---



**🔒 Seguridad**## 📦 Tech Stack

```json

{## Build

  "helmet": "8.1.0",                   // Security headers

  "cors": "2.8.5",                     // CORS middleware### Runtime & Framework

  "express-rate-limit": "8.1.0",       // Rate limiting

  "xss": "1.0.14",                     // XSS prevention (⚠️ reemplazar)- **Node.js** 18+ with TypeScript 5.1+## 🚀 Quick Start

  "isomorphic-dompurify": "2.9.0",     // Sanitización mejorada

  "express-jwt": "8.5.1",              // JWT validation- **Express** 4.18

  "express-oauth2-jwt-bearer": "1.7.1", // OAuth2 JWT

  "jwks-rsa": "3.2.0"                  // JWKS client- **Socket.IO** 4.7 (Real-time communication)---

}

```



**🌐 Framework**### Security & Validation### Requisitos Previos

```json

{- **Helmet** 8.1 - HTTP security headers

  "express": "4.18.2",                 // Web framework

  "socket.io": "4.7.2",                // WebSocket server- **CORS** 2.8 - Cross-Origin Resource Sharing- Node.js 18+Para compilar TypeScript a JavaScript:

  "zod": "3.22.4",                     // Validation (actualizar a 4.x)

  "dotenv": "16.3.1"                   // Environment config- **express-rate-limit** 8.1 - Brute force protection

}

```- **Zod** 3.22 - Schema validation- npm o yarn



**📝 Logging y Docs**- **xss** 1.0 - XSS sanitization

```json

{- Git## 🏗️ Arquitectura

  "winston": "3.11.0",                 // Logger

  "@sentry/node": "10.22.0",           // Error tracking### Testing & Quality

  "swagger-jsdoc": "6.2.8",            // API docs generator

  "swagger-ui-express": "5.0.0"        // API docs UI- **Jest** 29.7 - Testing framework

}

```- **Supertest** 7.1 - HTTP integration testing



#### Frontend (20 dependencias)- **Coverage:** 87%+ (39 tests passing)### Instalación```bash



**🔐 Autenticación**- **ESLint** - Code linting

```json

{- **TypeScript** - Type safety

  "@auth0/auth0-react": "2.8.0",       // OAuth2/OIDC

  "dompurify": "3.3.0",                // XSS prevention

  "zod": "4.1.12"                      // Schema validation

}### Documentation```bash### Backend (Node.js + Express)npm run build

```

- **Swagger UI Express** 5.0 - API documentation

**🌐 Comunicación**

```json- **Swagger JSDoc** 6.2 - OpenAPI 3.0 spec generation# Clonar repositorio

{

  "axios": "1.12.2",                   // HTTP client

  "socket.io-client": "4.8.1"          // WebSocket client

}---git clone https://github.com/BrandonJafeth/una-chat-backend.git- **Patrón:** Arquitectura por Capas (Layered Architecture)```

```



**🎨 UI**

```json## 📁 Project Structurecd una-chat-backend

{

  "react": "19.1.1",                   // UI framework

  "react-dom": "19.1.1",               // React renderer

  "tailwindcss": "4.1.14",             // CSS framework```- **API:** REST + WebSockets (Socket.IO)

  "clsx": "2.1.1",                     // Utility

  "@sentry/react": "10.22.0"           // Error trackingsrc/

}

```├── config/# Instalar dependencias



### 📊 Cumplimiento de Licencias│   ├── environment.ts       # Environment variables



✅ **Todas las licencias son compatibles con uso comercial**│   ├── security.config.ts   # Helmet, CORS, CSPnpm install- **Autenticación:** Auth0 + JWT## Ejecución



| Licencia | Componentes | Restricciones |│   └── swagger.config.ts    # OpenAPI 3.0 specification

|----------|-------------|---------------|

| **MIT** | 28 | ✅ Ninguna (mantener copyright) |│

| **BSD-2/BSD-3** | 4 | ✅ Ninguna (mantener copyright) |

| **Apache-2.0** | 3 | ✅ Ninguna (patent grant incluido) |├── controllers/

| **MPL-2.0** | 2 | ✅ Solo archivos modificados |

| **LGPL-2.1** | 1 | ✅ Compatible (solo runtime) |│   ├── chat.controller.ts   # Chat message handlers# Configurar variables de entorno- **Base de Datos:** Flexible (MongoDB, PostgreSQL, etc.)



### 🚨 Plan de Acción Inmediato│   └── health.controller.ts # Health check



#### 1. CRÍTICO - Actualizar Semgrep (Esta semana)│cp .env.example .env

```bash

# Desinstalar versión obsoleta├── middlewares/

npm uninstall semgrep

│   ├── validation.middleware.ts     # Zod schema validation```Para ejecutar la aplicación compilada:

# Instalar versión actual

npm install --save-dev @semgrep/cli@latest│   ├── sanitization.middleware.ts   # XSS sanitization



# O usar con Docker│   ├── rateLimit.middleware.ts      # Rate limiting

docker run --rm -v "${PWD}:/src" semgrep/semgrep semgrep scan --config=auto

```│   └── errorHandler.middleware.ts   # Centralized error handling



#### 2. ALTO - Reemplazar librería xss (2 semanas)│### Desarrollo### Frontend (React + Vite)

```bash

# Remover xss├── services/

npm uninstall xss

│   ├── message.service.ts   # Message business logic

# Refactorizar código:

# ❌ Antes│   ├── security.service.ts  # Security utilities

import xss from 'xss'

const clean = xss(userInput)│   └── logger.service.ts    # Winston logger```bash- **Patrón:** Arquitectura Híbrida (Feature-Based + Component-Based)```bash



# ✅ Después│

import DOMPurify from 'isomorphic-dompurify'

const clean = DOMPurify.sanitize(userInput)├── routes/# Ejecutar en modo desarrollo con hot-reload

```

│   ├── index.ts             # Route aggregator

#### 3. MEDIO - Actualizar Zod en Backend (1 mes)

```bash│   ├── chat.routes.ts       # Chat endpoints (with Swagger docs)npm run dev- **State Management:** TanStack Query + Context APInpm start

# Backend: v3.22.4 → v4.1.12

npm update zod@latest│   └── health.routes.ts     # Health endpoint (with Swagger docs)

```

│

### 🔄 Auditoría Continua

├── utils/

```bash

# Verificar vulnerabilidades│   ├── validators.ts        # Custom validators# Ejecutar linting- **Comunicación Real-Time:** Socket.IO Client```

npm audit

│   └── asyncHandler.ts      # Async error wrapper

# Verificar versiones desactualizadas

npm outdated│npm run lint



# Escaneo de seguridad (después de actualizar Semgrep)├── app.ts                   # Express app configuration

npx @semgrep/cli scan --config=auto

```└── server.ts                # Entry point- **Validación:** Zod + React Hook Form



### 📚 Referencias de Seguridad



- [OWASP Top 10 2021](https://owasp.org/www-project-top-ten/)tests/# Ejecutar tests

- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)

- [NPM Security Advisories](https://github.com/advisories)├── unit/

- [Snyk Vulnerability Database](https://security.snyk.io/)

│   ├── services/npm testLa aplicación escuchará en `http://localhost:3000`

**Próxima revisión SBOM:** 8 de Febrero, 2026

│   └── middlewares/

---

└── integration/

## 🛡️ Security Features

    ├── health.integration.test.ts

| Feature | Implementation |

|---------|---------------|    └── chat.integration.test.ts# Build de producción---

| **HTTP Security Headers** | Helmet with CSP |

| **CORS** | Restricted origins |```

| **Rate Limiting** | Global: 100 req/min, Messages: 30 req/min |

| **Input Validation** | Zod schemas |npm run build

| **XSS Protection** | Sanitization with isomorphic-dompurify |

| **URL Validation** | Whitelisted domains for media |---

| **Error Handling** | Centralized, no detail exposure |

| **Logging** | Winston with security events |## Estructura del Proyecto

| **Authentication** | Auth0 + JWT (RS256) |

## 📝 Available Endpoints

---

# Ejecutar aplicación compilada

## 📁 Project Structure

### Health Check

```

src/```httpnpm start## 🚀 Quick Start

├── config/

│   ├── environment.ts       # Environment variablesGET /api/health

│   ├── security.config.ts   # Helmet, CORS, CSP

│   └── swagger.config.ts    # OpenAPI 3.0 specification``````

│

├── controllers/

│   ├── chat.controller.ts   # Chat message handlers

│   └── health.controller.ts # Health check**Response (200):**```

│

├── middlewares/```json

│   ├── validation.middleware.ts     # Zod schema validation

│   ├── sanitization.middleware.ts   # XSS sanitization{---

│   ├── rateLimit.middleware.ts      # Rate limiting

│   └── errorHandler.middleware.ts   # Centralized error handling  "message": "OK",

│

├── services/  "uptime": 12345.67,### Requisitos Previos├── src/

│   ├── message.service.ts   # Message business logic

│   ├── security.service.ts  # Security utilities  "timestamp": "2025-10-18T12:00:00.000Z",

│   └── logger.service.ts    # Winston logger

│  "environment": "development"## 📁 Estructura del Proyecto

├── routes/

│   ├── index.ts             # Route aggregator}

│   ├── chat.routes.ts       # Chat endpoints

│   └── health.routes.ts     # Health endpoint```- Node.js 18+│   └── app.ts          # Archivo principal de la aplicación

│

├── sockets/

│   └── chat.handler.ts      # WebSocket handlers

│### Send Message### Backend

├── utils/

│   ├── validators.ts        # Custom validators```http

│   └── asyncHandler.ts      # Async error wrapper

│POST /api/chat/messages```- npm o yarn├── dist/               # Archivos compilados (generado por npm run build)

├── app.ts                   # Express app configuration

└── server.ts                # Entry point```



tests/backend/

├── unit/

│   ├── services/**Request Body:**

│   └── middlewares/

└── integration/```json├── src/- Git├── package.json        # Dependencias del proyecto

    ├── health.integration.test.ts

    └── chat.integration.test.ts{

```

  "nombre": "JohnDoe",│   ├── config/           # Configuración (env, security, socket, auth0)

---

  "mensaje": "Hello everyone!",

## 📝 Available Endpoints

  "color": "#FF5733"│   ├── controllers/      # Controladores HTTP/Socket├── tsconfig.json       # Configuración de TypeScript

### Health Check

```http}

GET /api/health

``````│   ├── middlewares/      # Middlewares (auth, validation, error handling)



**Response (200):**

```json

{**Validation:**│   ├── services/         # Lógica de negocio### Instalación├── .gitignore          # Archivos a ignorar en Git

  "message": "OK",

  "uptime": 12345.67,- `nombre`: 3-50 characters

  "timestamp": "2025-11-08T12:00:00.000Z",

  "environment": "development"- `mensaje`: 1-5000 characters│   ├── routes/           # Definición de rutas

}

```- `color`: Hex format (#RGB or #RRGGBB)



### Send Message│   ├── sockets/          # Handlers de WebSocket└── README.md           # Este archivo

```http

POST /api/chat/messages**Response (200):**

```

```json│   ├── utils/            # Utilidades y helpers

**Request Body:**

```json{

{

  "nombre": "JohnDoe",  "success": true,│   └── app.js            # Configuración de Express```bash```

  "mensaje": "Hello everyone!",

  "color": "#FF5733"  "data": {

}

```    "nombre": "JohnDoe",├── tests/



**Validation:**    "mensaje": "Hello everyone!",

- `nombre`: 3-50 characters

- `mensaje`: 1-5000 characters    "color": "#FF5733",│   ├── unit/             # Tests unitarios# Clonar repositorio

- `color`: Hex format (#RGB or #RRGGBB)

    "timestamp": "2025-10-18T12:00:00.000Z"

**Response (200):**

```json  }│   └── integration/      # Tests de integracióngit clone https://github.com/BrandonJafeth/una-chat-backend.git

{

  "success": true,}

  "data": {

    "nombre": "JohnDoe",```└── server.js             # Entry pointcd una-chat-backend

    "mensaje": "Hello everyone!",

    "color": "#FF5733",

    "timestamp": "2025-11-08T12:00:00.000Z"

  }**Error (400 - Validation):**```

}

``````json



📖 **Full documentation:** http://localhost:5000/api-docs{# Instalar dependencias



---  "success": false,



## 🧪 Testing  "error": {### Frontendnpm install



```bash    "code": "VALIDATION_ERROR",

# Run all tests with coverage

npm test    "message": "Invalid username length",```



# Run tests in watch mode    "timestamp": "2025-10-18T12:00:00.000Z"

npm run test:watch

  }frontend/src/# Configurar variables de entorno

# Run specific test file

npm test -- security.service.test.ts}

```

```├── assets/               # Imágenes, fuentes, etc.cp .env.example .env

### Test Coverage



```

-----------------------------|---------|----------|---------|---------|**Error (429 - Rate Limit):**├── components/           # Componentes React (auth, chat, common, layout)```

File                         | % Stmts | % Branch | % Funcs | % Lines |

-----------------------------|---------|----------|---------|---------|```json

All files                    |   87.91 |    73.03 |   88.67 |   88.19 |

-----------------------------|---------|----------|---------|---------|{├── hooks/                # Custom hooks (useAuth, useSocket, useChat)

```

  "message": "Too many requests, please try again later"

✅ **39 tests passing** across 5 test suites  

✅ **87%+ coverage** in statements, functions, and lines  }├── context/              # Context API (AuthContext, ChatContext)### Desarrollo

⚠️ **73% branch coverage** (below 80% threshold but acceptable)

```

---

├── services/             # Servicios (api, auth, socket, security)

## 📋 Convenciones de Código

### Get Message History

Siguiendo las especificaciones de [AGENTS.MD](./AGENTS.MD):

```http├── utils/                # Utilidades (validators, sanitizers, constants)```bash

### ✅ Backend

GET /api/chat/messages/history

#### Variables y Funciones (camelCase)

```javascript```├── pages/                # Páginas (Home, Login, Chat, NotFound)# Ejecutar en modo desarrollo con hot-reload

const getUserById = (userId) => { /* ... */ }

const isValidEmail = (email) => { /* ... */ }

```

**Response (200):**├── styles/               # Estilos globales y Tailwindnpm run dev

#### Constantes (UPPER_SNAKE_CASE)

```javascript```json

const MAX_LOGIN_ATTEMPTS = 5

const RATE_LIMIT_WINDOW = 15 * 60 * 1000{└── main.jsx              # Entry point

```

  "success": true,

#### Clases y Servicios (PascalCase)

```javascript  "data": [],```# Ejecutar linting

class UserService { /* ... */ }

class AuthMiddleware { /* ... */ }  "message": "Message history not implemented yet"

```

}npm run lint

### ✅ Frontend

```

#### Variables de Estado (camelCase con prefijo descriptivo)

```javascript---

const [currentUser, setCurrentUser] = useState(null)

const [chatMessages, setChatMessages] = useState([])📖 **Full documentation with examples:** http://localhost:5000/api-docs

const [isLoadingMessages, setIsLoadingMessages] = useState(false)

```# Ejecutar tests



#### Componentes (PascalCase)---

```javascript

function ChatContainer() { /* ... */ }## 📋 Convenciones de Códigonpm test

function MessageList({ messages }) { /* ... */ }

```## 🧪 Testing



#### Hooks Personalizados (use + PascalCase)

```javascript

function useAuth() { /* ... */ }```bash

function useChat() { /* ... */ }

```# Run all tests with coverage### ✅ Backend# Build de producción



---npm test



## 📊 SOLID Principlesnpm run build



Todos los componentes DEBEN seguir SOLID:# Run tests in watch mode



- **S** - Single Responsibility: Una función/clase, una responsabilidadnpm run test:watch#### Variables y Funciones (camelCase)

- **O** - Open/Closed: Extendible sin modificar código existente

- **L** - Liskov Substitution: Sustitución segura de tipos

- **I** - Interface Segregation: Interfaces específicas, no genéricas

- **D** - Dependency Inversion: Inyección de dependencias# Run specific test file```javascript# Ejecutar aplicación compilada



---npm test -- security.service.test.ts



## 🔄 Flujo de Desarrollo```const getUserById = (userId) => { /* ... */ }npm start



### 1. Crear Tests (Test-First)

```bash

# Crear archivo de test en tests/unit o tests/integration### Test Coverageconst isValidEmail = (email) => { /* ... */ }```

# Escribir casos usando BDD (Given-When-Then)

# Tests deben FALLAR inicialmente (Red phase)

```

``````

### 2. Implementar Código

```bash-----------------------------|---------|----------|---------|---------|

# Escribir código mínimo para pasar tests (Green phase)

# Seguir convenciones de nombresFile                         | % Stmts | % Branch | % Funcs | % Lines |---

# Aplicar SOLID principles

```-----------------------------|---------|----------|---------|---------|



### 3. RefactorizarAll files                    |   87.91 |    73.03 |   88.67 |   88.19 |#### Constantes (UPPER_SNAKE_CASE)

```bash

# Mejorar legibilidad (Blue phase)-----------------------------|---------|----------|---------|---------|

# Reducir duplicación

# Tests deben seguir pasando``````javascript## 📁 Estructura del Proyecto

```



### 4. Validación

```bash✅ **39 tests passing** across 5 test suites  const MAX_LOGIN_ATTEMPTS = 5

npm run lint       # ESLint

npm test           # Tests + cobertura (mínimo 80%)✅ **87%+ coverage** in statements, functions, and lines  

npm run build      # Compilación

```⚠️ **73% branch coverage** (below 80% threshold but acceptable)const RATE_LIMIT_WINDOW = 15 * 60 * 1000### Backend



### 5. Commit

```bash

# Formato: [tipo]: descripción### Test Organization``````

# feat: add user authentication

# fix: resolve login bug

# docs: update README

# refactor: improve message service```backend/

# test: add security service tests

```tests/



---├── unit/#### Clases y Servicios (PascalCase)├── src/



## ✅ Checklist Antes de Push│   ├── services/



- [ ] ✅ Convenciones de nombres seguidas│   │   ├── message.service.test.ts      (14 tests)```javascript│   ├── config/           # Configuración (env, security, socket, auth0)

- [ ] ✅ Entrada validada (Zod schemas)

- [ ] ✅ Salida sanitizada (DOMPurify)│   │   └── security.service.test.ts     (11 tests)

- [ ] ✅ No hardcodear secrets

- [ ] ✅ Tests green (80% cobertura mínima)│   └── middlewares/class UserService { /* ... */ }│   ├── controllers/      # Controladores HTTP/Socket

- [ ] ✅ Linting sin errores (`npm run lint`)

- [ ] ✅ Build sin errores (`npm run build`)│       └── errorHandler.test.ts         (7 tests)

- [ ] ✅ Código limpio (máx 50 líneas por función)

- [ ] ✅ SOLID principles aplicados└── integration/class AuthMiddleware { /* ... */ }│   ├── middlewares/      # Middlewares (auth, validation, error handling)

- [ ] ✅ Documentación actualizada

- [ ] ✅ Sin comentarios innecesarios    ├── health.integration.test.ts       (1 test)

- [ ] ✅ Sin emojis en código

    └── chat.integration.test.ts         (6 tests)```│   ├── services/         # Lógica de negocio

---

```

## 🛠️ Stack Tecnológico

│   ├── routes/           # Definición de rutas

### Backend

---

| Categoría | Tecnología |

|-----------|-----------|### ✅ Frontend│   ├── sockets/          # Handlers de WebSocket

| Framework | Express.js 4.18 |

| Runtime | Node.js 18+ |## 🔧 Environment Variables

| Lenguaje | TypeScript 5.1+ |

| Auth | Auth0 + JWT |│   ├── utils/            # Utilidades y helpers

| Validación | Zod 3.22 |

| Logger | Winston 3.11 |Create a `.env` file in the root directory:

| Testing | Jest 29.7 + Supertest 7.1 |

| Linting | ESLint + Prettier |#### Variables de Estado (camelCase con prefijo descriptivo)│   └── app.js            # Configuración de Express

| Security | Helmet 8.1, express-rate-limit 8.1, isomorphic-dompurify 2.9 |

| WebSocket | Socket.IO 4.7 |```env

| Docs | Swagger UI Express 5.0 + Swagger JSDoc 6.2 |

| Monitoring | Sentry 10.22 |# Server Configuration```javascript├── tests/



### FrontendPORT=5000



| Categoría | Tecnología |NODE_ENV=developmentconst [currentUser, setCurrentUser] = useState(null)│   ├── unit/             # Tests unitarios

|-----------|-----------|

| Framework | React 19.1 |MAX_REQUEST_SIZE=1mb

| Build Tool | Vite 4.1 |

| Styling | Tailwind CSS 4.1 |const [chatMessages, setChatMessages] = useState([])│   └── integration/      # Tests de integración

| HTTP Client | Axios 1.12 |

| State | TanStack Query + Context API |# CORS

| Forms | React Hook Form + Zod 4.1 |

| Testing | Vitest + React Testing Library |ALLOWED_ORIGINS=http://localhost:3000const [isLoadingMessages, setIsLoadingMessages] = useState(false)└── server.js             # Entry point

| Linting | ESLint + Prettier |

| WebSocket | Socket.IO Client 4.8 |

| Auth | Auth0 React 2.8 |

| Security | DOMPurify 3.3 |# Logging``````

| Monitoring | Sentry React 10.22 |

LOG_LEVEL=info

---



## 📚 Documentación

# Rate Limiting (optional, defaults are set)

- **[AGENTS.MD](./AGENTS.MD)** - Especificaciones completas para agentes de IA y desarrollo

- **[SWAGGER_DOCS.md](./SWAGGER_DOCS.md)** - Guía de documentación de APIRATE_LIMIT_WINDOW_MS=60000#### Componentes (PascalCase)### Frontend

- **Interactive API Docs:** http://localhost:5000/api-docs

RATE_LIMIT_MAX_REQUESTS=100

---

``````javascript```

## 🔧 Environment Variables



Create a `.env` file in the root directory:

---function ChatContainer() { /* ... */ }frontend/src/

```env

# Server Configuration

PORT=5000

NODE_ENV=development## 👥 Development Guidelinesfunction MessageList({ messages }) { /* ... */ }├── assets/               # Imágenes, fuentes, etc.

MAX_REQUEST_SIZE=1mb



# CORS

ALLOWED_ORIGINS=http://localhost:3000,http://localhost:5173This project follows strict specifications defined in [AGENTS.MD](./AGENTS.MD):```├── components/           # Componentes React (auth, chat, common, layout)



# Logging

LOG_LEVEL=info

### Code Quality Principles├── hooks/                # Custom hooks (useAuth, useSocket, useChat)

# Rate Limiting

RATE_LIMIT_WINDOW_MS=60000

RATE_LIMIT_MAX_REQUESTS=100

✅ **SOLID Principles**#### Hooks Personalizados (use + PascalCase)├── context/              # Context API (AuthContext, ChatContext)

# Auth0 (optional)

AUTH0_DOMAIN=your-domain.auth0.com- Single Responsibility

AUTH0_AUDIENCE=your-api-audience

- Open/Closed```javascript├── services/             # Servicios (api, auth, socket, security)

# JWT (if not using Auth0)

JWT_SECRET=your_super_secret_key_change_in_production- Liskov Substitution

JWT_EXPIRATION=15m

- Interface Segregationfunction useAuth() { /* ... */ }├── utils/                # Utilidades (validators, sanitizers, constants)

# Database (optional)

DATABASE_URL=mongodb://localhost:27017/una_chat- Dependency Inversion

```

function useChat() { /* ... */ }├── pages/                # Páginas (Home, Login, Chat, NotFound)

---

✅ **Clean Code**

## 🚢 Deployment

- Max 50 lines per function```├── styles/               # Estilos globales y Tailwind

### Build for Production

- Max 3 nested levels

```bash

npm run build- Self-documenting code└── main.jsx              # Entry point

```

- No unnecessary comments

Output will be in `dist/` directory.

- No emojis in code---```

### Run Production Server



```bash

npm start✅ **Test-First Development (BDD)**

```

- Write tests BEFORE code

### Docker

- Minimum 80% coverage## 🔒 Seguridad---

```dockerfile

FROM node:18-alpine- Gherkin syntax (Given-When-Then)

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY dist ./dist✅ **Security-First**

EXPOSE 5000

CMD ["node", "dist/server.js"]- Input validation (Zod schemas)### Backend## 📋 Convenciones de Código

```

- Output sanitization (XSS prevention)

**Build and run:**

```bash- No hardcoded secrets- ✅ **Validación:** Zod/Joi schemas

docker build -t una-chat-backend .

docker run -p 5000:5000 --env-file .env una-chat-backend- Rate limiting on sensitive endpoints

```

- Security event logging- ✅ **Sanitización:** XSS prevention, input sanitization### ✅ Backend

---



## 🔍 Security Audits

### Naming Conventions- ✅ **Rate Limiting:** Brute force protection

```bash

# Check for npm vulnerabilities

npm audit

| Type | Convention | Example |- ✅ **CORS:** Configuración restrictiva#### Variables y Funciones (camelCase)

# Fix vulnerabilities (if possible)

npm audit fix|------|------------|---------|



# Generate detailed audit report| Variables & Functions | camelCase | `getUserById()` |- ✅ **Helmet:** Security headers```javascript

npm audit --json > audit-report.json

```| Constants | UPPER_SNAKE_CASE | `MAX_LOGIN_ATTEMPTS` |



---| Classes & Services | PascalCase | `MessageService` |- ✅ **JWT:** Expiración corta (15 minutos)const getUserById = (userId) => { /* ... */ }



## 📄 Licencia| Files | kebab-case | `user-service.ts` |



MIT License - Universidad Nacional de Costa Rica (UNA)- ✅ **Logging:** Eventos de seguridadconst isValidEmail = (email) => { /* ... */ }



------



## 👨‍💻 Autor```



**Brandon Jafeth Carrillo Alvarez**  ## 📊 Commit Convention

Universidad Nacional de Costa Rica (UNA)  

Curso: Ciberseguridad - Implementación Segura de Aplicaciones  ### Frontend

Profesor: [Nombre del Profesor]

```bash

---

[type]: description- ✅ **Sanitización:** DOMPurify#### Constantes (UPPER_SNAKE_CASE)

## 🔗 Referencias



- [OWASP Top 10 2021](https://owasp.org/www-project-top-ten/)

- [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/)# Types:- ✅ **Token Storage:** sessionStorage (no localStorage)```javascript

- [SOLID Principles](https://en.wikipedia.org/wiki/SOLID)

- [Express.js Security Best Practices](https://expressjs.com/en/advanced/best-practice-security.html)# feat:     New feature

- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)

- [React Security Best Practices](https://react.dev/learn/keeping-components-pure)# fix:      Bug fix- ✅ **URL Validation:** Antes de redireccionamientosconst MAX_LOGIN_ATTEMPTS = 5

- [Test-Driven Development](https://en.wikipedia.org/wiki/Test-driven_development)

- [SSDLC - Secure Software Development Lifecycle](https://www.microsoft.com/en-us/securityengineering/sdl/)# docs:     Documentation changes



---# style:    Code formatting (no logic change)- ✅ **CSP:** Content Security Policyconst RATE_LIMIT_WINDOW = 15 * 60 * 1000



## 🤝 Contribución# refactor: Code refactoring



Para contribuir al proyecto:# perf:     Performance improvement```



1. Fork el repositorio# test:     Add or modify tests

2. Crea una rama feature: `git checkout -b feature/nueva-funcionalidad`

3. Escribe tests PRIMERO (TDD)# chore:    Dependencies, config, etc.---

4. Implementa la funcionalidad

5. Verifica: `npm run lint && npm test && npm run build`

6. Commit: `git commit -am 'feat: add nueva funcionalidad'`

7. Push: `git push origin feature/nueva-funcionalidad`# Example:#### Clases y Servicios (PascalCase)

8. Abre un Pull Request

feat: implement user authentication with JWT

**Importante:** Todos los PRs deben:

- ✅ Pasar todos los tests (87%+ coverage)```## 🧪 Testing```javascript

- ✅ Pasar linting sin errores

- ✅ Seguir convenciones de [AGENTS.MD](./AGENTS.MD)

- ✅ Incluir documentación actualizada

---class UserService { /* ... */ }

---



**Última actualización:** 8 de Noviembre, 2025 | **Versión:** 1.1.0

## ✅ Pre-Commit Checklist### Metodología: Test-Driven Development (TDD)class AuthMiddleware { /* ... */ }



Before pushing code:1. Escribir tests PRIMERO (Red phase)```



- [ ] ✅ All tests passing (`npm test`)2. Implementar funcionalidad (Green phase)

- [ ] ✅ No lint errors (`npm run lint`)

- [ ] ✅ Build successful (`npm run build`)3. Refactorizar (Blue phase)### ✅ Frontend

- [ ] ✅ 80%+ test coverage

- [ ] ✅ No hardcoded secrets

- [ ] ✅ Input validation implemented

- [ ] ✅ Output sanitization applied### Convenciones#### Variables de Estado (camelCase con prefijo descriptivo)

- [ ] ✅ SOLID principles followed

- [ ] ✅ Max 50 lines per function- **Formato:** BDD (Given-When-Then)```javascript

- [ ] ✅ Documentation updated

- **Cobertura Mínima:** 80%const [currentUser, setCurrentUser] = useState(null)

---

- **Framework:** Jest (Backend), Vitest (Frontend)const [chatMessages, setChatMessages] = useState([])

## 📚 Additional Documentation

const [isLoadingMessages, setIsLoadingMessages] = useState(false)

- **[AGENTS.MD](./AGENTS.MD)** - Complete specifications for AI agents

- **[SWAGGER_DOCS.md](./SWAGGER_DOCS.md)** - API documentation guide### Ejemplo```

- **Interactive Docs** - http://localhost:5000/api-docs

```javascript

---

describe('UserService', () => {#### Componentes (PascalCase)

## 🚀 Deployment

  describe('getUserById', () => {```javascript

### Build for Production

    it('should return user when valid id is provided', async () => {function ChatContainer() { /* ... */ }

```bash

npm run build      // Givenfunction MessageList({ messages }) { /* ... */ }

```

      const userId = 'user123'```

Output will be in `dist/` directory.

      

### Run Production Server

      // When#### Hooks Personalizados (use + PascalCase)

```bash

npm start      const result = await userService.getUserById(userId)```javascript

```

      function useAuth() { /* ... */ }

### Docker (Optional)

      // Thenfunction useChat() { /* ... */ }

```dockerfile

FROM node:18-alpine      expect(result).toBeDefined()```

WORKDIR /app

COPY package*.json ./    })

RUN npm ci --only=production

COPY dist ./dist  })---

EXPOSE 5000

CMD ["node", "dist/server.js"]})

```

```## 🔒 Seguridad

---



## 🔍 Security Audits

---### Backend

```bash

# Check for npm vulnerabilities- ✅ **Validación:** Zod/Joi schemas

npm audit

## 📊 SOLID Principles- ✅ **Sanitización:** XSS prevention, input sanitization

# Fix vulnerabilities (if possible)

npm audit fix- ✅ **Rate Limiting:** Brute force protection

```

Todos los componentes DEBEN seguir SOLID:- ✅ **CORS:** Configuración restrictiva

Current status: ⚠️ **5 moderate severity vulnerabilities** (acceptable for development)

- ✅ **Helmet:** Security headers

---

- **S** - Single Responsibility: Una función/clase, una responsabilidad- ✅ **JWT:** Expiración corta (15 minutos)

## 📄 License

- **O** - Open/Closed: Extendible sin modificar código existente- ✅ **Logging:** Eventos de seguridad

MIT License - Universidad Nacional de Costa Rica (UNA)

- **L** - Liskov Substitution: Sustitución segura de tipos

---

- **I** - Interface Segregation: Interfaces específicas, no genéricas### Frontend

## 👨‍💻 Author

- **D** - Dependency Inversion: Inyección de dependencias- ✅ **Sanitización:** DOMPurify

**Brandon Jafeth**  

Universidad Nacional de Costa Rica (UNA)  - ✅ **Token Storage:** sessionStorage (no localStorage)

Curso: Ciberseguridad - Implementación Segura de Aplicaciones

---- ✅ **URL Validation:** Antes de redireccionamientos

---

- ✅ **CSP:** Content Security Policy

## 🔗 References

## 🔄 Flujo de Desarrollo

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)

- [SOLID Principles](https://en.wikipedia.org/wiki/SOLID)---

- [Express.js Security Best Practices](https://expressjs.com/en/advanced/best-practice-security.html)

- [Test-Driven Development](https://en.wikipedia.org/wiki/Test-driven_development)### 1. Crear Tests

- [OpenAPI 3.0 Specification](https://swagger.io/specification/)

```bash## 🧪 Testing

---

# Crear archivo de test en tests/unit o tests/integration

**Last Updated:** October 2025 | **Version:** 1.0.0

# Escribir casos usando BDD (Given-When-Then)### Metodología: Test-Driven Development (TDD)

```1. Escribir tests PRIMERO (Red phase)

2. Implementar funcionalidad (Green phase)

### 2. Implementar Código3. Refactorizar (Blue phase)

```bash

# Escribir código mínimo para pasar tests### Convenciones

# Seguir convenciones de nombres- **Formato:** BDD (Given-When-Then)

# Aplicar SOLID principles- **Cobertura Mínima:** 80%

```- **Framework:** Jest (Backend), Vitest (Frontend)



### 3. Validación### Ejemplo

```bash```javascript

npm run lint       # ESLintdescribe('UserService', () => {

npm test           # Tests + cobertura  describe('getUserById', () => {

npm run build      # Compilación    it('should return user when valid id is provided', async () => {

```      // Given

      const userId = 'user123'

### 4. Commit      

```bash      // When

# Formato: [tipo]: descripción      const result = await userService.getUserById(userId)

# feat: add user authentication      

# fix: resolve login bug      // Then

# docs: update README      expect(result).toBeDefined()

```    })

  })

---})

```

## 📋 Checklist Antes de Push

---

- [ ] Convenciones de nombres seguidas

- [ ] Entrada validada## 📊 SOLID Principles

- [ ] Salida sanitizada

- [ ] No hardcodear secretsTodos los componentes DEBEN seguir SOLID:

- [ ] Tests green (80% cobertura mínima)

- [ ] Linting sin errores- **S** - Single Responsibility: Una función/clase, una responsabilidad

- [ ] Build sin errores- **O** - Open/Closed: Extendible sin modificar código existente

- [ ] Código limpio (máx 50 líneas por función)- **L** - Liskov Substitution: Sustitución segura de tipos

- [ ] SOLID principles aplicados- **I** - Interface Segregation: Interfaces específicas, no genéricas

- [ ] Documentación actualizada- **D** - Dependency Inversion: Inyección de dependencias



------



## 🛠️ Stack Tecnológico## 🔄 Flujo de Desarrollo



### Backend### 1. Crear Tests

| Categoría | Tecnología |```bash

|-----------|-----------|# Crear archivo de test en tests/unit o tests/integration

| Framework | Express.js |# Escribir casos usando BDD (Given-When-Then)

| Runtime | Node.js 18+ |```

| Lenguaje | JavaScript/TypeScript |

| Auth | Auth0 + JWT |### 2. Implementar Código

| Validación | Zod/Joi |```bash

| Logger | Winston/Pino |# Escribir código mínimo para pasar tests

| Testing | Jest + Supertest |# Seguir convenciones de nombres

| Linting | ESLint + Prettier |# Aplicar SOLID principles

| Security | Helmet, express-rate-limit, xss |```



### Frontend### 3. Validación

| Categoría | Tecnología |```bash

|-----------|-----------|npm run lint       # ESLint

| Framework | React 18+ |npm test           # Tests + cobertura

| Build Tool | Vite |npm run build      # Compilación

| Styling | Tailwind CSS |```

| HTTP Client | Axios |

| State | TanStack Query + Context API |### 4. Commit

| Forms | React Hook Form + Zod |```bash

| Testing | Vitest + React Testing Library |# Formato: [tipo]: descripción

| Linting | ESLint + Prettier |# feat: add user authentication

| WebSocket | Socket.IO Client |# fix: resolve login bug

# docs: update README

---```



## 📚 Documentación---



- [AGENTS.MD](./AGENTS.MD) - Especificaciones completas para agentes de IA## 📋 Checklist Antes de Push

- [SECURITY.md](./docs/SECURITY.md) - Guía de seguridad

- [ARCHITECTURE.md](./docs/ARCHITECTURE.md) - Decisiones arquitectónicas- [ ] Convenciones de nombres seguidas

- [CONTRIBUTING.md](./docs/CONTRIBUTING.md) - Guía de contribución- [ ] Entrada validada

- [ ] Salida sanitizada

---- [ ] No hardcodear secrets

- [ ] Tests green (80% cobertura mínima)

## 🔍 Escaneo de Seguridad- [ ] Linting sin errores

- [ ] Build sin errores

### SBOM (Software Bill of Materials)- [ ] Código limpio (máx 50 líneas por función)

```bash- [ ] SOLID principles aplicados

npm run generate-sbom    # Genera SBOM en formato JSON- [ ] Documentación actualizada

```

---

### Chequeo de Vulnerabilidades

```bash## 🛠️ Stack Tecnológico

npm run check-vulnerabilities   # Verifica CVEs

npm audit                       # Auditoría de npm### Backend

```| Categoría | Tecnología |

|-----------|-----------|

### Análisis Estático| Framework | Express.js |

```bash| Runtime | Node.js 18+ |

npm run semgrep              # Análisis SAST con Semgrep| Lenguaje | JavaScript/TypeScript |

npm run snyk                 # Escaneo con Snyk| Auth | Auth0 + JWT |

```| Validación | Zod/Joi |

| Logger | Winston/Pino |

---| Testing | Jest + Supertest |

| Linting | ESLint + Prettier |

## 🚢 Deployment| Security | Helmet, express-rate-limit, xss |



### Docker### Frontend

```bash| Categoría | Tecnología |

# Build de imagen|-----------|-----------|

docker build -t una-chat-backend .| Framework | React 18+ |

| Build Tool | Vite |

# Ejecutar contenedor| Styling | Tailwind CSS |

docker run -p 5000:5000 una-chat-backend| HTTP Client | Axios |

```| State | TanStack Query + Context API |

| Forms | React Hook Form + Zod |

### Docker Compose (Desarrollo)| Testing | Vitest + React Testing Library |

```bash| Linting | ESLint + Prettier |

docker-compose up -d| WebSocket | Socket.IO Client |

```

---

---

## 📚 Documentación

## 📝 Variables de Entorno

- [AGENTS.MD](./AGENTS.MD) - Especificaciones completas para agentes de IA

Copia `.env.example` a `.env`:- [SECURITY.md](./docs/SECURITY.md) - Guía de seguridad

- [ARCHITECTURE.md](./docs/ARCHITECTURE.md) - Decisiones arquitectónicas

```env- [CONTRIBUTING.md](./docs/CONTRIBUTING.md) - Guía de contribución

# Server

NODE_ENV=development---

PORT=5000

## 🔍 Escaneo de Seguridad

# JWT

JWT_SECRET=your_super_secret_key_change_this### SBOM (Software Bill of Materials)

JWT_EXPIRATION=15m```bash

npm run generate-sbom    # Genera SBOM en formato JSON

# Auth0```

AUTH0_DOMAIN=your-domain.auth0.com

AUTH0_CLIENT_ID=your_client_id### Chequeo de Vulnerabilidades

AUTH0_CLIENT_SECRET=your_client_secret```bash

npm run check-vulnerabilities   # Verifica CVEs

# CORSnpm audit                       # Auditoría de npm

ALLOWED_ORIGINS=http://localhost:3000,http://localhost:5173```



# Database### Análisis Estático

DATABASE_URL=mongodb://localhost:27017/una_chat```bash

npm run semgrep              # Análisis SAST con Semgrep

# Loggingnpm run snyk                 # Escaneo con Snyk

LOG_LEVEL=info```

```

---

---

## 🚢 Deployment

## 📞 Soporte y Contribución

### Docker

Para reportar problemas o contribuir:```bash

# Build de imagen

1. Fork el repositoriodocker build -t una-chat-backend .

2. Crea una rama: `git checkout -b feature/my-feature`

3. Commit: `git commit -am 'feat: add my feature'`# Ejecutar contenedor

4. Push: `git push origin feature/my-feature`docker run -p 5000:5000 una-chat-backend

5. Abre un Pull Request```



---### Docker Compose (Desarrollo)

```bash

## 📄 Licenciadocker-compose up -d

```

Este proyecto está bajo la licencia MIT. Ver [LICENSE](./LICENSE) para más detalles.

---

---

## 📝 Variables de Entorno

## 👨‍💻 Autor

Copia `.env.example` a `.env`:

**Brandon Jafeth**  

Universidad Nacional de Costa Rica (UNA)  ```env

Curso: Ciberseguridad - Implementación Segura de Aplicaciones# Server

NODE_ENV=development

---PORT=5000



## 🔗 Referencias# JWT

JWT_SECRET=your_super_secret_key_change_this

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)JWT_EXPIRATION=15m

- [SOLID Principles](https://en.wikipedia.org/wiki/SOLID)

- [Express.js Best Practices](https://expressjs.com/en/advanced/best-practice-security.html)# Auth0

- [React Best Practices](https://react.dev/)AUTH0_DOMAIN=your-domain.auth0.com

- [Test-Driven Development](https://en.wikipedia.org/wiki/Test-driven_development)AUTH0_CLIENT_ID=your_client_id

AUTH0_CLIENT_SECRET=your_client_secret

---

# CORS

**Última actualización:** Octubre 2025ALLOWED_ORIGINS=http://localhost:3000,http://localhost:5173


# Database
DATABASE_URL=mongodb://localhost:27017/una_chat

# Logging
LOG_LEVEL=info
```

---

## 📞 Soporte y Contribución

Para reportar problemas o contribuir:

1. Fork el repositorio
2. Crea una rama: `git checkout -b feature/my-feature`
3. Commit: `git commit -am 'feat: add my feature'`
4. Push: `git push origin feature/my-feature`
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver [LICENSE](./LICENSE) para más detalles.

---

## 👨‍💻 Autor

**Brandon Jafeth**  
Universidad Nacional de Costa Rica (UNA)  
Curso: Ciberseguridad - Implementación Segura de Aplicaciones

---

## 🔗 Referencias

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [SOLID Principles](https://en.wikipedia.org/wiki/SOLID)
- [Express.js Best Practices](https://expressjs.com/en/advanced/best-practice-security.html)
- [React Best Practices](https://react.dev/)
- [Test-Driven Development](https://en.wikipedia.org/wiki/Test-driven_development)

---

**Última actualización:** Octubre 2025
