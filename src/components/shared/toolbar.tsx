import { useLocation } from 'react-router-dom'
import { Button } from '../ui/button'
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
// import { Input } from '../ui/input'
import { useStore } from '@nanostores/react'
import { jsonStore } from '@/store/json'
import { minifyJson } from '@/utils/minify-json'
import { formatJson } from '@/utils'

const ToolbarEditor = () => {
  const code = useStore(jsonStore.code)
  const isValid = useStore(jsonStore.isValid)

  const minify = () => {
    const codeMinify = minifyJson(code)
    jsonStore.setCodeOutput(codeMinify)
  }

  const format = () => {
    const codeMinify = formatJson(code)
    jsonStore.setCodeOutput(codeMinify)
  }

  // const deleteKey = () => {}
  // const renameKey = () => {}

  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        {/* <Select disabled={isValid}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select key" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value=""></SelectItem>
          </SelectContent>
        </Select> */}
        {/* <Input placeholder="New name" disabled={isValid} />
        <Button disabled={isValid} onClick={renameKey}>
          Rename All
        </Button>
        <Button variant="destructive" disabled={isValid} onClick={deleteKey}>
          Delete All
        </Button> */}
      </div>
      <div className="flex gap-2">
        <Button disabled={isValid} onClick={minify}>
          Minify
        </Button>
        <Button disabled={isValid} onClick={format}>
          Format
        </Button>
      </div>
    </div>
  )
}
const ToolbarGraph = () => {
  return <div className=""></div>
}
const ToolbarInterfaces = () => {
  return <div className=""></div>
}

const Toolbar = () => {
  const location = useLocation()
  const currentRoute = location.pathname

  return (
    <div className="h-[70px] rounded-md border bg-neutral-300 p-4">
      {currentRoute.startsWith('/editor') && <ToolbarEditor />}
      {currentRoute.startsWith('/graph') && <ToolbarGraph />}
      {currentRoute.startsWith('/interfaces') && <ToolbarInterfaces />}
    </div>
  )
}

export default Toolbar
