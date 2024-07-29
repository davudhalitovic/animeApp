import styled from "styled-components";

//MainContent - podesenj da se nalazi izmedju sideBar i navBar
export const MainContent = styled.div`
  margin-top: 85px;
  margin-left: 160px;
  padding: 1rem;
  width: calc(97% - 160px);
  height: calc(100vh - 85px);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const InputBox = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  border-bottom: 3px solid white;
  padding: 20px 10px;
`;
