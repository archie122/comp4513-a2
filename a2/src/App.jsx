import { useState } from 'react'
import './App.css'
import Layout1 from './components/home2/Layout1.jsx'


import { Routes, Route } from 'react-router-dom';

import Login from './components/login/Login.jsx';
import Home from './components/home/Home.jsx';


function App() {

  return (
    <main>
      <Routes>
        <Route path='/comp4513-a2' element={<Login />} />
        {/* <Route path='/home' element={<Home />} /> */}
        <Route path='/home' element={<Layout1 />} />
        {/* <Route path='/comp4513-a2' element={<Home />} /> TESTING*/}
      </Routes>
    </main>
  )
}

export default App
