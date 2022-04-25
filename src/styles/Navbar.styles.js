import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  padding: 20px auto;
  height: auto;
  display: flex;
  align-items: center;
  position: relative;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    height: 50px;
    overflow: hidden;
    transition: all 0.5s ease;
    &.active {
      height: calc(370px + ${(props) => props.homeHeight});
    }
  }
`;
export const Logo = styled.div`
  font-size: 30px;
  cursor: pointer;
  align-self: flex-start;
`;
export const NavBarLinksContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    height: auto;
    margin-top: 20px;
  }
`;
export const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    width: 100%;
  }
`;
export const NavBarLink = styled(NavLink)`
  padding: 8px 15px;
  border-radius: 5px;
  transition: all 0.3s ease;
  margin-left: 5px;
  display: ${(props) => props.display};
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
  @media only screen and (max-width: 900px) {
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
  }
`;

export const Explore = styled.div`
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
  div {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 15px;
    border-radius: 8px;
    transition: all 0.3s ease;
    cursor: pointer;
    &.active {
      background: var(--color-primary);
      color: white;
    }
    &:hover {
      color: white;
      background: var(--color-primary);
    }
    svg {
      margin-left: 5px;
      transition: all 0.3s ease;
    }
    &.active svg {
      transform: rotate(180deg);
    }
    @media only screen and (max-width: 900px) {
      width: 100%;
      margin-bottom: 10px;
    }
  }
`;

export const ExploreNavLinks = styled.ul`
  position: absolute;
  right: 74%;
  top: 45px;
  padding: 10px 0;
  display: grid;
  z-index: 10;
  background-color: var(--color-primary);
  border-radius: 8px;
  transition: all 0.2s ease;
  width: 0;
  height: 0;
  overflow: hidden;
  &.active {
    width: 160px;
    height: 230px;
  }
  @media only screen and (max-width: 900px) {
    top: 110px;
    right: 43%;
  }
  @media only screen and (max-width: 340px) {
    right: 35%;
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
  padding: 7px 10px;
  border-radius: 8px;
  margin-top: -5px;
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
export const MenuToggle = styled.div`
  width: 90px;
  height: 90px;
  position: absolute;
  top: -20px;
  right: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  &::before {
    position: absolute;
    content: "" !important;
    width: 30px;
    height: 3px;
    background: #555;
    transform: translateY(-10px);
    box-shadow: 0 10px #555;
    transition: 0.2s;
  }
  &::after {
    position: absolute;
    content: "" !important;
    width: 30px;
    height: 3px;
    background: #555;
    transform: translateY(10px);
    transition: 0.2s;
  }
  &.active::before {
    transform: translateY(0px) rotate(45deg);
    box-shadow: 0 0 #555;
  }
  &.active::after {
    transform: translateY(0px) rotate(-45deg);
  }
  @media only screen and (max-width: 900px) {
    opacity: 1;
  }
`;