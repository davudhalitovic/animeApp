import React from "react";
import { AniCard, BackgroundImage, AnimeTitle } from "./AnimeCard.Style";

const AnimeCard = ({ coverImage, title }) => {
  return (
    <AniCard>
      <BackgroundImage src={coverImage} alt={title} />
      <AnimeTitle>{title}</AnimeTitle>
    </AniCard>
  );
};

export default AnimeCard;
