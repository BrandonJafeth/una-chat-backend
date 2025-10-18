# 📌 QUICK REFERENCE - UNA Chat Backend

## 🔤 Convenciones de Nombres

### Backend
```
Variables/Funciones: camelCase
const getUserById = (userId) => { }

Constantes: UPPER_SNAKE_CASE
const MAX_LOGIN_ATTEMPTS = 5

Clases/Servicios: PascalCase
class UserService { }
```

### Frontend
```
Variables Estado: camelCase + prefijo
const [isLoading, setIsLoading] = useState(false)
const [currentUser, setCurrentUser] = useState(null)

Componentes: PascalCase
function ChatContainer() { }

Hooks: use + PascalCase
function useAuth() { }

Constantes: UPPER_SNAKE_CASE
const API_BASE_URL = 'http://localhost:5000'
```

---

## 🚀 Flujo de Desarrollo

### 1. Crear Tests (Red Phase)
```bash
# Crear en tests/unit/ o tests/integration/
# Usar BDD: Given-When-Then
describe('UserService', () => {
  it('should return user when valid id provided', () => {
    // Given, When, Then
  })
})
```

### 2. Implementar (Green Phase)
```bash
# Código mínimo para pasar tests
# Seguir convenciones
# Aplicar SOLID
```

### 3. Refactorizar (Blue Phase)
```bash
# Mejorar legibilidad
# Reducir duplication
# Tests sigan pasando
```

### 4. Validación
```bash
npm run lint       # ESLint
npm test           # Tests (80% coverage)
npm run build      # Build
```

### 5. Commit
```bash
git commit -m "[tipo]: descripción"
# feat: add user authentication
# fix: resolve login bug
```

---

## 🔒 Checklist Seguridad

### Backend
- [ ] ✓ Validación con Zod/Joi
- [ ] ✓ Sanitización XSS
- [ ] ✓ Rate limiting activado
- [ ] ✓ CORS restrictivo
- [ ] ✓ Helmet headers
- [ ] ✓ JWT con expiración (15 min)
- [ ] ✓ Logging de eventos

### Frontend
- [ ] ✓ Sanitizar con DOMPurify
- [ ] ✓ Token en sessionStorage (no localStorage)
- [ ] ✓ Validar URLs antes de redirect
- [ ] ✓ CSP configurado

---

## 📋 Pre-Commit Checklist

- [ ] Nombres siguen convenciones
- [ ] Entrada validada
- [ ] Salida sanitizada
- [ ] No hardcodear secrets
- [ ] Tests green (80% min)
- [ ] Linting sin errores
- [ ] Build sin errores
- [ ] Código limpio (máx 50 líneas)
- [ ] SOLID principles aplicados
- [ ] Documentación actualizada

---

## 🛠️ Comandos Principales

```bash
# Backend
npm run dev              # Hot-reload
npm run lint             # ESLint
npm test                 # Jest
npm run build            # Compilar
npm start                # Producción

# Frontend
npm run dev              # Vite dev
npm run lint             # ESLint
npm test                 # Vitest
npm run build            # Build prod
```

---

## 📐 Estructuras Clave

### Backend: Controllers
```javascript
class AuthController {
  constructor(authService, logger) {
    this.authService = authService
    this.logger = logger
  }

  async login(req, res, next) {
    try {
      const result = await this.authService.authenticate(...)
      res.status(200).json({ success: true, data: result })
    } catch (error) {
      next(error)
    }
  }
}
```

### Backend: Services
```javascript
class UserService {
  constructor(securityService, logger) {
    this.securityService = securityService
    this.logger = logger
  }

  async getUserById(userId) {
    const sanitized = this.securityService.validate(userId)
    const user = await this.db.findById(sanitized)
    return this.maskSensitiveData(user)
  }
}
```

### Frontend: Custom Hook
```javascript
export function useAuth() {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = useCallback(async (email, password) => {
    const response = await authService.login(email, password)
    setUser(response.user)
    setIsAuthenticated(true)
  }, [])

  return { user, isAuthenticated, login }
}
```

### Frontend: Component
```javascript
function ChatContainer() {
  const { user, isAuthenticated } = useAuthContext()
  const { messages, sendMessage } = useChat()

  if (!isAuthenticated) return <div>Please log in</div>

  return (
    <div>
      <MessageList messages={messages} />
      <MessageInput onSend={sendMessage} />
    </div>
  )
}
```

---

## 🧪 Testing Pattern

```javascript
describe('Feature', () => {
  describe('useCase', () => {
    it('should do X when condition Y', () => {
      // Given
      const input = 'value'
      
      // When
      const result = function(input)
      
      // Then
      expect(result).toEqual(expected)
    })
  })
})
```

---

## 📚 SOLID Quick Check

- **S**: ¿Tiene esta clase/función una única responsabilidad?
- **O**: ¿Puedo extender sin modificar código existente?
- **L**: ¿Puedo sustituir esta implementación por otra?
- **I**: ¿Tiene solo métodos que necesita?
- **D**: ¿Depende de abstracciones, no de concretos?

---

## 🔐 Security Checklist

**Antes de guardar datos:**
1. ✓ Validar estructura (schema)
2. ✓ Sanitizar contenido (XSS)
3. ✓ Loguear evento

**Antes de retornar datos:**
1. ✓ Sanitizar si es HTML
2. ✓ Enmascarar datos sensibles
3. ✓ No exponer internals

**Endpoints críticos:**
1. ✓ Rate limiting activado
2. ✓ Auth middleware
3. ✓ Validación entrada

---

## 📖 Documentos Principales

| Documento | Contenido | Uso |
|-----------|----------|-----|
| AGENTS.MD | Especificaciones detalladas | Referencia completa |
| README.md | Documentación principal | Overview del proyecto |
| ARQUITECTURA_FINAL.md | Diagramas y capas | Entender flujos |
| INDICE_RAPIDO.md | Guía rápida | Referencia diaria |
| Este documento | Quick reference | Imprimir o referencia |

---

## 🎯 Máximas Importantes

1. **Código Limpio:** Máx 50 líneas por función
2. **Anidamiento:** Máx 3 niveles
3. **Cobertura:** Mínimo 80%
4. **Seguridad:** Validar siempre
5. **SOLID:** En cada decisión
6. **Testing:** Test-First (TDD)
7. **Documentación:** Código autodocumentado

---

## ⚡ Hot Tips

- Usar spread operator para immutability
- Prefijo "is" para booleanos: `isLoading`, `isValid`
- Naming: `get`, `set`, `create`, `update`, `delete`
- Errores custom: `ValidationError`, `UnauthorizedError`
- Logs: `logger.info()`, `logger.error()`, `logger.warn()`
- Tests: mock dependencies, test behavior no implementation

---

**Versión:** 1.0 | **Proyecto:** UNA Chat Backend | **Fecha:** Octubre 2025
