import React from "react";
import styled from "styled-components";
import { device } from "../breakpoints";

import DotSlider from "../components/DotSlider";

import hurley from "../assets/crew/image-douglas-hurley.webp";
import shuttleworth from "../assets/crew/image-mark-shuttleworth.webp";
import glover from "../assets/crew/image-victor-glover.webp";
import ansari from "../assets/crew/image-anousheh-ansari.webp";

const Container = styled.div`
	display: grid;
	justify-items: center;
	justify-self: center;
	grid-template-columns: 327px;
	grid-template-rows: repeat(3, min-content);
	margin-top: 140px;

	@media ${device.tablet} {
		grid-template-columns: 458px;
		margin-top: 220px;
	}

	@media ${device.desktop} {
		grid-template-columns: 750px 600px;
		grid-template-rows: 600px auto;
	}
`;

const Picture = styled.img`
	height: 225px;
	align-self: center;

	@media ${device.tablet} {
		height: 450px;
		grid-row: 3/4;
	}

	@media ${device.desktop} {
		height: 700px;
		grid-column: 2/3;
		grid-row: 1/3;
		align-self: flex-end;
	}
`;

const Border = styled.hr`
	border: 1px solid #383b4b;
	margin-bottom: 32px;
	width: 100%;

	@media ${device.tablet} {
		display: none;
	}
`;

const Hero = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	margin-top: 32px;

	@media ${device.tablet} {
		grid-row: 1/2;
		margin-bottom: 40px;
	}

	@media ${device.desktop} {
		grid-column: 1/2;
		grid-row: 1/2;
		text-align: start;
		justify-self: flex-start;
		margin-top: 250px;
		margin-left: 100px;
		margin-bottom: 0px;
	}
`;

const Slider = styled.div`
	@media ${device.desktop} {
		grid-column: 1/2;
		grid-row: 2/3;
		align-self: center;
		justify-self: flex-start;
		margin-left: 100px;
	}
`;

const Title = styled.h4`
	opacity: 0.5;
	margin-bottom: 8px;
`;

const Name = styled.h3`
	margin-bottom: 16px;
`;

const Desc = styled.p`
	@media ${device.desktop} {
		width: 444px;
	}
`;

const CrewMember = ({ picture, title, name, desc }) => {
	return (
		<Container>
			<Picture src={picture}></Picture>
			<Border />
			<Slider>
				<DotSlider />
			</Slider>
			<Hero>
				<Title>{title}</Title>
				<Name>{name}</Name>
				<Desc>{desc}</Desc>
			</Hero>
		</Container>
	);
};

export const Hurley = () => {
	return (
		<CrewMember
			picture={hurley}
			title="COMMANDER"
			name="DOUGLAS HURLEY"
			desc="Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
		/>
	);
};

export const Shuttleworth = () => {
	return (
		<CrewMember
			picture={shuttleworth}
			title="Mission Specialist"
			name="MARK SHUTTLEWORTH"
			desc="Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
		/>
	);
};

export const Glover = () => {
	return (
		<CrewMember
			picture={glover}
			title="PILOT"
			name="VICTOR GLOVER"
			desc="Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
		/>
	);
};

export const Ansari = () => {
	return (
		<CrewMember
			picture={ansari}
			title="Flight Engineer"
			name="Anousheh Ansari"
			desc="Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
		/>
	);
};
