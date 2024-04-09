import { useState } from 'react'
import './App.css'
import Layout1 from './components/home2/Layout1.jsx'
import Favorite from './components/favorite/Favorites.jsx'
import About from './components/about/About.jsx'
import Login from './components/login/Login.jsx';
// import Home from './components/home/Home.jsx';

import { Routes, Route } from 'react-router-dom';




function App() {

  return (
    <main>
      <Routes>
        <Route path='/comp4513-a2' element={<Login />} />
        <Route path='/home' element={<Layout1 />} />
        <Route path='/about' element={<About />} />
        <Route path='/favorite' element={<Favorite />} />
      </Routes>
    </main>
  )
}

export default App
