import React from "react";
import styled from "styled-components";
import { Outlet, NavLink } from "react-router-dom";
import { device } from "../breakpoints";

const Nav = styled.nav`
	text-align: center;
`;

const StyledLink = styled(NavLink)`
	font-family: "Bellefair", serif;
	font-size: 16px;
	cursor: pointer;
	height: 40px;
	width: 40px;
	line-height: 40px;
	color: #ffffff;
	background-color: transparent;
	border-radius: 50%;
	margin: 0 8px;
	border: 2px solid rgba(255, 255, 255, 0.25);
	display: inline-block;
	text-decoration: none;

	&:hover {
		border: 2px solid rgba(255, 255, 255);
	}

	&.active {
		border: none;
		color: #0b0d17;
		background-color: #ffffff;
	}

	@media ${device.desktop} {
		display: block;
		height: 80px;
		width: 80px;
		line-height: 80px;
		margin: 16px 0;

		font-size: 32px;
	}
`;

const DotSlider = () => {
	return (
		<>
			<Nav>
				<StyledLink
					className={(navData) => (navData.isActive ? ".active" : "")}
					exact
					to="/technology/vehicle"
				>
					1
				</StyledLink>
				<StyledLink
					className={(navData) => (navData.isActive ? ".active" : "")}
					exact
					to="/technology/capsule"
				>
					2
				</StyledLink>
				<StyledLink
					className={(navData) => (navData.isActive ? ".active" : "")}
					exact
					to="/technology/spaceport"
				>
					3
				</StyledLink>
			</Nav>
		</>
	);
};

export default DotSlider;
