import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Homepage } from './pages/Homepage'
import { Stats } from './pages/Stats'
import { NotFound } from './pages/NotFound'

export function App() {
  return (
    <div className='App'>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path=''
            element={<Homepage />}
          />
          <Route
            path='/s/:phrase'
            element={<Stats />}
          />
          <Route
            path='*'
            element={<NotFound />}
          />
        </Route>
      </Routes>
    </div>
  )
}
