import React, { useEffect, useState } from "react";
import { fetchAnimeCategories } from "../../api/request";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { StyledFormControl, StyledSelect } from "./CategorySelect.Styled";

const CategorySelect = ({ selectedCategory, onCategoryChange }) => {
  const [categories, setCategories] = useState([]);

  const predefinedCategories = [
    { id: "adventure", attributes: { slug: "adventure", title: "Adventure" } },
    { id: "action", attributes: { slug: "action", title: "Action" } },
    { id: "fantasy", attributes: { slug: "fantasy", title: "Fantasy" } },
    { id: "crime", attributes: { slug: "crime", title: "Crime" } },
    { id: "drama", attributes: { slug: "drama", title: "Drama" } },
    { id: "romance", attributes: { slug: "romance", title: "Romance" } },
    {
      id: "supernatural",
      attributes: { slug: "supernatural", title: "Supernatural" },
    },
    { id: "magic", attributes: { slug: "magic", title: "Magic" } },
    { id: "horror", attributes: { slug: "horror", title: "Horror" } },
  ];

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await fetchAnimeCategories();
        setCategories([...predefinedCategories, ...categoriesData]);
      } catch (error) {
        console.error("Failed to fetch anime categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <StyledFormControl variant="outlined">
      <InputLabel id="category-select-label">Category</InputLabel>
      <StyledSelect
        labelId="category-select-label"
        id="category-select"
        value={selectedCategory}
        onChange={onCategoryChange}
        label="Category"
      >
        <MenuItem value="">All</MenuItem>
        {categories.map((category) => (
          <MenuItem key={category.id} value={category.attributes.slug}>
            {category.attributes.title}
          </MenuItem>
        ))}
      </StyledSelect>
    </StyledFormControl>
  );
};

export default CategorySelect;
