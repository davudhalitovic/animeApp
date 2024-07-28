import styled from "styled-components";

const Container = styled.div`
    margin-left: 180px;
    margin-top: 150px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const AnimeList = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
`;

const AnimeItem = styled.li`
    position: relative;
    margin: 10px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:hover .hover-details {
        display: flex;
    }
`;

const AnimeImage = styled.img`
    width: 250px;
    height: 355px;
    margin-right: 10px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    transition: transform 0.3s ease-in-out;
    &:hover {
        transform: scale(1.04);
    }
`;

const HoverDetails = styled.div`
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 96%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 10px;
    box-sizing: border-box;
`;

const AnimeTitle = styled.h2`
    font-size: 18px;
    margin: 0;
`;

const FavTitle = styled.h1`
    font-size: 24px;
    margin-top: 2rem;
    margin-bottom: 2rem;
`;

const Hr = styled.hr`
    width: 90%;
    margin-bottom: 2rem;
`;

const RemoveButton = styled.button`
    margin-top: 10px;
    padding: 5px 10px;
    border: none;
    background: #ff5c5c;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background: #ff1a1a;
    }
`;
const NoFavorites = styled.p`
    color: white;
    font-size: 24px;
    margin-top: 2rem;
    margin-bottom: 2rem;
    text-align: center;
`;
export { Container, AnimeList, AnimeItem, AnimeImage, HoverDetails, AnimeTitle, FavTitle, Hr, RemoveButton, NoFavorites };
