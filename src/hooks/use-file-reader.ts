import { useState } from 'react'

export const useFileReader = () => {
  const [isLoading, setIsLoading] = useState(false)

  const readFile = (
    file: File,
    onSuccess: (content: string) => void,
    onError?: () => void
  ) => {
    setIsLoading(true)
    const reader = new FileReader()

    reader.onload = (e) => {
      try {
        const content = e.target?.result as string
        onSuccess(content)
      } catch {
        onError?.()
      } finally {
        setIsLoading(false)
      }
    }

    reader.readAsText(file)
  }

  return { isLoading, readFile }
}
