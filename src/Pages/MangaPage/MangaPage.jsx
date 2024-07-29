import React, { useState, useEffect, useContext } from "react";
import { MangaApi } from "../../api/request";
import { MainContent, InputBox } from "../AnimePage/AnimePage.styled";
import AnimeCard from "../../Components/Cards/AnimeCard";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import CategorySelect from "../../Components/CategorySelect/CategorySelect";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { PreviewContext } from "../../Context/PreviewContext";
import { Link } from "react-router-dom";

function MangaPage() {
  // STATE HOOKS
  const [mangaList, setMangaList] = useState([]);
  const [nextPage, setNextPage] = useState("/manga");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const { setDataPreview } = useContext(PreviewContext);

  // LOAD ON SCROLL
  const loadMoreManga = async (category = selectedCategory) => {
    if (isLoading || !nextPage) return;
    setIsLoading(true);
    try {
      const { data, nextPage: newNextPage } = await MangaApi(nextPage);
      setMangaList((prev) => [...prev, ...data]);
      setNextPage(newNextPage);
    } catch (error) {
      console.error("Failed to fetch more manga data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const initialLoad = async () => {
      setMangaList([]);
      setNextPage("/manga");
      await loadMoreManga(selectedCategory);
    };
    initialLoad();
  }, [selectedCategory]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 500
    ) {
      loadMoreManga();
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
    setMangaList([]);
    setNextPage(selected ? `/manga?filter[categories]=${selected}` : "/manga");
  };

  // SEARCH BAR
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setMangaList([]);
    setNextPage(`/manga?filter[text]=${event.target.value}`);
  };

  // SHOW MORE INFO
  const handleMangaClick = (manga) => {
    setDataPreview(manga);
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
      {mangaList.map((manga, index) => (
        <Link
          key={`${manga.id}-${index}`}
          to="/preview"
          onClick={() => handleMangaClick(manga)}
        >
          <AnimeCard
            coverImage={manga.attributes.posterImage?.medium}
            title={manga.attributes.canonicalTitle}
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

export default MangaPage;
