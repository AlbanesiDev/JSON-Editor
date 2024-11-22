/* eslint-disable @typescript-eslint/no-explicit-any */
export const renameJsonKey = (
  obj: Record<string, any>,
  keyPath: string,
  newKey: string
): Record<string, any> => {
  const keys = keyPath.split('.')
  const lastKey = keys.pop()

  let target = obj
  keys.forEach((key) => {
    target = target[key]
  })

  if (lastKey && target[lastKey]) {
    target[newKey] = target[lastKey]
    delete target[lastKey]
  }

  return { ...obj }
}
