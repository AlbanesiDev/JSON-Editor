import CodeEditor from '@uiw/react-textarea-code-editor'
import { useToast } from '@/hooks/use-toast'
import { Button } from '../ui/button'
import { Clipboard } from 'lucide-react'
import { jsonStore } from '@/store/json'
import { useStore } from '@nanostores/react'

const JsonOutput = () => {
  const codeOutput = useStore(jsonStore.codeOutput)
  const { toast } = useToast()

  const copyToClipboard = async () => {
    if (codeOutput) {
      try {
        await navigator.clipboard.writeText(codeOutput)
        toast({
          description: 'Copied to clipboard correctly',
        })
      } catch {
        toast({
          description: 'There was an error while trying to copy to the clipboard.',
        })
      }
    } else {
      toast({
        description: 'You must first place a json',
      })
    }
  }

  return (
    <div className="relative">
      <Button
        size="icon"
        title="Copy"
        variant="ghost"
        className="absolute right-4 top-4 z-50 text-white"
        onClick={copyToClipboard}
      >
        <Clipboard />
      </Button>
      <CodeEditor
        readOnly
        value={codeOutput}
        language="json"
        placeholder="Output..."
        onChange={(evn) => jsonStore.setCode(evn.target.value)}
        padding={16}
        style={{
          backgroundColor: '#171717',
          borderRadius: 4,
          fontSize: 16,
          minHeight: 620,
          cursor: 'copy',
          overflowY: 'auto',
        }}
        onClick={copyToClipboard}
      />
    </div>
  )
}

export default JsonOutput
