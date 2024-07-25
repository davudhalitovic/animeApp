import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* Full viewport height */
  width: 100%;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  background-color: #333;
  width: 100%; /* Full width */
  padding: 1rem;
  margin: 0;
  position: fixed; /* Fix the navbar at the top */
  top: 0; /* Position it at the top */
  left: 0; /* Start from the left edge */
  z-index: 1000; /* Ensure it's above other content */
`;

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%; /* Full width of the navbar */
  padding: 0.5rem;

  img {
    height: 40px;
    margin-right: 1rem;
  }

  h1 {
    color: #fff;
    font-size: 1.5rem;
    margin: 0; /* Remove default margin */
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
    margin-right: 0.5rem;
    font-weight: bold;
  }
`;
