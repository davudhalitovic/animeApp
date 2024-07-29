import React, { useContext } from "react";
import { PreviewContext } from "../../Context/PreviewContext";
import { FavoritesContext } from "../../Context/FavoritesContext";
import { Button, Container, Decsription, Img } from "./Preview.styled";
import { Link } from "react-router-dom";

function PreviewPage() {
    const { dataPreview } = useContext(PreviewContext);
    const { addFavorite } = useContext(FavoritesContext);

    if (!dataPreview) {
        return <p>No data available</p>;
    }

    return (
        <Container>
            <Img
                src={dataPreview.attributes.posterImage.original}
                alt={dataPreview.attributes.canonicalTitle}
            />
            <Decsription>
                <h1>{dataPreview.attributes.canonicalTitle}</h1>
                <p>{dataPreview.attributes.description}</p>
                <Link to="/favorites"><Button onClick={() => addFavorite(dataPreview)}>Add to Favorites</Button></Link>
            </Decsription>
        </Container>
    );
}

export default PreviewPage;
