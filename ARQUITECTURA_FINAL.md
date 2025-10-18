# 🏗️ Arquitectura Final del Proyecto UNA Chat

## 📐 Comparativa: Arquitectura Propuesta vs Estructura Recomendada

### Backend: Arquitectura por Capas (Layered)

```
┌─────────────────────────────────────────┐
│          HTTP/WebSocket Requests        │
└──────────────────┬──────────────────────┘
                   │
        ┌──────────▼──────────┐
        │    Routes/Handlers   │
        │ (auth.routes.js)    │
        └──────────┬──────────┘
                   │
        ┌──────────▼───────────────┐
        │    Controllers (Layer 1)  │
        │  (auth.controller.js)    │
        │  - HTTP request handling  │
        │  - Input validation       │
        │  - Response formatting    │
        └──────────┬───────────────┘
                   │
        ┌──────────▼──────────────────┐
        │  Middlewares (Cross-cutting) │
        │  - Authentication           │
        │  - Rate Limiting            │
        │  - Sanitization             │
        │  - Error Handling           │
        └──────────┬──────────────────┘
                   │
        ┌──────────▼────────────────────┐
        │  Services (Layer 2)            │
        │  (user.service.js)            │
        │  - Business logic              │
        │  - Data processing             │
        │  - Cross-service coordination  │
        └──────────┬────────────────────┘
                   │
        ┌──────────▼──────────────────┐
        │  Utils (Layer 3)             │
        │  - Validators                │
        │  - Sanitizers                │
        │  - Helpers                   │
        │  - Constants                 │
        └──────────┬──────────────────┘
                   │
        ┌──────────▼──────────────────┐
        │    Data Layer                │
        │  - Database Queries          │
        │  - External APIs             │
        └──────────────────────────────┘
```

**Ventajas:**
- ✅ Simple y clara para la escala del proyecto
- ✅ Fácil de escanear con herramientas SAST
- ✅ Testeable sin complejidad innecesaria
- ✅ Equipo puede contribuir fácilmente
- ✅ Escalable sin ser sobre-engineered

---

### Frontend: Arquitectura Híbrida

```
┌────────────────────────────────────────┐
│         App.jsx (Root)                 │
│  - Route configuration                 │
│  - Provider setup                      │
└──────────────┬───────────────────────┘
               │
      ┌────────▼────────┐
      │  RootProvider   │
      │  - Auth         │
      │  - Chat         │
      │  - Theme (opt)  │
      └────────┬────────┘
               │
      ┌────────▼──────────────────────┐
      │  Pages (Containers)            │
      │  - Home.jsx                    │
      │  - Login.jsx                   │
      │  - Chat.jsx                    │
      └────────┬──────────────────────┘
               │
      ┌────────▼──────────────────────┐
      │  Components (UI)               │
      │  /components                   │
      │  ├── auth/                     │
      │  ├── chat/                     │
      │  ├── common/                   │
      │  └── layout/                   │
      └────────┬──────────────────────┘
               │
   ┌───────────┴────────────┬──────────────┐
   │                        │              │
┌──▼──────────┐  ┌─────────▼────┐  ┌──────▼───────┐
│  Hooks      │  │  Services    │  │  Context     │
│  (lógica)   │  │  (comunic.)  │  │  (estado)    │
│             │  │              │  │              │
│ useAuth     │  │ api.service  │  │ AuthContext  │
│ useChat     │  │ socket.srv   │  │ ChatContext  │
│ useSocket   │  │ auth.srv     │  │              │
│ useStorage  │  │ security.srv │  │              │
└─────────────┘  └──────────────┘  └──────────────┘
```

**Ventajas:**
- ✅ Separación clara de responsabilidades
- ✅ Lógica reutilizable en hooks
- ✅ Comunicación centralizada en services
- ✅ Estado global sin Redux complexity
- ✅ Fácil de testear cada pieza

---

## 📁 Estructura de Carpetas Detallada

