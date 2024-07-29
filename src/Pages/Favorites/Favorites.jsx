import React, { useContext } from "react";
import { FavoritesContext } from "../../Context/FavoritesContext";
import { Container, AnimeList, AnimeItem, AnimeImage, HoverDetails, AnimeTitle, FavTitle, Hr, RemoveButton, NoFavorites } from "./Favorites.styled";

function FavoritesPage() {
    const { favorites, removeFavorite } = useContext(FavoritesContext);

    return (
        <Container>
            {favorites.length === 0 ? (
                <NoFavorites>No favorites added</NoFavorites>
            ) : (
                <>
                <FavTitle>Favorites</FavTitle>
                <Hr />
                <AnimeList>
                    {favorites.map((anime) => (
                        <AnimeItem key={anime.id}>
                            <AnimeImage
                                src={anime.attributes.posterImage.small}
                                alt={anime.attributes.canonicalTitle}
                            />
                            <HoverDetails className="hover-details">
                                <AnimeTitle>{anime.attributes.canonicalTitle}</AnimeTitle>
                                <RemoveButton onClick={() => removeFavorite(anime.id)}>Remove</RemoveButton>
                            </HoverDetails>
                        </AnimeItem>
                    ))}
                </AnimeList>
                </>
            )}
        </Container>
    );
}

export default FavoritesPage;
