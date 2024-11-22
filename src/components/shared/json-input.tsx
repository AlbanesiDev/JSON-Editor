import CodeEditor from '@uiw/react-textarea-code-editor'
import rehypePrism from 'rehype-prism-plus'
import Spinner from './spinner'
import { Button } from '../ui/button'
import { useRef } from 'react'
import { useFileReader, toast } from '@/hooks'
import { formatJson, isValidJsonStringArrayOrObject, fixAndValidateJson } from '@/utils'
import { Trash2, Upload } from 'lucide-react'
import { jsonStore } from '@/store/json'
import { useStore } from '@nanostores/react'

const JsonInput = () => {
  const code = useStore(jsonStore.code)

  const { isLoading, readFile } = useFileReader()

  const fileInputRef = useRef<HTMLInputElement>(null)

  const uploadJson = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      readFile(
        file,
        (content) => {
          const isValidStructure = fixAndValidateJson(content)
          if (isValidStructure) {
            jsonStore.setCode(formatJson(content))
          } else {
            toast({
              description: 'The selected file does not contain a valid JSON.',
            })
          }
        },
        () =>
          toast({
            description: 'Error reading the file.',
          })
      )
    }
    event.target.value = ''
  }

  const editor = (value: string) => {
    console.log(value)
    const isValidStructure = isValidJsonStringArrayOrObject(value)
    console.log(isValidStructure, 'x')
    if (isValidStructure) {
      jsonStore.setCode(value)
    }
  }

  return (
    <div className="relative overflow-hidden rounded">
      <input type="file" accept=".json" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
      <Button
        size="icon"
        title="Upload JSON"
        variant="ghost"
        className="absolute right-14 top-4 z-50 text-white"
        onClick={uploadJson}
        disabled={isLoading}
      >
        <Upload />
      </Button>

      <Button
        size="icon"
        title="Clear input"
        variant="ghost"
        className="absolute right-4 top-4 z-50 text-white"
        onClick={() => jsonStore.clearCode()}
        disabled={isLoading}
      >
        <Trash2 />
      </Button>

      <CodeEditor
        value={code}
        language="json"
        placeholder="Input..."
        onChange={(evn) => editor(evn.target.value)}
        disabled={isLoading}
        padding={16}
        rehypePlugins={[[rehypePrism, { ignoreMissing: true, showLineNumbers: true }]]}
        style={{
          backgroundColor: '#171717',
          fontSize: 16,
          minHeight: 620,
        }}
      />
      <Spinner isLoading={isLoading} />
    </div>
  )
}

export default JsonInput