### Backend
```
una-chat-backend/backend/
├── src/
│   ├── config/
│   │   ├── environment.js         # Cargar y validar env
│   │   ├── security.config.js     # Helmet, CORS, CSP
│   │   ├── socket.config.js       # Socket.IO setup
│   │   └── auth0.config.js        # Auth0 setup
│   │
│   ├── controllers/
│   │   ├── auth.controller.js     # Login, logout, refresh
│   │   ├── chat.controller.js     # Get messages, send, etc
│   │   └── health.controller.js   # Health checks
│   │
│   ├── middlewares/
│   │   ├── auth.middleware.js     # Verificar JWT
│   │   ├── rateLimit.middleware.js # Prevenir brute force
│   │   ├── validation.middleware.js # Schema validation
│   │   ├── sanitization.middleware.js # XSS prevention
│   │   └── errorHandler.middleware.js # Error responses
│   │
│   ├── services/
│   │   ├── security.service.js    # Validaciones de seguridad
│   │   ├── message.service.js     # Lógica de mensajes
│   │   ├── user.service.js        # Lógica de usuarios
│   │   └── logger.service.js      # Winston/Pino logger
│   │
│   ├── routes/
│   │   ├── index.js               # Combinar todas las rutas
│   │   ├── auth.routes.js         # POST /auth/login, logout
│   │   ├── chat.routes.js         # GET/POST /chat/messages
│   │   └── health.routes.js       # GET /health
│   │
│   ├── sockets/
│   │   ├── chat.handler.js        # Socket events para chat
│   │   └── auth.handler.js        # Socket auth, disconnect
│   │
│   ├── utils/
│   │   ├── validators.js          # Funciones de validación
│   │   ├── sanitizers.js          # Funciones de sanitización
│   │   └── constants.js           # Constantes del proyecto
│   │
│   ├── app.js                     # Express app setup
│   └── errors.js                  # Custom error classes
│
├── tests/
│   ├── unit/
│   │   ├── services/
│   │   │   ├── user.service.test.js
│   │   │   ├── message.service.test.js
│   │   │   └── security.service.test.js
│   │   └── utils/
│   │       ├── validators.test.js
│   │       └── sanitizers.test.js
│   │
│   ├── integration/
│   │   ├── auth.integration.test.js
│   │   └── chat.integration.test.js
│   │
│   └── setup.js                   # Test configuration
│
├── docs/
│   ├── SBOM.md                    # Software Bill of Materials
│   ├── RISK-MATRIX.md             # Risk assessment
│   └── API-DOCS.md                # API documentation
│
├── scripts/
│   ├── generate-sbom.js           # Script to generate SBOM
│   └── check-vulnerabilities.js   # Check for CVEs
│
├── .vscode/
│   ├── settings.json              # ESLint, Prettier config
│   ├── extensions.json            # Recommended extensions
│   └── launch.json                # Debug configuration
│
├── .eslintrc.json                 # ESLint rules
├── .prettierrc                    # Prettier config
├── .semgreprc.yml                 # Semgrep SAST rules
├── .snyk                          # Snyk config
├── jest.config.js                 # Jest testing config
├── Dockerfile                     # Container image
├── .dockerignore
├── .env.example                   # Environment variables template
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js                      # Entry point (npm start)
```

### Frontend
```
una-chat-ssdlc/frontend/
├── public/
│   ├── vite.svg
│   └── favicon.ico
│
├── src/
│   ├── assets/
│   │   ├── logo.svg
│   │   └── icons/
│   │
│   ├── components/
│   │   ├── auth/
│   │   │   ├── Login.jsx
│   │   │   ├── Logout.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   └── index.js
│   │   │
│   │   ├── chat/
│   │   │   ├── ChatContainer.jsx
│   │   │   ├── MessageList.jsx
│   │   │   ├── Message.jsx
│   │   │   ├── MessageInput.jsx
│   │   │   ├── UserList.jsx
│   │   │   └── index.js
│   │   │
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Loading.jsx
│   │   │   ├── ErrorBoundary.jsx
│   │   │   └── index.js
│   │   │
│   │   └── layout/
│   │       ├── Header.jsx
│   │       ├── Footer.jsx
│   │       ├── Sidebar.jsx
│   │       └── index.js
│   │
│   ├── hooks/
│   │   ├── useAuth.js             # Auth logic
│   │   ├── useSocket.js           # Socket.IO logic
│   │   ├── useChat.js             # Chat logic
│   │   ├── useLocalStorage.js     # Storage logic
│   │   └── index.js               # Export all
│   │
│   ├── context/
│   │   ├── AuthContext.jsx        # Auth state provider
│   │   ├── ChatContext.jsx        # Chat state provider
│   │   ├── providers.jsx          # Compose providers
│   │   └── index.js               # Export all
│   │
│   ├── services/
│   │   ├── api.service.js         # Axios instance + interceptors
│   │   ├── auth.service.js        # Auth API calls
│   │   ├── socket.service.js      # Socket.IO client
│   │   ├── message.service.js     # Message API calls
│   │   ├── security.service.js    # Client-side security
│   │   └── index.js               # Export all
│   │
│   ├── utils/
│   │   ├── validators.js          # Input validation functions
│   │   ├── sanitizers.js          # Output sanitization
│   │   ├── constants.js           # App constants
│   │   ├── helpers.js             # Helper functions
│   │   └── index.js               # Export all
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Chat.jsx
│   │   ├── NotFound.jsx
│   │   └── index.js
│   │
│   ├── styles/
│   │   ├── global.css             # Global styles
│   │   ├── tailwind.css           # Tailwind imports
│   │   └── variables.css          # CSS variables
│   │
│   ├── App.jsx                    # Root component
│   ├── main.jsx                   # Entry point (React DOM)
│   └── router.jsx                 # React Router config
│
├── tests/
│   ├── unit/
│   │   ├── components/
│   │   │   ├── MessageInput.test.jsx
│   │   │   ├── MessageList.test.jsx
│   │   │   └── Login.test.jsx
│   │   │
│   │   ├── hooks/
│   │   │   ├── useAuth.test.js
│   │   │   ├── useChat.test.js
│   │   │   └── useSocket.test.js
│   │   │
│   │   └── services/
│   │       ├── api.service.test.js
│   │       └── socket.service.test.js
│   │
│   ├── integration/
│   │   ├── auth.flow.test.jsx
│   │   └── chat.flow.test.jsx
│   │
│   └── setup.js                   # Vitest setup
│
├── docs/
│   ├── SBOM.md
│   └── COMPONENTS.md
│
├── .vscode/
│   ├── settings.json
│   └── extensions.json
│
├── .eslintrc.json
├── .prettierrc
├── vite.config.js
├── vitest.config.js               # Vitest config
├── tailwind.config.js
├── postcss.config.js
├── Dockerfile
├── .dockerignore
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── index.html
└── README.md
```

