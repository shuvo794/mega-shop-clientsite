import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.div`
  height: 90px;
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
`;
export const Logo = styled.div`
  font-size: 30px;
  cursor: pointer;
  padding: auto;
`;
export const NavBarLinksContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const NavLinks = styled.ul``;
export const NavBarLink = styled(NavLink)`
  padding: 8px 15px;
  border-radius: 5px;
  transition: all 0.3s ease;
  margin-left: 5px;
  &.active {
    background-color: var(--color-primary);
    color: #fff;
  }
  &:hover {
    color: white;
    background: var(--color-primary);
  }
  &:hover:before {
    width: 100%;
  }
`;

export const Explore = styled.div`
  div {
    position: relative;
    display: flex;
    align-items: center;
    padding: 8px 15px;
    border-radius: 8px;
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover {
      color: white;
      background: var(--color-primary);
    }
    svg {
      margin-left: 5px;
    }
  }
`;

export const ExploreNavLinks = styled.ul`
  position: absolute;
  right: 30%;
  top: 68px;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  z-index: 5;
  background-color: var(--color-primary);
  border-radius: 8px;
  transition: all 0.2s ease;
  width: 0;
  height: 0;
  overflow: hidden;
  &.active {
    width: auto;
    height: auto;
  }
`;
export const ExploreNavLink = styled(NavLink)`
  color: white;
  padding: 8px 20px;
  transition: all 0.3s ease;
  &:hover {
    background-color: white;
    color: var(--color-primary);
  }
`;
export const Login = styled.div`
  display: flex;
  align-items: center;
`;
export const IconLink = styled(NavLink)`
  padding: 8px 10px;
  border-radius: 8px;
  height: 100%;
  margin-left: 10px;
  &:hover {
    color: white;
    background: var(--color-primary);
  }
  & > svg {
    font-size: 22px;
    margin-bottom: -7px;
  }
`;
