import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import MangaPage from './Components/MangaPage/MangaPage'
import Favorites from './Components/Favorites/Favorites'
import AnimePage from './Components/AnimePage/AnimePage'
import { Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manga" element={<MangaPage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/anime" element={<AnimePage />} />
      </Routes>
    </>
  )
}

export default App
