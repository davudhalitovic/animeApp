import styled from "styled-components";

export const AniCard = styled.div`
  width: 250px;
  max-width: 250px;
  height: 400px;
  box-sizing: border-box;
  border-radius: 10px;
  margin: 20px;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);

    &::after {
      background-color: rgba(0, 0, 0, 0.5);
    }

    div {
      opacity: 1;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    transition: background-color 0.3s;
  }

  @media (max-width: 768px) {
    max-width: 200px;
    height: 320px;
  }

  @media (max-width: 480px) {
    max-width: 150px;
    height: 240px;
  }
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const AnimeTitle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  font-weight: bold;
  opacity: 0;
  transition: opacity 0.3s;
  z-index: 2;
`;