---

## 🔒 Flujo de Seguridad (SSDLC)

```
┌─────────────────────────────────────┐
│  Desarrollo                         │
└────────────────┬────────────────────┘
                 │
    ┌────────────▼───────────────┐
    │ 1. Test-First (TDD/BDD)    │
    │    - Escribir tests primero│
    │    - Red phase              │
    └────────────┬────────────────┘
                 │
    ┌────────────▼──────────────────┐
    │ 2. Validación de Entrada      │
    │    - Schema validation (Zod)  │
    │    - Type checking            │
    └────────────┬──────────────────┘
                 │
    ┌────────────▼────────────────────┐
    │ 3. Sanitización de Salida       │
    │    - XSS prevention (DOMPurify) │
    │    - Output encoding            │
    └────────────┬────────────────────┘
                 │
    ┌────────────▼────────────────────┐
    │ 4. Rate Limiting                │
    │    - Prevenir brute force       │
    │    - DOS protection             │
    └────────────┬────────────────────┘
                 │
    ┌────────────▼────────────────────┐
    │ 5. Logging & Monitoreo          │
    │    - Eventos de seguridad       │
    │    - Audit trail                │
    └────────────┬────────────────────┘
                 │
    ┌────────────▼────────────────────┐
    │ 6. Tests Green (80% coverage)   │
    │    - Unit tests pass            │
    │    - Integration tests pass     │
    └────────────┬────────────────────┘
                 │
    ┌────────────▼────────────────────┐
    │ 7. Linting & Formatting         │
    │    - ESLint                     │
    │    - Prettier                   │
    └────────────┬────────────────────┘
                 │
    ┌────────────▼────────────────────┐
    │ 8. Build & Compilation          │
    │    - npm run build              │
    │    - Sin errores                │
    └────────────┬────────────────────┘
                 │
    ┌────────────▼────────────────────┐
    │ 9. SBOM & Security Scan         │
    │    - Software Bill of Materials │
    │    - CVE checking               │
    │    - SAST analysis              │
    └────────────┬────────────────────┘
                 │
    ┌────────────▼────────────────────┐
    │ 10. Commit Seguro               │
    │     - Conventional commit       │
    │     - Push a rama feature       │
    │     - Pull request              │
    └────────────┬────────────────────┘
                 │
    ┌────────────▼────────────────────┐
    │ ✅ LISTO PARA PRODUCCIÓN        │
    └────────────────────────────────┘
```

---

## 📊 Mapeo de Responsabilidades

### Backend
| Componente | Responsabilidad |
|-----------|-----------------|
| Controllers | HTTP request handling, validación de entrada |
| Services | Business logic, data processing |
| Middlewares | Cross-cutting concerns (auth, rate limit, error) |
| Utils | Validadores, sanitizadores, helpers |
| Sockets | WebSocket event handling |
| Routes | URL to controller mapping |

### Frontend
| Componente | Responsabilidad |
|-----------|-----------------|
| Pages | Screen layout, routing |
| Components | UI rendering (dumb components) |
| Hooks | State management, side effects |
| Services | API calls, WebSocket communication |
| Context | Global state management |
| Utils | Validators, sanitizers, helpers |

---

## ✅ Principios Aplicados

### SOLID
- **S**: Cada servicio, componente tiene UNA responsabilidad
- **O**: Services extendibles, Controllers cerrados
- **L**: Componentes sustituibles
- **I**: Interfaces/Props específicas
- **D**: Inyección de dependencias en services

### Clean Code
- Máx 50 líneas por función
- Máx 3 niveles de anidamiento
- Nombres descriptivos
- Sin comentarios innecesarios
- Sin código muerto

### Security First
- Validación obligatoria
- Sanitización antes de renderizar/guardar
- Rate limiting en endpoints críticos
- Logging de eventos de seguridad
- No hardcodear secrets

---

**Versión:** 1.0  
**Fecha:** Octubre 2025  
**Proyecto:** UNA Chat Backend - SSDLC Implementation
