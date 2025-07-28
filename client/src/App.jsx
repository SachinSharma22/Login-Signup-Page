import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Happylogin from './pages/Happylogin'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/happylogin' element={<Happylogin />} />
      </Routes>
    </div>
  )
}

export default App
