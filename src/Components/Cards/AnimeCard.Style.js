import styled from "styled-components";

export const AniCard = styled.div`
  width: 100%;
  max-width: 250px;
  height: 400px;
  box-sizing: border-box;
  border-radius: 10px;
  margin: 20px;
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    max-width: 200px;
    height: 320px;
  }

  @media (max-width: 480px) {
    max-width: 150px;
    height: 240px;
  }
`;

export const Title = styled.h3`
  text-align: center;
  font-size: 1rem;
  margin-top: 10px;
  color: #fff;
`;
