export const formatJson = (content: string): string => {
  return JSON.stringify(JSON.parse(content), null, 2)
}
