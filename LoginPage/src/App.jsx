import { useState } from 'react'
import signup from './signup'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path ='/register' element={signup /}></Route>
        <Route path ='/register' element={login /}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
