import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes'
import Layout from './layouts/layout'
import './App.css'

function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  )
}

export default App
