import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../breakpoints";
import logo from "../assets/shared/logo.svg";
import Hamburger from "hamburger-react";

const Container = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	width: 100vw;
	max-width: 100%;
	height: 88px;
	z-index: 1;

	@media ${device.tablet} {
		height: 96px;
	}

	@media ${device.desktop} {
		height: 96px;
		padding-left: 55px;
		margin-top: 40px;
	}
`;

const Logo = styled.img`
	width: 40px;
	height: 40px;
	margin-left: 24px;

	@media ${device.tablet} {
		width: 48px;
		height: 48px;
	}
`;

const Hl = styled.hr`
	display: none;

	@media ${device.desktop} {
		position: absolute;
		display: block;
		width: 33vw;
		border: 1px solid rgba(255, 255, 255, 0.2515);
		margin: auto 0;
		left: 167px;
		z-index: 10;
	}
`;

const StyledMenu = styled.ul`
	position: fixed;
	display: flex;
	flex-direction: column;
	height: 100vh;
	justify-content: center;
	margin-top: 50vh;
	overflow: hidden;

	width: ${({ sidebar }) => (sidebar ? "254px" : "0px")};
	height: 150vh;
	right: 0;
	background-color: rgba(255, 255, 255, 0.04);
	backdrop-filter: blur(81.5485px);

	transition: 0.3s ease-in;

	@media ${device.tablet} {
		position: absolute;
		flex-direction: row;
		align-items: center;
		width: 450px;
		height: 96px;
		margin-top: 0;
	}

	@media ${device.desktop} {
		padding-left: 123px;
		width: 60vw;
		height: 96px;
	}
`;

const LinkContainer = styled.li`
	display: flex;

	@media ${device.tablet} {
		margin-right: 37px;
	}

	@media ${device.desktop} {
		margin-right: 48px;
	}
`;

const StyledLink = styled(NavLink)`
	color: #fff;
	font-family: "Barlow Condensed", sans-serif;
	font-size: 16px;
	letter-spacing: 2.7px;
	text-transform: uppercase;
	text-transform: uppercase;
	text-decoration: none;

	padding: 16px 32px;

	z-index: 5;

	@media ${device.tablet} {
		font-size: 14px;
		padding: 0;
	}

	@media ${device.desktop} {
		font-size: 16px;
		padding: 36px 0;

		&:hover {
			border-bottom: 2px solid gray;
		}

		&.active {
			border-bottom: 2px solid white;
		}
	}
`;

const Bold = styled.span`
	font-weight: 700;

	@media ${device.tablet} {
		display: none;
	}

	@media ${device.desktop} {
		display: inline-block;
	}
`;

const BurgerWrapper = styled.div`
	position: fixed;
	right: 24px;

	@media ${device.tablet} {
		display: none;
	}
`;

const Header = ({ sidebar }) => {
	const [open, setOpen] = useState(false);

	const toggleSidebar = () => {
		setOpen(!open);
	};

	return (
		<>
			<Container>
				<Link to="/">
					<Logo src={logo} alt="logo" />
				</Link>
				<Hl />

				<StyledMenu sidebar={open}>
					<LinkContainer>
						<StyledLink
							className={(navData) =>
								navData.isActive ? ".active" : ""
							}
							to="/"
						>
							<Bold>00</Bold> Home
						</StyledLink>
					</LinkContainer>
					<LinkContainer>
						<StyledLink
							className={(navData) =>
								navData.isActive ? ".active" : ""
							}
							to="/destination"
						>
							<Bold>01</Bold> Destination
						</StyledLink>
					</LinkContainer>
					<LinkContainer>
						<StyledLink
							className={(navData) =>
								navData.isActive ? ".active" : ""
							}
							to="/crew"
						>
							<Bold>02</Bold> Crew
						</StyledLink>
					</LinkContainer>
					<LinkContainer>
						<StyledLink
							className={(navData) =>
								navData.isActive ? ".active" : ""
							}
							to="/technology"
						>
							<Bold>03</Bold> Technology
						</StyledLink>
					</LinkContainer>
				</StyledMenu>
				<BurgerWrapper>
					<Hamburger
						color="white"
						toggled={open}
						toggle={toggleSidebar}
					/>
				</BurgerWrapper>
			</Container>
		</>
	);
};

export default Header;
