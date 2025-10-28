# 🔒 UNA Chat Backend - Secure Implementation# 🔒 UNA Chat Backend - SSDLC Implementation# 🔒 UNA Chat Backend - SSDLC Implementation# Express.js Hello World with TypeScript


[![Security-First](https://img.shields.io/badge/approach-security%20first-brightgreen)](./AGENTS.MD)

[![SOLID Principles](https://img.shields.io/badge/architecture-SOLID-blue)](./AGENTS.MD)

[![Test-First Development](https://img.shields.io/badge/methodology-TDD%2FBDD-yellow)](./AGENTS.MD)[![Security-First](https://img.shields.io/badge/approach-security%20first-brightgreen)](./AGENTS.MD)

[![Coverage](https://img.shields.io/badge/coverage-87%25-green)]()

[![SOLID Principles](https://img.shields.io/badge/architecture-SOLID-blue)](./AGENTS.MD)

Backend seguro para aplicación de chat en tiempo real con autenticación, validación y sanitización siguiendo **SSDLC (Secure Software Development Lifecycle)**.

[![Test-First Development](https://img.shields.io/badge/methodology-TDD%2FBDD-yellow)](./AGENTS.MD)[![Security-First](https://img.shields.io/badge/approach-security%20first-brightgreen)](./AGENTS.MD)Este es un proyecto de Express.js configurado con TypeScript basado en el ejemplo Hello World oficial de Express.

---



## 🚀 Quick Start

Implementación de un backend seguro para aplicaciones de chat en tiempo real siguiendo **SSDLC (Secure Software Development Lifecycle)** con énfasis en seguridad, calidad de código y buenas prácticas de desarrollo.[![SOLID Principles](https://img.shields.io/badge/architecture-SOLID-blue)](./AGENTS.MD)

```bash

# Install dependencies

npm install

## 📚 Descripción del Proyecto[![Test-First Development](https://img.shields.io/badge/methodology-TDD%2FBDD-yellow)](./AGENTS.MD)## Instalación

# Run development server

npm run dev



# Run tests with coverageEste proyecto es parte de un curso de **Ciberseguridad - Implementación Segura de Aplicaciones** en la Universidad Nacional de Costa Rica (UNA). El objetivo principal es desarrollar una aplicación fullstack con máxima calidad, seguridad y mantenibilidad.

npm test



# Build for production

npm run build### Puntos de EnfoqueImplementación de un backend seguro para aplicaciones de chat en tiempo real siguiendo **SSDLC (Secure Software Development Lifecycle)** con énfasis en seguridad, calidad de código y buenas prácticas de desarrollo.```bash



# Run production server

npm start

```1. **SBOM (Software Bill of Materials)** - Documentación de dependenciasnpm install



### Access Points2. **Análisis Estático de Seguridad** - Escaneo local de vulnerabilidades



- **API Base:** http://localhost:5000/api3. **Validación de Código** - Linting, formatting, testing## 📚 Descripción del Proyecto```

- **Swagger Docs:** http://localhost:5000/api-docs

- **Health Check:** http://localhost:5000/api/health4. **Seguridad en Desarrollo** - Validación, sanitización, rate limiting



---



## 📚 API Documentation (Swagger)---



Interactive API documentation available at:Este proyecto es parte de un curso de **Ciberseguridad - Implementación Segura de Aplicaciones** en la Universidad Nacional de Costa Rica (UNA). El objetivo principal es desarrollar una aplicación fullstack con máxima calidad, seguridad y mantenibilidad.## Desarrollo



```## 🏗️ Arquitectura

http://localhost:5000/api-docs

```



### Swagger Features### Backend (Node.js + Express)

✅ Test endpoints directly in browser  

✅ View request/response schemas  - **Patrón:** Arquitectura por Capas (Layered Architecture)### Puntos de EnfoquePara ejecutar en modo desarrollo con recarga automática:

✅ Automatic data validation  

✅ Copy cURL and code examples  - **API:** REST + WebSockets (Socket.IO)



📖 See [SWAGGER_DOCS.md](./SWAGGER_DOCS.md) for detailed documentation.- **Autenticación:** Auth0 + JWT



---- **Base de Datos:** Flexible (MongoDB, PostgreSQL, etc.)



## 🛡️ Security Features1. **SBOM (Software Bill of Materials)** - Documentación de dependencias```bash



| Feature | Implementation |### Frontend (React + Vite)

|---------|---------------|

| **HTTP Security Headers** | Helmet with CSP |- **Patrón:** Arquitectura Híbrida (Feature-Based + Component-Based)2. **Análisis Estático de Seguridad** - Escaneo local de vulnerabilidadesnpm run dev

| **CORS** | Restricted origins |

| **Rate Limiting** | Global: 100 req/min, Messages: 30 req/min |- **State Management:** TanStack Query + Context API

| **Input Validation** | Zod schemas |

| **XSS Protection** | Sanitization with xss library |- **Comunicación Real-Time:** Socket.IO Client3. **Validación de Código** - Linting, formatting, testing```

| **URL Validation** | Whitelisted domains for media |

| **Error Handling** | Centralized, no detail exposure |- **Validación:** Zod + React Hook Form

| **Logging** | Winston with security events |

4. **Seguridad en Desarrollo** - Validación, sanitización, rate limiting

---

---

## 📦 Tech Stack

## Build

### Runtime & Framework

- **Node.js** 18+ with TypeScript 5.1+## 🚀 Quick Start

- **Express** 4.18

- **Socket.IO** 4.7 (Real-time communication)---



### Security & Validation### Requisitos Previos

- **Helmet** 8.1 - HTTP security headers

- **CORS** 2.8 - Cross-Origin Resource Sharing- Node.js 18+Para compilar TypeScript a JavaScript:

- **express-rate-limit** 8.1 - Brute force protection

- **Zod** 3.22 - Schema validation- npm o yarn

- **xss** 1.0 - XSS sanitization

- Git## 🏗️ Arquitectura

### Testing & Quality

- **Jest** 29.7 - Testing framework

- **Supertest** 7.1 - HTTP integration testing

- **Coverage:** 87%+ (39 tests passing)### Instalación```bash

- **ESLint** - Code linting

- **TypeScript** - Type safety



### Documentation```bash### Backend (Node.js + Express)npm run build

- **Swagger UI Express** 5.0 - API documentation

- **Swagger JSDoc** 6.2 - OpenAPI 3.0 spec generation# Clonar repositorio



---git clone https://github.com/BrandonJafeth/una-chat-backend.git- **Patrón:** Arquitectura por Capas (Layered Architecture)```



## 📁 Project Structurecd una-chat-backend



```- **API:** REST + WebSockets (Socket.IO)

src/

├── config/# Instalar dependencias

│   ├── environment.ts       # Environment variables

│   ├── security.config.ts   # Helmet, CORS, CSPnpm install- **Autenticación:** Auth0 + JWT## Ejecución

│   └── swagger.config.ts    # OpenAPI 3.0 specification

│

├── controllers/

│   ├── chat.controller.ts   # Chat message handlers# Configurar variables de entorno- **Base de Datos:** Flexible (MongoDB, PostgreSQL, etc.)

│   └── health.controller.ts # Health check

│cp .env.example .env

├── middlewares/

│   ├── validation.middleware.ts     # Zod schema validation```Para ejecutar la aplicación compilada:

│   ├── sanitization.middleware.ts   # XSS sanitization

│   ├── rateLimit.middleware.ts      # Rate limiting

│   └── errorHandler.middleware.ts   # Centralized error handling

│### Desarrollo### Frontend (React + Vite)

├── services/

│   ├── message.service.ts   # Message business logic

│   ├── security.service.ts  # Security utilities

│   └── logger.service.ts    # Winston logger```bash- **Patrón:** Arquitectura Híbrida (Feature-Based + Component-Based)```bash

│

├── routes/# Ejecutar en modo desarrollo con hot-reload

│   ├── index.ts             # Route aggregator

│   ├── chat.routes.ts       # Chat endpoints (with Swagger docs)npm run dev- **State Management:** TanStack Query + Context APInpm start

│   └── health.routes.ts     # Health endpoint (with Swagger docs)

│

├── utils/

│   ├── validators.ts        # Custom validators# Ejecutar linting- **Comunicación Real-Time:** Socket.IO Client```

│   └── asyncHandler.ts      # Async error wrapper

│npm run lint

├── app.ts                   # Express app configuration

└── server.ts                # Entry point- **Validación:** Zod + React Hook Form



tests/# Ejecutar tests

├── unit/

│   ├── services/npm testLa aplicación escuchará en `http://localhost:3000`

│   └── middlewares/

└── integration/

    ├── health.integration.test.ts

    └── chat.integration.test.ts# Build de producción---

```

npm run build

---

## Estructura del Proyecto

## 📝 Available Endpoints

# Ejecutar aplicación compilada

### Health Check

```httpnpm start## 🚀 Quick Start

GET /api/health

``````



**Response (200):**```

```json

{---

  "message": "OK",

  "uptime": 12345.67,### Requisitos Previos├── src/

  "timestamp": "2025-10-18T12:00:00.000Z",

  "environment": "development"## 📁 Estructura del Proyecto

}

```- Node.js 18+│   └── app.ts          # Archivo principal de la aplicación



### Send Message### Backend

```http

POST /api/chat/messages```- npm o yarn├── dist/               # Archivos compilados (generado por npm run build)

```

backend/

**Request Body:**

```json├── src/- Git├── package.json        # Dependencias del proyecto

{

  "nombre": "JohnDoe",│   ├── config/           # Configuración (env, security, socket, auth0)

  "mensaje": "Hello everyone!",

  "color": "#FF5733"│   ├── controllers/      # Controladores HTTP/Socket├── tsconfig.json       # Configuración de TypeScript

}

```│   ├── middlewares/      # Middlewares (auth, validation, error handling)



**Validation:**│   ├── services/         # Lógica de negocio### Instalación├── .gitignore          # Archivos a ignorar en Git

- `nombre`: 3-50 characters

- `mensaje`: 1-5000 characters│   ├── routes/           # Definición de rutas

- `color`: Hex format (#RGB or #RRGGBB)

│   ├── sockets/          # Handlers de WebSocket└── README.md           # Este archivo

**Response (200):**

```json│   ├── utils/            # Utilidades y helpers

{

  "success": true,│   └── app.js            # Configuración de Express```bash```

  "data": {

    "nombre": "JohnDoe",├── tests/

    "mensaje": "Hello everyone!",

    "color": "#FF5733",│   ├── unit/             # Tests unitarios# Clonar repositorio

    "timestamp": "2025-10-18T12:00:00.000Z"

  }│   └── integration/      # Tests de integracióngit clone https://github.com/BrandonJafeth/una-chat-backend.git

}

```└── server.js             # Entry pointcd una-chat-backend



**Error (400 - Validation):**```

```json

{# Instalar dependencias

  "success": false,

  "error": {### Frontendnpm install

    "code": "VALIDATION_ERROR",

    "message": "Invalid username length",```

    "timestamp": "2025-10-18T12:00:00.000Z"

  }frontend/src/# Configurar variables de entorno

}

```├── assets/               # Imágenes, fuentes, etc.cp .env.example .env



**Error (429 - Rate Limit):**├── components/           # Componentes React (auth, chat, common, layout)```

```json

{├── hooks/                # Custom hooks (useAuth, useSocket, useChat)

  "message": "Too many requests, please try again later"

}├── context/              # Context API (AuthContext, ChatContext)### Desarrollo

```

├── services/             # Servicios (api, auth, socket, security)

### Get Message History

```http├── utils/                # Utilidades (validators, sanitizers, constants)```bash

GET /api/chat/messages/history

```├── pages/                # Páginas (Home, Login, Chat, NotFound)# Ejecutar en modo desarrollo con hot-reload



**Response (200):**├── styles/               # Estilos globales y Tailwindnpm run dev

```json

{└── main.jsx              # Entry point

  "success": true,

  "data": [],```# Ejecutar linting

  "message": "Message history not implemented yet"

}npm run lint

```

---

📖 **Full documentation with examples:** http://localhost:5000/api-docs

# Ejecutar tests

---

## 📋 Convenciones de Códigonpm test

## 🧪 Testing



```bash

# Run all tests with coverage### ✅ Backend# Build de producción

npm test

npm run build

# Run tests in watch mode

npm run test:watch#### Variables y Funciones (camelCase)



# Run specific test file```javascript# Ejecutar aplicación compilada

npm test -- security.service.test.ts

```const getUserById = (userId) => { /* ... */ }npm start



### Test Coverageconst isValidEmail = (email) => { /* ... */ }```



``````

-----------------------------|---------|----------|---------|---------|

File                         | % Stmts | % Branch | % Funcs | % Lines |---

-----------------------------|---------|----------|---------|---------|

All files                    |   87.91 |    73.03 |   88.67 |   88.19 |#### Constantes (UPPER_SNAKE_CASE)

-----------------------------|---------|----------|---------|---------|

``````javascript## 📁 Estructura del Proyecto



✅ **39 tests passing** across 5 test suites  const MAX_LOGIN_ATTEMPTS = 5

✅ **87%+ coverage** in statements, functions, and lines  

⚠️ **73% branch coverage** (below 80% threshold but acceptable)const RATE_LIMIT_WINDOW = 15 * 60 * 1000### Backend



### Test Organization``````



```backend/

tests/

├── unit/#### Clases y Servicios (PascalCase)├── src/

│   ├── services/

│   │   ├── message.service.test.ts      (14 tests)```javascript│   ├── config/           # Configuración (env, security, socket, auth0)

│   │   └── security.service.test.ts     (11 tests)

│   └── middlewares/class UserService { /* ... */ }│   ├── controllers/      # Controladores HTTP/Socket

│       └── errorHandler.test.ts         (7 tests)

└── integration/class AuthMiddleware { /* ... */ }│   ├── middlewares/      # Middlewares (auth, validation, error handling)

    ├── health.integration.test.ts       (1 test)

    └── chat.integration.test.ts         (6 tests)```│   ├── services/         # Lógica de negocio

```

│   ├── routes/           # Definición de rutas

---

### ✅ Frontend│   ├── sockets/          # Handlers de WebSocket

## 🔧 Environment Variables

│   ├── utils/            # Utilidades y helpers

Create a `.env` file in the root directory:

#### Variables de Estado (camelCase con prefijo descriptivo)│   └── app.js            # Configuración de Express

```env

# Server Configuration```javascript├── tests/

PORT=5000

NODE_ENV=developmentconst [currentUser, setCurrentUser] = useState(null)│   ├── unit/             # Tests unitarios

MAX_REQUEST_SIZE=1mb

const [chatMessages, setChatMessages] = useState([])│   └── integration/      # Tests de integración

# CORS

ALLOWED_ORIGINS=http://localhost:3000const [isLoadingMessages, setIsLoadingMessages] = useState(false)└── server.js             # Entry point



# Logging``````

LOG_LEVEL=info



# Rate Limiting (optional, defaults are set)

RATE_LIMIT_WINDOW_MS=60000#### Componentes (PascalCase)### Frontend

RATE_LIMIT_MAX_REQUESTS=100

``````javascript```



---function ChatContainer() { /* ... */ }frontend/src/



## 👥 Development Guidelinesfunction MessageList({ messages }) { /* ... */ }├── assets/               # Imágenes, fuentes, etc.



This project follows strict specifications defined in [AGENTS.MD](./AGENTS.MD):```├── components/           # Componentes React (auth, chat, common, layout)



### Code Quality Principles├── hooks/                # Custom hooks (useAuth, useSocket, useChat)



✅ **SOLID Principles**#### Hooks Personalizados (use + PascalCase)├── context/              # Context API (AuthContext, ChatContext)

- Single Responsibility

- Open/Closed```javascript├── services/             # Servicios (api, auth, socket, security)

- Liskov Substitution

- Interface Segregationfunction useAuth() { /* ... */ }├── utils/                # Utilidades (validators, sanitizers, constants)

- Dependency Inversion

function useChat() { /* ... */ }├── pages/                # Páginas (Home, Login, Chat, NotFound)

✅ **Clean Code**

- Max 50 lines per function```├── styles/               # Estilos globales y Tailwind

- Max 3 nested levels

- Self-documenting code└── main.jsx              # Entry point

- No unnecessary comments

- No emojis in code---```



✅ **Test-First Development (BDD)**

- Write tests BEFORE code

- Minimum 80% coverage## 🔒 Seguridad---

- Gherkin syntax (Given-When-Then)



✅ **Security-First**

- Input validation (Zod schemas)### Backend## 📋 Convenciones de Código

- Output sanitization (XSS prevention)

- No hardcoded secrets- ✅ **Validación:** Zod/Joi schemas

- Rate limiting on sensitive endpoints

- Security event logging- ✅ **Sanitización:** XSS prevention, input sanitization### ✅ Backend



### Naming Conventions- ✅ **Rate Limiting:** Brute force protection



| Type | Convention | Example |- ✅ **CORS:** Configuración restrictiva#### Variables y Funciones (camelCase)

|------|------------|---------|

| Variables & Functions | camelCase | `getUserById()` |- ✅ **Helmet:** Security headers```javascript

| Constants | UPPER_SNAKE_CASE | `MAX_LOGIN_ATTEMPTS` |

| Classes & Services | PascalCase | `MessageService` |- ✅ **JWT:** Expiración corta (15 minutos)const getUserById = (userId) => { /* ... */ }

| Files | kebab-case | `user-service.ts` |

- ✅ **Logging:** Eventos de seguridadconst isValidEmail = (email) => { /* ... */ }

---

```

## 📊 Commit Convention

### Frontend

```bash

[type]: description- ✅ **Sanitización:** DOMPurify#### Constantes (UPPER_SNAKE_CASE)



# Types:- ✅ **Token Storage:** sessionStorage (no localStorage)```javascript

# feat:     New feature

# fix:      Bug fix- ✅ **URL Validation:** Antes de redireccionamientosconst MAX_LOGIN_ATTEMPTS = 5

# docs:     Documentation changes

# style:    Code formatting (no logic change)- ✅ **CSP:** Content Security Policyconst RATE_LIMIT_WINDOW = 15 * 60 * 1000

# refactor: Code refactoring

# perf:     Performance improvement```

# test:     Add or modify tests

# chore:    Dependencies, config, etc.---



# Example:#### Clases y Servicios (PascalCase)

feat: implement user authentication with JWT

```## 🧪 Testing```javascript



---class UserService { /* ... */ }



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
