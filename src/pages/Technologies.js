import React from "react";
import styled from "styled-components";
import { device } from "../breakpoints";
import { Outlet } from "react-router-dom";

import bgDesktop from "../assets/technology/background-technology-desktop.jpg";
import bgTablet from "../assets/technology/background-technology-tablet.jpg";
import bgMobile from "../assets/technology/background-technology-mobile.jpg";

const Background = styled.div`
	background-image: url(${bgMobile});
	background-repeat: no-repeat;
	background-size: cover;

	display: grid;
	min-height: 100vh;
	max-height: 100%;

	@media ${device.tablet} {
		background-image: url(${bgTablet});
	}

	@media ${device.desktop} {
		background-image: url(${bgDesktop});
	}
`;

const Bold = styled.span`
	color: gray;
	font-weight: 700;
	padding-right: 18px;
`;

const Heading = styled.h5`
	position: absolute;
	margin-top: 88px;
	justify-self: center;

	@media ${device.tablet} {
		justify-self: flex-start;
		margin-top: 136px;
		margin-left: 40px;
	}

	@media ${device.desktop} {
		grid-column: 1/2;
		grid-row: 1/2;
		margin-top: 212px;
		margin-left: 180px;
	}
`;

const Technologies = () => {
	return (
		<Background>
			<Heading>
				<Bold>03</Bold>SPACE LAUNCH 101
			</Heading>
			<Outlet />
		</Background>
	);
};

export default Technologies;
