import { useState } from 'react'
import './App.css'
import Layout1 from './components/home2/Layout1.jsx'
import Favorite from './components/favorite/Favorites.jsx'
import About from './components/about/About.jsx'
import Login from './components/login/Login.jsx';
// import Home from './components/home/Home.jsx';

import { Routes, Route } from 'react-router-dom';




function App() {
   const clearFavList = () => {
    setFav1([]);
    setFav2([]);
    setFav3([]);
  };

  const [fav1, setFav1] = useState([]);

  const getFav1 = (info) => {
    console.log(info);
    const newFav = [...fav1, info];
    setFav1(newFav);
  }

 

  const [fav2, setFav2] = useState([]);

  const getFav2 = (info) => {
    console.log(info);
    const newFav = [...fav2, info];
    setFav2(newFav);
  }


  const [fav3, setFav3] = useState([]);

  const getFav3 = (info) => {
    console.log(info);
    const newFav = [...fav3, info];
    setFav3(newFav);
  }

  

  return (
    <main>
      <Routes>
        <Route path='/comp4513-a2' element={<Login />} />
        <Route path='/home' element={<Layout1 getFav1={getFav1} getFav2={getFav2} getFav3={getFav3}/>} />
        <Route path='/about' element={<About />} />
        <Route path='/favorite' element={<Favorite getFav1={fav1} getFav2={fav2} getFav3={fav3} clearFav={clearFavList}/>} />
      </Routes>
    </main>
  )
}

export default App
