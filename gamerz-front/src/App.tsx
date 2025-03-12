import { Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import MainLayout from './layout/MainLayout'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
