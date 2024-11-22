export function isValidJsonStringArrayOrObject(input: string): boolean {
  try {
    const parsed = JSON.parse(input)

    if (typeof parsed === 'object' && (Array.isArray(parsed) || parsed !== null)) {
      const isDoubleQuotesValid = /^[\s{\\[\]}\s]*"(?:[^"\\]|\\.)*":?[\s\S]*[\\}\]]$/.test(input.trim())
      return isDoubleQuotesValid
    }
    return false
  } catch {
    return false
  }
}

export function fixAndValidateJson(input: string): string | null {
  try {
    // Intenta parsear la cadena directamente
    JSON.parse(input)
    return input // Si es válido, no necesita corrección
  } catch {
    // Intenta corregir el formato agregando comillas dobles a las claves
    const corrected = input.replace(/([{,]\s*)([a-zA-Z0-9_]+)(\s*:\s*)/g, '$1"$2"$3')

    try {
      // Verifica si el JSON corregido es válido
      JSON.parse(corrected)
      return corrected // Retorna el JSON corregido
    } catch {
      // Si no se puede corregir, retorna null
      return null
    }
  }
}
