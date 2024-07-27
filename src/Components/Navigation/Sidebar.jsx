import React from "react";
import { SidebarContainer, SidebarLink } from "./Navbar.styled";


function Sidebar() {
    return (
     <SidebarContainer>
        <SidebarLink to="/">Home</SidebarLink>
        <SidebarLink to="/manga">Manga</SidebarLink>
        <SidebarLink to="/favorites">Favorites</SidebarLink>
        <SidebarLink to="/anime">Anime</SidebarLink>
        <SidebarLink to="/about">About</SidebarLink>
      </SidebarContainer>
    )
}

export default Sidebar