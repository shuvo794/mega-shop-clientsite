import React, { useState } from "react";
import { Container } from "../../styles/globalStyles";
import {
  Logo,
  NavbarContainer,
  NavBarLink,
  NavBarLinksContainer,
  NavLinks,
  Explore,
  Login,
  IconLink,
} from "../../styles/Navbar.styles";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { ExploreNavLink } from "../../styles/Navbar.styles";
import { ExploreNavLinks } from "../../styles/Navbar.styles";

const Navbar = () => {
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  return (
    <div style={{ backgroundColor: "#f4fbfd", padding: "20px 0" }}>
      <Container>
        <NavbarContainer>
          <Logo>Logo</Logo>
          <NavBarLinksContainer>
            <NavLinks>
              <NavBarLink to="/home">Home</NavBarLink>
              <NavBarLink to="/shop">Shop</NavBarLink>
              <NavBarLink to="/about">About</NavBarLink>
              <NavBarLink to="/contact">Contact</NavBarLink>
              <NavBarLink to="/vendors">Vendors</NavBarLink>
            </NavLinks>
            <Explore>
              <div onClick={() => setIsExploreOpen(!isExploreOpen)}>
                <p>Explore </p>
                <IoIosArrowDown />
              </div>
              <ExploreNavLinks className={`${isExploreOpen ? "active" : ""}`}>
                <ExploreNavLink to="/home">Our Team</ExploreNavLink>
                <ExploreNavLink to="/home">Order Tracking</ExploreNavLink>
                <ExploreNavLink to="/home">Special Offer</ExploreNavLink>
                <ExploreNavLink to="/home">Checkout</ExploreNavLink>
                <ExploreNavLink to="/home">Unit Testing</ExploreNavLink>
              </ExploreNavLinks>
            </Explore>
            <Login>
              <NavBarLink to="/login">Login</NavBarLink>
              <IconLink to="/search">
                <IoIosSearch />
              </IconLink>
            </Login>
          </NavBarLinksContainer>
        </NavbarContainer>
      </Container>
    </div>
  );
};

export default Navbar;
