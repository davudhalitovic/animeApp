import React from "react";
import { Nav, Navigation, NavWrapper} from "./Navbar.styled";
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
    </Navigation>
    );
}

export default Navbar;