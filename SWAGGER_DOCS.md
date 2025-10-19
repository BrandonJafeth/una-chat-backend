# 📚 Swagger API Documentation

Esta aplicación incluye documentación interactiva de la API usando Swagger/OpenAPI 3.0.

## 🚀 Acceso a la Documentación

Una vez que el servidor esté corriendo, accede a:

```
http://localhost:5000/api-docs
```

## 📖 Características

### ✅ Documentación Interactiva
- Prueba todos los endpoints directamente desde el navegador
- Visualiza los schemas de request/response
- Valida automáticamente los datos de entrada
- Copia fácilmente los ejemplos de cURL

### 🔐 Seguridad Documentada
- Rate limiting configurado (30 req/min para mensajes)
- Validación de entrada con Zod
- Sanitización XSS automática
- Headers de seguridad con Helmet

## 📝 Endpoints Disponibles

### Health Check
```
GET /api/health
```
Verifica el estado del servidor.

**Response 200:**
```json
{
  "message": "OK",
  "uptime": 12345.67,
  "timestamp": "2025-10-18T12:00:00.000Z",
  "environment": "development"
}
```

### Enviar Mensaje
```
POST /api/chat/messages
```
Envía un mensaje al chat.

**Request Body:**
```json
{
  "nombre": "JohnDoe",
  "mensaje": "Hello everyone!",
  "color": "#FF5733"
}
```

**Validaciones:**
- `nombre`: 3-50 caracteres
- `mensaje`: 1-5000 caracteres
- `color`: Formato hexadecimal (#RGB o #RRGGBB)

**Response 200:**
```json
{
  "success": true,
  "data": {
    "nombre": "JohnDoe",
    "mensaje": "Hello everyone!",
    "color": "#FF5733",
    "timestamp": "2025-10-18T12:00:00.000Z"
  }
}
```

**Error 400 (Validation Error):**
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid username length",
    "timestamp": "2025-10-18T12:00:00.000Z"
  }
}
```

**Error 429 (Rate Limit):**
```json
{
  "message": "Too many requests, please try again later"
}
```

### Obtener Historial
```
GET /api/chat/messages/history
```
Obtiene el historial de mensajes (no implementado aún).

**Response 200:**
```json
{
  "success": true,
  "data": [],
  "message": "Message history not implemented yet"
}
```

## 🎨 Personalización

La documentación de Swagger está personalizada con:
- Título personalizado: "UNA Chat API Documentation"
- Sin barra superior (topbar oculta)
- Persistencia de autenticación (si se implementa)

## 🔧 Configuración

La configuración de Swagger se encuentra en:
```
src/config/swagger.config.ts
```

Las anotaciones JSDoc están en:
```
src/routes/health.routes.ts
src/routes/chat.routes.ts
```

## 📦 Schemas Definidos

### Message (Request)
```typescript
{
  nombre: string    // 3-50 caracteres
  mensaje: string   // 1-5000 caracteres
  color: string     // Formato: #RGB o #RRGGBB
}
```

### ProcessedMessage (Response)
```typescript
{
  nombre: string
  mensaje: string
  color: string
  timestamp: string (ISO 8601)
}
```

### ErrorResponse
```typescript
{
  success: false
  error: {
    code: string
    message: string
    timestamp: string
  }
}
```

## 🛡️ Seguridad

Todas las requests pasan por:
1. **Helmet** - Headers de seguridad HTTP
2. **CORS** - Control de acceso cross-origin
3. **Rate Limiting** - Límite de requests por IP
4. **Validation** - Validación con Zod schemas
5. **Sanitization** - Limpieza XSS con biblioteca xss
6. **Error Handling** - Manejo centralizado sin exponer detalles

## 💡 Ejemplos de Uso

### Usando cURL
```bash
# Health check
curl http://localhost:5000/api/health

# Enviar mensaje
curl -X POST http://localhost:5000/api/chat/messages \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "JohnDoe",
    "mensaje": "Hello!",
    "color": "#FF5733"
  }'
```

### Usando JavaScript/Fetch
```javascript
// Enviar mensaje
const response = await fetch('http://localhost:5000/api/chat/messages', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    nombre: 'JohnDoe',
    mensaje: 'Hello everyone!',
    color: '#FF5733'
  })
})

const data = await response.json()
console.log(data)
```

## 🎯 Próximos Pasos

1. Implementar autenticación JWT
2. Agregar endpoints de autenticación (login/logout)
3. Implementar historial de mensajes persistente
4. Agregar filtros y paginación al historial
5. Documentar eventos de WebSocket

---

**Nota:** La documentación se genera automáticamente desde los comentarios JSDoc en el código fuente.
