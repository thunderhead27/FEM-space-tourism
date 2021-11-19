import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { device } from "../breakpoints";
import styled from "styled-components";

const Nav = styled.nav`
	width: 238px;
	height: 28px;
	background-color: transparent;

	@media ${device.tablet} {
		width: 285px;
		height: 34px;
	}

	z-index: 5;
`;

const StyledMenu = styled.ul`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const LinkContainer = styled.li`
	display: flex;
	align-items: center;
	height: 28px;
`;

const StyledLink = styled(NavLink)`
	color: #fff;
	font-family: "Barlow Condensed", sans-serif;
	font-size: 14px;
	letter-spacing: 2.36px;
	text-transform: uppercase;
	text-decoration: none;

	&:hover {
		border-bottom: 2px solid gray;
	}

	&.active {
		border-bottom: 2px solid white;
	}

	@media ${device.tablet} {
		height: 34px;
		font-size: 14px;
		padding: 0;
	}

	@media ${device.desktop} {
		font-size: 16px;
	}
`;

const MiniNavBar = () => {
	return (
		<>
			<Nav>
				<StyledMenu>
					<LinkContainer>
						<StyledLink
							className={(navData) =>
								navData.isActive ? ".active" : ""
							}
							exact
							to="/destination/moon"
						>
							Moon
						</StyledLink>
					</LinkContainer>
					<LinkContainer>
						<StyledLink
							className={(navData) =>
								navData.isActive ? ".active" : ""
							}
							exact
							to="/destination/mars"
						>
							Mars
						</StyledLink>
					</LinkContainer>
					<LinkContainer>
						<StyledLink
							className={(navData) =>
								navData.isActive ? ".active" : ""
							}
							exact
							to="/destination/europa"
						>
							Europa
						</StyledLink>
					</LinkContainer>
					<LinkContainer>
						<StyledLink
							className={(navData) =>
								navData.isActive ? ".active" : ""
							}
							exact
							to="/destination/titan"
						>
							Titan
						</StyledLink>
					</LinkContainer>
				</StyledMenu>
			</Nav>
			<Outlet />
		</>
	);
};

export default MiniNavBar;
