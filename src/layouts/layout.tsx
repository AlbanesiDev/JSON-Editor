import { ReactNode } from 'react'

import JsonInput from '@/components/shared/json-input'
import Header from '@/components/ui/header'
import Toolbar from '@/components/shared/toolbar'
import { useLocation } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'

const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation()
  const currentRoute = location.pathname

  const getColSpan = (): { colOne: string; colTwo: string } => {
    if (currentRoute.startsWith('/editor')) {
      return { colOne: 'lg:col-span-6', colTwo: 'lg:col-span-6' }
    } else if (currentRoute.startsWith('/graph')) {
      return { colOne: 'lg:col-span-3', colTwo: 'lg:col-span-9' }
    } else {
      return { colOne: 'lg:col-span-5', colTwo: 'lg:col-span-7' }
    }
  }
  const colSpan = getColSpan()

  return (
    <>
      <Header />
      <main className="container flex flex-col gap-4 py-8">
        <Toolbar />
        <div className="grid grid-cols-12 gap-4">
          <div className={`col-span-12 ${colSpan.colOne}`}>
            <JsonInput />
          </div>
          <div className={`col-span-12 ${colSpan.colTwo}`}>{children}</div>
        </div>
      </main>
      <Toaster />
    </>
  )
}

export default Layout
