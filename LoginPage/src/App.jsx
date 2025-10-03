import { useState } from 'react'
import login from './login.jsx'
import signup from './signup.jsx'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path ='/register' element={signup />}></Route>
        <Route path ='/login' element={login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
