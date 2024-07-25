import React from "react";
import { Nav, Navigation, NavWrapper, SidebarContainer, SidebarLink } from "./Navbar.styled";
import pic from './logo.png';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Navigation>
     <Nav>
      <Link to="/">
        <NavWrapper>
          <img src={pic} alt="logo" />
          <h1>Anime App</h1>
        </NavWrapper>
      </Link>
     </Nav>
     <SidebarContainer>
        <SidebarLink to="/">Home</SidebarLink>
        <SidebarLink to="/manga">Manga</SidebarLink>
        <SidebarLink to="/favorites">Favorites</SidebarLink>
        <SidebarLink to="/anime">Anime</SidebarLink>
      </SidebarContainer>
    </Navigation>
  );
}

export default Navbar;
