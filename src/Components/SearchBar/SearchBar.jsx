import React from "react";
import { StyledTextField } from "./SearchBar.Style";

const SearchBar = ({ searchQuery, onSearchChange }) => {
  return (
    <StyledTextField
      variant="outlined"
      label="Search Anime"
      value={searchQuery}
      onChange={onSearchChange}
    />
  );
};

export default SearchBar;
