import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from './button'
import { Braces, ChartNetwork, FileCode2 } from 'lucide-react'

const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const handleNavigation = (to: string) => {
    if (location.pathname !== to) {
      navigate(to)
    }
  }

  return (
    <header className="flex w-full items-center justify-center bg-primary py-3">
      <nav className="container flex items-center justify-between">
        <Button onClick={() => handleNavigation('/editor')}>
          <Braces />
          JsonE
        </Button>

        <ul className="flex gap-2">
          <li>
            <Button
              variant="secondary"
              onClick={() => handleNavigation('/editor')}
            >
              <Braces />
              Editor
            </Button>
          </li>
          <li>
            <Button
              variant="secondary"
              onClick={() => handleNavigation('/graph')}
            >
              <ChartNetwork />
              Graph
            </Button>
          </li>
          <li>
            <Button
              variant="secondary"
              onClick={() => handleNavigation('/interfaces')}
            >
              <FileCode2 />
              Interfaces
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
