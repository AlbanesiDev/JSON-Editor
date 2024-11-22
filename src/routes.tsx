import { EditorPage, GraphPage, InterfacesPage } from '@/pages'
import { Routes, Route, Navigate } from 'react-router-dom'

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/editor" />} />
      <Route path="/editor" element={<EditorPage />} />
      <Route path="/graph" element={<GraphPage />} />
      <Route path="/interfaces" element={<InterfacesPage />} />
      <Route path="*" element={<Navigate to="/editor" />} />
    </Routes>
  )
}

export default AppRoutes
