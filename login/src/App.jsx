import { useState } from 'react'
import login from '../../LoginPage/frontend/src/login'
import signup from '../../LoginPage/frontend/src/signup'
import {BrowserRouter, Routes , Route} from 'react-douter-dom'


function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element ={<signup/>}></Route>
        <Route path='/login' element ={<login/>}></Route>
      
      </Routes>
    
    
    </BrowserRouter>
  )
}

export default App
