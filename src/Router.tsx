import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home/HomePage'
import { Dashboard } from './Pages/Dashboard/Dashboard'
import { MovieDetail } from './Pages/MovieDetail/MovieDetail'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dsb" element={<Dashboard />} />
      <Route path='/movieDetail/:id' element={<MovieDetail />} />
    </Routes>
  )
}
