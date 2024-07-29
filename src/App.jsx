import React from "react";
import "./App.css";
import Navbar from "./Components/Navigation/Navigation";
import Home from "./Pages/Home/Home";
import MangaPage from "./Pages/MangaPage/MangaPage";
import AnimePage from "./Pages/AnimePage/AnimePage";
import Preview from "./Pages/Preview/Preview";
import Favorites from "./Pages/Favorites/Favorites";
import About from "./Pages/About/About";
import { Routes, Route } from "react-router-dom";
import AnimeGirl from "./Components/Feature/AnimeGirl";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manga" element={<MangaPage />} />
        <Route path="/anime" element={<AnimePage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <AnimeGirl />
    </>
  );
}

export default App;
