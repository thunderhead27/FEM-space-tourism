import React from "react";
import styled from "styled-components";
import { Outlet, NavLink } from "react-router-dom";
import { device } from "../breakpoints";

const Nav = styled.nav`
  text-align: center;
`;

const StyledLink = styled(NavLink)`
  cursor: pointer;
  height: 10px;
  width: 10px;
  margin: 0 8px;
  background-color: rgba(100, 100, 100, 0.7);
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;

  &:hover {
    background-color: #717171;
  }

  &.active {
    background-color: #fff;
  }

  @media ${device.desktop} {
    height: 15px;
    width: 15px;
    margin: 0 12px;
  }
`;

const DotSlider = () => {
  return (
    <>
      <Nav>
        <StyledLink
          className={(navData) => (navData.isActive ? ".active" : "")}
          exact
          to="/crew/hurley"
        />
        <StyledLink
          className={(navData) => (navData.isActive ? ".active" : "")}
          exact
          to="/crew/shuttleworth"
        />
        <StyledLink
          className={(navData) => (navData.isActive ? ".active" : "")}
          exact
          to="/crew/glover"
        />
        <StyledLink
          className={(navData) => (navData.isActive ? ".active" : "")}
          exact
          to="/crew/ansari"
        />
      </Nav>
    </>
  );
};

export default DotSlider;
