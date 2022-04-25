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
  MenuToggle,
} from "../../styles/Navbar.styles";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { ExploreNavLink } from "../../styles/Navbar.styles";
import { ExploreNavLinks } from "../../styles/Navbar.styles";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [toggleOpen, setToggleOpen] = useState(false);
  const location = useLocation();
  return (
    <div style={{ backgroundColor: "#f4fbfd", padding: "20px 0" }}>
      <Container>
        <NavbarContainer
          className={`${toggleOpen ? "active" : ""}`}
          homeHeight={`${
            (location.pathname === "/home") | (location.pathname === "/")
              ? "0px"
              : "45px"
          }`}
        >
          <MenuToggle
            onClick={() => setToggleOpen(!toggleOpen)}
            className={`${toggleOpen ? "active" : ""}`}
          />
          <Logo>Logo</Logo>
          <NavBarLinksContainer>
            <Explore>
              <div
                className={`${isExploreOpen ? "active" : ""}`}
                onClick={() => setIsExploreOpen(!isExploreOpen)}
              >
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
            <NavLinks>
              <NavBarLink
                to="/home"
                display={`${
                  (location.pathname === "/home") |
                    (location.pathname === "/") && "none"
                }`}
              >
                Home
              </NavBarLink>
              <NavBarLink to="/shop">Shop</NavBarLink>
              <NavBarLink to="/about">About</NavBarLink>
              <NavBarLink to="/contact">Contact</NavBarLink>
              <NavBarLink to="/vendors">Vendors</NavBarLink>
            </NavLinks>

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
