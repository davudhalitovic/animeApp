import React from 'react'
import './App.css'
import Navbar from './Components/Navigation/Navigation'
import Home from './Pages/Home/Home'
import MangaPage from './Pages/MangaPage/MangaPage'
import Favorites from './Pages/Favorites/Favorites'
import AnimePage from './Pages/AnimePage/AnimePage'
import Preview from './Pages/Preview/Preview'
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
        <Route path="/preview" element={<Preview/>} />
      </Routes>
    </>
  )
}

export default App
