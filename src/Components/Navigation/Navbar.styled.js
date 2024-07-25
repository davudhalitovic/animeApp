import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  background-color: #333;
  width: 100%; /* Full width */
  padding: 1rem;
  margin: 0;
  position: fixed; 
  top: 0; 
  left: 0; 
  z-index: 1000; 
  box-shadow: 0 1px 0px rgba(255, 255, 255, 1);
`;

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%; 
  padding: 0.5rem;

  img {
    height: 40px;
    margin-right: 1rem;
  }

  h1 {
    color: #fff;
    font-size: 1.5rem;
    margin: 0; 
  }
`;

export const SidebarContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #333;
  height: calc(100vh - 85px);
  width: 160px;
  position: fixed; 
  top: 85px; 
  left: 0; 
  box-shadow: 2px 2px 0px rgba(255, 255, 255, 1);
  * {
    margin: 1rem;
  }
`;

export const SidebarLink = styled(Link)`
  font-size: 0.9rem;
  text-decoration: none;
  color: white;
  &:hover {
    text-decoration: none;
    transition: 200ms;
    margin-right: 0.8rem;
    font-weight: bold;
  }

  &:focus{
    font-weight: bold;
    font-size: 1.2rem;
    margin-right: 0.8rem;
  }
`;
