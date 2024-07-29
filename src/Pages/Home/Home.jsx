import React, { useState, useEffect, useContext } from "react";
import Carousel from "./Carousel";
import {
  CategName,
  Category,
  CategoryWrapper,
  ImgWrapper,
} from "./Home.styled";
import {
  fetchAdventureAnime,
  fetchRomanceAnime,
  fetchHorrorAnime,
  fetchAdventureManga,
  fetchActionManga,
} from "../../api/request";
import { Link } from "react-router-dom";
import { PreviewContext } from "../../Context/PreviewContext";
import { ClipLoader } from "react-spinners"; // Import the spinner

function Home() {
  const [adventureAnime, setAdventureAnime] = useState([]);
  const [romanceAnime, setRomanceAnime] = useState([]);
  const [horrorAnime, setHorrorAnime] = useState([]);
  const [adventureManga, setAdventureManga] = useState([]);
  const [actionManga, setActionManga] = useState([]);
  const [loading, setLoading] = useState(true);

  const { setDataPreview } = useContext(PreviewContext);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [
          adventureData,
          romanceData,
          horrorData,
          adventureMangaData,
          actionMangaData,
        ] = await Promise.all([
          fetchAdventureAnime(),
          fetchRomanceAnime(),
          fetchHorrorAnime(),
          fetchAdventureManga(),
          fetchActionManga(),
        ]);

        setAdventureAnime(adventureData.data);
        setRomanceAnime(romanceData.data);
        setHorrorAnime(horrorData.data);
        setAdventureManga(adventureMangaData.data);
        setActionManga(actionMangaData.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  const handleAnimeClick = (anime) => {
    setDataPreview(anime);
  };

  const renderCategory = (title, data) => (
    <>
      <CategName>{title}</CategName>
      <Category>
        {data.map((item) => (
          <Link
            key={item.id}
            to="/preview"
            onClick={() => handleAnimeClick(item)}
          >
            <ImgWrapper>
              <img
                src={item.attributes.posterImage.original}
                alt={item.attributes.canonicalTitle}
              />
            </ImgWrapper>
          </Link>
        ))}
      </Category>
    </>
  );

  return (
    <div style={{ overflowX: "hidden" }}>
      <Carousel />
      <CategoryWrapper>
        {loading ? (
          <ClipLoader color="purple" size={50} />
        ) : (
          <>
            {renderCategory("Adventure", adventureAnime)}
            {renderCategory("Romance", romanceAnime)}
            {renderCategory("Horror", horrorAnime)}
            {renderCategory("Adventure", adventureManga)}
            {renderCategory("Action", actionManga)}
          </>
        )}
      </CategoryWrapper>
    </div>
  );
}

export default Home;
