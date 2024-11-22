export const collectJsonKeys = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  obj: Record<string, any>,
  parentKey = ''
): string[] => {
  const keys: string[] = []

  Object.keys(obj).forEach((key) => {
    const fullKey = parentKey ? `${parentKey}.${key}` : key
    keys.push(fullKey)

    if (typeof obj[key] === 'object' && obj[key] !== null) {
      keys.push(...collectJsonKeys(obj[key], fullKey))
    }
  })

  return keys
}
