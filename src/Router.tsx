import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home/styled'
import { Dashboard } from './Pages/Dashboard/Dashboard'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dsb" element={<Dashboard />} />
    </Routes>
  )
}
