import React from "react";
import styled from "styled-components";
import { device } from "../breakpoints";

import MiniNavBar from "../components/MiniNavBar";

import imgMoon from "../assets/destination/image-moon.webp";
import imgMars from "../assets/destination/image-mars.webp";
import imgEuropa from "../assets/destination/image-europa.webp";
import imgTitan from "../assets/destination/image-titan.webp";

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(2, min-content);
	place-items: center;
	margin-top: 100px;

	@media ${device.desktop} {
		margin: 0 160px;
		grid-template-columns: auto auto;
		grid-template-rows: auto auto;

		margin-top: 180px;
	}
`;

const Picture = styled.img`
	width: 170px;
	height: 170px;
	align-self: center;
	margin-top: 32px;
	margin-bottom: 26px;

	@media ${device.tablet} {
		width: 300px;
		height: 300px;
		margin-top: 60px;
	}

	@media ${device.desktop} {
		width: 445px;
		height: 445px;
		grid-column: 1/2;
		grid-row: 2/3;
		margin-right: 150px;
		align-self: flex-start;
		justify-self: center;
	}
`;

const StyledNavBar = styled.div`
	margin-bottom: 20px;

	@media ${device.tablet} {
		margin-bottom: 32px;
	}
`;

const Hero = styled.div`
	display: flex;
	flex-direction: column;
	width: 327px;
	height: 448px;
	text-align: center;
	align-items: center;

	@media ${device.tablet} {
		width: 573px;
	}

	@media ${device.desktop} {
		grid-column: 2/3;
		grid-row: 2/3;
		width: 445px;
		height: 472px;
		align-items: start;
		text-align: start;
		align-self: flex-start;
		margin-top: 64px;
		justify-self: flex-start;
	}
`;

const Name = styled.h2`
	margin-bottom: 1px;

	@media ${device.tablet} {
		margin-bottom: 8px;
	}

	@media ${device.tablet} {
		margin-bottom: 14px;
	}
`;

const Desc = styled.p`
	margin-bottom: 32px;
`;

const Border = styled.hr`
	border: 1px solid #383b4b;
	margin-bottom: 32px;
	width: 100%;

	@media ${device.tablet} {
		width: 100%;
	}
`;

const Subheadings = styled.div`
	display: flex;
	flex-direction: column;

	@media ${device.tablet} {
		width: 100%;
		flex-direction: row;
		justify-content: space-evenly;
	}

	@media ${device.desktop} {
		justify-content: flex-start;
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	margin-bottom: 32px;

	@media ${device.desktop} {
		margin-right: 80px;
		min-width: 160px;
	}
`;

const Destination = ({ picture, destName, text, distance, time }) => {
	return (
		<Container>
			<Picture src={picture} />
			<Hero>
				<StyledNavBar>
					<MiniNavBar />
				</StyledNavBar>
				<Name>{destName}</Name>
				<Desc>{text}</Desc>
				<Border />
				<Subheadings>
					<Wrapper>
						<p className="subheading-2">AVG. DISTANCE</p>
						<p className="subheading-1">{distance}</p>
					</Wrapper>
					<Wrapper>
						<p className="subheading-2">EST. TRAVEL TIME</p>
						<p className="subheading-1">{time}</p>
					</Wrapper>
				</Subheadings>
			</Hero>
		</Container>
	);
};

export const Moon = () => {
	return (
		<Destination
			picture={imgMoon}
			destName="Moon"
			text="See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
			distance="384,400 km"
			time="3 days"
		/>
	);
};

export const Mars = () => {
	return (
		<Destination
			picture={imgMars}
			destName="Mars"
			text="Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
			distance="225 MIL. km"
			time="9 months"
		/>
	);
};

export const Europa = () => {
	return (
		<Destination
			picture={imgEuropa}
			destName="Europa"
			text="The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
			distance="628 MIL. km"
			time="3 years"
		/>
	);
};

export const Titan = () => {
	return (
		<Destination
			picture={imgTitan}
			destName="Titan"
			text="The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
			distance="1.6 BIL. km"
			time="7 years"
		/>
	);
};
