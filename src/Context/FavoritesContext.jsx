import React, { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (anime) => {
        setFavorites((prevFavorites) => [...prevFavorites, anime]);
    };

    const removeFavorite = (id) => {
        setFavorites((prevFavorites) => prevFavorites.filter(anime => anime.id !== id));
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};
