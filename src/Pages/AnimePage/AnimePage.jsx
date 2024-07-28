import React, { useState, useEffect } from "react";
import { AnimeApi } from "../../api/request";
import { MainContent, InputBox } from "./AnimePage.styled";
import AnimeCard from "../../Components/Cards/AnimeCard";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import CategorySelect from "../../Components/CategorySelect/CategorySelect";

function AnimePage() {
  //  STATE HOOKS
  const [animeList, setAnimeList] = useState([]);
  const [nextPage, setNextPage] = useState("/anime");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  //  LOAD ON SCROLL
  const loadMoreAnime = async () => {
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
    setAnimeList([]);
    setNextPage("/anime");
    loadMoreAnime(selectedCategory);
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

  //  CATEGORY SELECT
  const handleCategoryChange = (event) => {
    const selected = event.target.value;
    setSelectedCategory(selected);
    setAnimeList([]);
    setNextPage(selected ? `/anime?filter[categories]=${selected}` : "/anime");
  };

  return (
    <MainContent>
      <InputBox>
        <CategorySelect
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </InputBox>
      {animeList.map((anime, index) => (
        <AnimeCard
          key={`${anime.id}-${index}`}
          coverImage={anime.attributes.posterImage?.medium}
        />
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
