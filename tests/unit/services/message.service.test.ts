import messageService from "../../../src/services/message.service"

describe('MessageService - validateMessageLength', () => {
  it('should return true for valid message length', () => {
    // Given
    const validMessage = 'Hello world'

    // When
    const result = messageService.validateMessageLength(validMessage)

    // Then
    expect(result).toBe(true)
  })

  it('should return false for empty message', () => {
    // Given
    const emptyMessage = ''

    // When
    const result = messageService.validateMessageLength(emptyMessage)

    // Then
    expect(result).toBe(false)
  })

  it('should return false for message exceeding max length', () => {
    // Given
    const longMessage = 'a'.repeat(5001)

    // When
    const result = messageService.validateMessageLength(longMessage)

    // Then
    expect(result).toBe(false)
  })
})

describe('MessageService - validateUsername', () => {
  it('should return true for valid username', () => {
    // Given
    const validUsername = 'JohnDoe'

    // When
    const result = messageService.validateUsername(validUsername)

    // Then
    expect(result).toBe(true)
  })

  it('should return false for username too short', () => {
    // Given
    const shortUsername = 'AB'

    // When
    const result = messageService.validateUsername(shortUsername)

    // Then
    expect(result).toBe(false)
  })

  it('should return false for username too long', () => {
    // Given
    const longUsername = 'a'.repeat(51)

    // When
    const result = messageService.validateUsername(longUsername)

    // Then
    expect(result).toBe(false)
  })
})

describe('MessageService - validateColor', () => {
  it('should return true for valid hex color', () => {
    // Given
    const validColor = '#FF5733'

    // When
    const result = messageService.validateColor(validColor)

    // Then
    expect(result).toBe(true)
  })

  it('should return true for valid short hex color', () => {
    // Given
    const validShortColor = '#F57'

    // When
    const result = messageService.validateColor(validShortColor)

    // Then
    expect(result).toBe(true)
  })

  it('should return false for invalid color format', () => {
    // Given
    const invalidColor = 'red'

    // When
    const result = messageService.validateColor(invalidColor)

    // Then
    expect(result).toBe(false)
  })

  it('should return false for color without hash', () => {
    // Given
    const colorWithoutHash = 'FF5733'

    // When
    const result = messageService.validateColor(colorWithoutHash)

    // Then
    expect(result).toBe(false)
  })
})

describe('MessageService - processMessage', () => {
  it('should process valid message successfully', () => {
    // Given
    const validMsg = JSON.stringify({
      nombre: 'TestUser',
      mensaje: 'Hello world',
      color: '#FF5733',
    })

    // When
    const result = messageService.processMessage(validMsg)

    // Then
    expect(result.nombre).toBe('TestUser')
    expect(result.mensaje).toBe('Hello world')
    expect(result.color).toBe('#FF5733')
    expect(result.timestamp).toBeDefined()
  })

  it('should sanitize malicious content in message', () => {
    // Given
    const maliciousMsg = JSON.stringify({
      nombre: '<script>alert("xss")</script>',
      mensaje: '<img src="x" onerror="alert(1)">',
      color: '#000000',
    })

    // When
    const result = messageService.processMessage(maliciousMsg)

    // Then
    expect(result.nombre).not.toContain('<script>')
    expect(result.mensaje).not.toContain('<img')
  })

  it('should use default color for invalid color', () => {
    // Given
    const msgWithInvalidColor = JSON.stringify({
      nombre: 'User',
      mensaje: 'Hello',
      color: 'invalid-color',
    })

    // When
    const result = messageService.processMessage(msgWithInvalidColor)

    // Then
    expect(result.color).toBe('#000000')
  })

  it('should return error message for invalid JSON', () => {
    // Given
    const invalidJson = 'not-a-json'

    // When
    const result = messageService.processMessage(invalidJson)

    // Then
    expect(result.nombre).toBe('Sistema')
    expect(result.mensaje).toBe('Error procesando mensaje')
    expect(result.color).toBe('#ff0000')
  })
})
