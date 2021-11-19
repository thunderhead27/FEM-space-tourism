import React from "react";
import { device } from "../breakpoints";
import styled, { keyframes } from "styled-components";

import bgDesktop from "../assets/home/background-home-desktop.jpg";
import bgTablet from "../assets/home/background-home-tablet.jpg";
import bgMobile from "../assets/home/background-home-mobile.jpg";

const Background = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	width: 100%;
	height: 100vh;
	background-image: url(${bgMobile});
	background-repeat: no-repeat;
	background-size: cover;

	@media ${device.tablet} {
		background-image: url(${bgTablet});
	}

	@media ${device.desktop} {
		background-image: url(${bgDesktop});
		flex-direction: row;

		align-items: center;
	}
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	gap: 40px;

	@media ${device.desktop} {
		flex-direction: row;
		width: 100%;
		justify-content: space-around;
		align-items: flex-end;
	}
`;

const Hero = styled.div`
	width: 327px;
	height: 276px;
	text-align: center;
	margin-top: 80px;

	> * {
		margin-bottom: 16px;
	}

	@media ${device.tablet} {
		width: 450px;
		height: 334px;
	}

	@media ${device.desktop} {
		width: 450px;
		height: 382px;
		text-align: start;
	}
`;

const pulse = keyframes`
	0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
	}

	70% {
		transform: scale(1);
		box-shadow: 0 0 0 3em rgba(255, 255, 255, 0.1);

	}

	100% {
		transform: scale(1);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
	}
`;

const Button = styled.button`
	width: 150px;
	height: 150px;
	border-radius: 50%;
	border: none;
	color: var(--dark);
	font-size: 20px;
	line-height: 23px;
	letter-spacing: 1.25px;

	font-family: "Bellefair", serif;
	text-transform: uppercase;
	transition: box-shadow 0.2s ease-in;

	&:hover {
		transform: scale(1);
		animation: ${pulse} 2s infinite;
	}

	@media ${device.tablet} {
		width: 242px;
		height: 242px;
		font-size: 32px;
		line-height: 36.67px;
		letter-spacing: 2px;
	}

	@media ${device.desktop} {
		width: 274px;
		height: 274px;

		&:hover {
			box-shadow: 0 0 0 88px rgba(255, 255, 255, 0.1);
		}
	}
`;

const Home = () => {
	return (
		<Background>
			<Container>
				<Hero>
					<h5>SO, YOU WANT TO TRAVEL TO</h5>
					<h1>SPACE</h1>
					<p>
						Let’s face it; if you want to go to space, you might as
						well genuinely go to outer space and not hover kind of
						on the edge of it. Well sit back, and relax because
						we’ll give you a truly out of this world experience!
					</p>
				</Hero>
				<Button>Explore</Button>
			</Container>
		</Background>
	);
};

export default Home;
