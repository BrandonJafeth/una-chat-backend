# 🔒 UNA Chat Backend - SSDLC Implementation# 🔒 UNA Chat Backend - SSDLC Implementation# Express.js Hello World with TypeScript



[![Security-First](https://img.shields.io/badge/approach-security%20first-brightgreen)](./AGENTS.MD)

[![SOLID Principles](https://img.shields.io/badge/architecture-SOLID-blue)](./AGENTS.MD)

[![Test-First Development](https://img.shields.io/badge/methodology-TDD%2FBDD-yellow)](./AGENTS.MD)[![Security-First](https://img.shields.io/badge/approach-security%20first-brightgreen)](./AGENTS.MD)Este es un proyecto de Express.js configurado con TypeScript basado en el ejemplo Hello World oficial de Express.



Implementación de un backend seguro para aplicaciones de chat en tiempo real siguiendo **SSDLC (Secure Software Development Lifecycle)** con énfasis en seguridad, calidad de código y buenas prácticas de desarrollo.[![SOLID Principles](https://img.shields.io/badge/architecture-SOLID-blue)](./AGENTS.MD)



## 📚 Descripción del Proyecto[![Test-First Development](https://img.shields.io/badge/methodology-TDD%2FBDD-yellow)](./AGENTS.MD)## Instalación



Este proyecto es parte de un curso de **Ciberseguridad - Implementación Segura de Aplicaciones** en la Universidad Nacional de Costa Rica (UNA). El objetivo principal es desarrollar una aplicación fullstack con máxima calidad, seguridad y mantenibilidad.



### Puntos de EnfoqueImplementación de un backend seguro para aplicaciones de chat en tiempo real siguiendo **SSDLC (Secure Software Development Lifecycle)** con énfasis en seguridad, calidad de código y buenas prácticas de desarrollo.```bash



1. **SBOM (Software Bill of Materials)** - Documentación de dependenciasnpm install

2. **Análisis Estático de Seguridad** - Escaneo local de vulnerabilidades

3. **Validación de Código** - Linting, formatting, testing## 📚 Descripción del Proyecto```

4. **Seguridad en Desarrollo** - Validación, sanitización, rate limiting



---

Este proyecto es parte de un curso de **Ciberseguridad - Implementación Segura de Aplicaciones** en la Universidad Nacional de Costa Rica (UNA). El objetivo principal es desarrollar una aplicación fullstack con máxima calidad, seguridad y mantenibilidad.## Desarrollo

## 🏗️ Arquitectura



### Backend (Node.js + Express)

- **Patrón:** Arquitectura por Capas (Layered Architecture)### Puntos de EnfoquePara ejecutar en modo desarrollo con recarga automática:

- **API:** REST + WebSockets (Socket.IO)

- **Autenticación:** Auth0 + JWT

- **Base de Datos:** Flexible (MongoDB, PostgreSQL, etc.)

1. **SBOM (Software Bill of Materials)** - Documentación de dependencias```bash

### Frontend (React + Vite)

- **Patrón:** Arquitectura Híbrida (Feature-Based + Component-Based)2. **Análisis Estático de Seguridad** - Escaneo local de vulnerabilidadesnpm run dev

- **State Management:** TanStack Query + Context API

- **Comunicación Real-Time:** Socket.IO Client3. **Validación de Código** - Linting, formatting, testing```

- **Validación:** Zod + React Hook Form

4. **Seguridad en Desarrollo** - Validación, sanitización, rate limiting

---

## Build

## 🚀 Quick Start

---

### Requisitos Previos

- Node.js 18+Para compilar TypeScript a JavaScript:

- npm o yarn

- Git## 🏗️ Arquitectura



### Instalación```bash



```bash### Backend (Node.js + Express)npm run build

# Clonar repositorio

git clone https://github.com/BrandonJafeth/una-chat-backend.git- **Patrón:** Arquitectura por Capas (Layered Architecture)```

cd una-chat-backend

- **API:** REST + WebSockets (Socket.IO)

# Instalar dependencias

npm install- **Autenticación:** Auth0 + JWT## Ejecución



# Configurar variables de entorno- **Base de Datos:** Flexible (MongoDB, PostgreSQL, etc.)

cp .env.example .env

```Para ejecutar la aplicación compilada:



### Desarrollo### Frontend (React + Vite)



```bash- **Patrón:** Arquitectura Híbrida (Feature-Based + Component-Based)```bash

# Ejecutar en modo desarrollo con hot-reload

npm run dev- **State Management:** TanStack Query + Context APInpm start



# Ejecutar linting- **Comunicación Real-Time:** Socket.IO Client```

npm run lint

- **Validación:** Zod + React Hook Form

# Ejecutar tests

npm testLa aplicación escuchará en `http://localhost:3000`



# Build de producción---

npm run build

## Estructura del Proyecto

# Ejecutar aplicación compilada

npm start## 🚀 Quick Start

```

```

---

### Requisitos Previos├── src/

## 📁 Estructura del Proyecto

- Node.js 18+│   └── app.ts          # Archivo principal de la aplicación

### Backend

```- npm o yarn├── dist/               # Archivos compilados (generado por npm run build)

backend/

├── src/- Git├── package.json        # Dependencias del proyecto

│   ├── config/           # Configuración (env, security, socket, auth0)

│   ├── controllers/      # Controladores HTTP/Socket├── tsconfig.json       # Configuración de TypeScript

│   ├── middlewares/      # Middlewares (auth, validation, error handling)

│   ├── services/         # Lógica de negocio### Instalación├── .gitignore          # Archivos a ignorar en Git

│   ├── routes/           # Definición de rutas

│   ├── sockets/          # Handlers de WebSocket└── README.md           # Este archivo

│   ├── utils/            # Utilidades y helpers

│   └── app.js            # Configuración de Express```bash```

├── tests/

│   ├── unit/             # Tests unitarios# Clonar repositorio

│   └── integration/      # Tests de integracióngit clone https://github.com/BrandonJafeth/una-chat-backend.git

└── server.js             # Entry pointcd una-chat-backend

```

# Instalar dependencias

### Frontendnpm install

```

frontend/src/# Configurar variables de entorno

├── assets/               # Imágenes, fuentes, etc.cp .env.example .env

├── components/           # Componentes React (auth, chat, common, layout)```

├── hooks/                # Custom hooks (useAuth, useSocket, useChat)

├── context/              # Context API (AuthContext, ChatContext)### Desarrollo

├── services/             # Servicios (api, auth, socket, security)

├── utils/                # Utilidades (validators, sanitizers, constants)```bash

├── pages/                # Páginas (Home, Login, Chat, NotFound)# Ejecutar en modo desarrollo con hot-reload

├── styles/               # Estilos globales y Tailwindnpm run dev

└── main.jsx              # Entry point

```# Ejecutar linting

npm run lint

---

# Ejecutar tests

## 📋 Convenciones de Códigonpm test



### ✅ Backend# Build de producción

npm run build

#### Variables y Funciones (camelCase)

```javascript# Ejecutar aplicación compilada

const getUserById = (userId) => { /* ... */ }npm start

const isValidEmail = (email) => { /* ... */ }```

```

---

#### Constantes (UPPER_SNAKE_CASE)

```javascript## 📁 Estructura del Proyecto

const MAX_LOGIN_ATTEMPTS = 5

const RATE_LIMIT_WINDOW = 15 * 60 * 1000### Backend

``````

backend/

#### Clases y Servicios (PascalCase)├── src/

```javascript│   ├── config/           # Configuración (env, security, socket, auth0)

class UserService { /* ... */ }│   ├── controllers/      # Controladores HTTP/Socket

class AuthMiddleware { /* ... */ }│   ├── middlewares/      # Middlewares (auth, validation, error handling)

```│   ├── services/         # Lógica de negocio

│   ├── routes/           # Definición de rutas

### ✅ Frontend│   ├── sockets/          # Handlers de WebSocket

│   ├── utils/            # Utilidades y helpers

#### Variables de Estado (camelCase con prefijo descriptivo)│   └── app.js            # Configuración de Express

```javascript├── tests/

const [currentUser, setCurrentUser] = useState(null)│   ├── unit/             # Tests unitarios

const [chatMessages, setChatMessages] = useState([])│   └── integration/      # Tests de integración

const [isLoadingMessages, setIsLoadingMessages] = useState(false)└── server.js             # Entry point

``````



#### Componentes (PascalCase)### Frontend

```javascript```

function ChatContainer() { /* ... */ }frontend/src/

function MessageList({ messages }) { /* ... */ }├── assets/               # Imágenes, fuentes, etc.

```├── components/           # Componentes React (auth, chat, common, layout)

├── hooks/                # Custom hooks (useAuth, useSocket, useChat)

#### Hooks Personalizados (use + PascalCase)├── context/              # Context API (AuthContext, ChatContext)

```javascript├── services/             # Servicios (api, auth, socket, security)

function useAuth() { /* ... */ }├── utils/                # Utilidades (validators, sanitizers, constants)

function useChat() { /* ... */ }├── pages/                # Páginas (Home, Login, Chat, NotFound)

```├── styles/               # Estilos globales y Tailwind

└── main.jsx              # Entry point

---```



## 🔒 Seguridad---



### Backend## 📋 Convenciones de Código

- ✅ **Validación:** Zod/Joi schemas

- ✅ **Sanitización:** XSS prevention, input sanitization### ✅ Backend

- ✅ **Rate Limiting:** Brute force protection

- ✅ **CORS:** Configuración restrictiva#### Variables y Funciones (camelCase)

- ✅ **Helmet:** Security headers```javascript

- ✅ **JWT:** Expiración corta (15 minutos)const getUserById = (userId) => { /* ... */ }

- ✅ **Logging:** Eventos de seguridadconst isValidEmail = (email) => { /* ... */ }

```

### Frontend

- ✅ **Sanitización:** DOMPurify#### Constantes (UPPER_SNAKE_CASE)

- ✅ **Token Storage:** sessionStorage (no localStorage)```javascript

- ✅ **URL Validation:** Antes de redireccionamientosconst MAX_LOGIN_ATTEMPTS = 5

- ✅ **CSP:** Content Security Policyconst RATE_LIMIT_WINDOW = 15 * 60 * 1000

```

---

#### Clases y Servicios (PascalCase)

## 🧪 Testing```javascript

class UserService { /* ... */ }

### Metodología: Test-Driven Development (TDD)class AuthMiddleware { /* ... */ }

1. Escribir tests PRIMERO (Red phase)```

2. Implementar funcionalidad (Green phase)

3. Refactorizar (Blue phase)### ✅ Frontend



### Convenciones#### Variables de Estado (camelCase con prefijo descriptivo)

- **Formato:** BDD (Given-When-Then)```javascript

- **Cobertura Mínima:** 80%const [currentUser, setCurrentUser] = useState(null)

- **Framework:** Jest (Backend), Vitest (Frontend)const [chatMessages, setChatMessages] = useState([])

const [isLoadingMessages, setIsLoadingMessages] = useState(false)

### Ejemplo```

```javascript

describe('UserService', () => {#### Componentes (PascalCase)

  describe('getUserById', () => {```javascript

    it('should return user when valid id is provided', async () => {function ChatContainer() { /* ... */ }

      // Givenfunction MessageList({ messages }) { /* ... */ }

      const userId = 'user123'```

      

      // When#### Hooks Personalizados (use + PascalCase)

      const result = await userService.getUserById(userId)```javascript

      function useAuth() { /* ... */ }

      // Thenfunction useChat() { /* ... */ }

      expect(result).toBeDefined()```

    })

  })---

})

```## 🔒 Seguridad



---### Backend

- ✅ **Validación:** Zod/Joi schemas

## 📊 SOLID Principles- ✅ **Sanitización:** XSS prevention, input sanitization

- ✅ **Rate Limiting:** Brute force protection

Todos los componentes DEBEN seguir SOLID:- ✅ **CORS:** Configuración restrictiva

- ✅ **Helmet:** Security headers

- **S** - Single Responsibility: Una función/clase, una responsabilidad- ✅ **JWT:** Expiración corta (15 minutos)

- **O** - Open/Closed: Extendible sin modificar código existente- ✅ **Logging:** Eventos de seguridad

- **L** - Liskov Substitution: Sustitución segura de tipos

- **I** - Interface Segregation: Interfaces específicas, no genéricas### Frontend

- **D** - Dependency Inversion: Inyección de dependencias- ✅ **Sanitización:** DOMPurify

- ✅ **Token Storage:** sessionStorage (no localStorage)

---- ✅ **URL Validation:** Antes de redireccionamientos

- ✅ **CSP:** Content Security Policy

## 🔄 Flujo de Desarrollo

---

### 1. Crear Tests

```bash## 🧪 Testing

# Crear archivo de test en tests/unit o tests/integration

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
