import React from "react";
import { AniCard } from "./AnimeCard.Style";

function AnimeCard({ coverImage, title }) {
  return (
    <>
      <AniCard style={{ backgroundImage: `url(${coverImage})` }} />
    </>
  );
}

export default AnimeCard;
