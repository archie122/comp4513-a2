import { useState } from 'react'
import './App.css'


import { Routes, Route } from 'react-router-dom'; 

import Login from './components/login/Login.jsx';
import Home from './components/home/Home.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
        <Routes>
          <Route path='/comp4513-a2' element={<Login />} />
          <Route path='/home' element={<Home />} />
        </Routes>
    </main>
  )
}

export default App
