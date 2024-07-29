import React, { useState, useEffect, useContext } from "react";
import { AnimeApi } from "../../api/request";
import { MainContent, InputBox } from "./AnimePage.styled";
import AnimeCard from "../../Components/Cards/AnimeCard";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import CategorySelect from "../../Components/CategorySelect/CategorySelect";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { PreviewContext } from "../../Context/PreviewContext";
import { Link } from "react-router-dom";

function AnimePage() {
  // STATE HOOKS
  const [animeList, setAnimeList] = useState([]);
  const [nextPage, setNextPage] = useState("/anime");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const { setDataPreview } = useContext(PreviewContext);

  // LOAD ON SCROLL
  const loadMoreAnime = async (category = selectedCategory) => {
    if (isLoading || !nextPage) return;
    setIsLoading(true);
    try {
      const { data, nextPage: newNextPage } = await AnimeApi(nextPage);
      setAnimeList((prev) => [...prev, ...data]);
      setNextPage(newNextPage);
    } catch (error) {
      console.error("Failed to fetch more anime data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const initialLoad = async () => {
      setAnimeList([]);
      setNextPage("/anime");
      await loadMoreAnime(selectedCategory);
    };
    initialLoad();
  }, [selectedCategory]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 500
    ) {
      loadMoreAnime();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading, nextPage]);

  // CATEGORY SELECT
  const handleCategoryChange = (event) => {
    const selected = event.target.value;
    setSelectedCategory(selected);
    setAnimeList([]);
    setNextPage(selected ? `/anime?filter[categories]=${selected}` : "/anime");
  };

  // SEARCH BAR
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setAnimeList([]);
    setNextPage(`/anime?filter[text]=${event.target.value}`);
  };

  // SHOW MORE INFO
  const handleAnimeClick = (anime) => {
    setDataPreview(anime);
  };

  return (
    <MainContent>
      <InputBox>
        <CategorySelect
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        <SearchBar
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
        />
      </InputBox>
      {animeList.map((anime, index) => (
        <Link
          key={`${anime.id}-${index}`}
          to="/preview"
          onClick={() => handleAnimeClick(anime)}
        >
          <AnimeCard
            coverImage={anime.attributes.posterImage?.medium}
            title={anime.attributes.canonicalTitle}
          />
        </Link>
      ))}
      {isLoading && (
        <Box display="flex" justifyContent="center" width="100%" mt={2}>
          <CircularProgress color="secondary" />
        </Box>
      )}
    </MainContent>
  );
}

export default AnimePage;
