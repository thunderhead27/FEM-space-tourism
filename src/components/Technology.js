import React from "react";
import styled from "styled-components";
import { device } from "../breakpoints";

import CircleSlider from "../components/CircleSlider";

import vehiclePort from "../assets/technology/image-launch-vehicle-portrait.jpg";
import vehicleLand from "../assets/technology/image-launch-vehicle-landscape.jpg";

import capsulePort from "../assets/technology/image-space-capsule-portrait.jpg";
import capsuleLand from "../assets/technology/image-space-capsule-landscape.jpg";

import spaceportPort from "../assets/technology/image-spaceport-portrait.jpg";
import spaceportLand from "../assets/technology/image-spaceport-landscape.jpg";

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
		grid-template-columns: repeat(3, min-content);
		grid-template-rows: auto;
		justify-items: flex-start;
		align-content: center;
		margin-top: 200px;
	}
`;

const SliderWrapper = styled.div`
	grid-row: 2/3;

	@media ${device.desktop} {
		grid-row: 1/2;
		grid-column: 1/2;
		align-self: center;
		margin-right: 80px;
	}
`;

const PictureLand = styled.img`
	width: 100vw;
	align-self: center;
	margin-top: 32px;
	margin-bottom: 34px;

	@media ${device.desktop} {
		display: none;
	}
`;

const PicturePort = styled.img`
	display: none;

	@media ${device.desktop} {
		grid-column: 3/4;
		align-self: flex-end;
		display: block;
		width: 515px;
	}
`;

const Hero = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	margin-top: 26px;

	@media ${device.tablet} {
		margin-top: 44px;
		margin-bottom: 56px;
	}

	@media ${device.desktop} {
		grid-column: 2/3;
		grid-row: 1/2;
		width: 470px;
		text-align: start;
		margin-right: 130px;
		align-self: center;
	}
`;

const Title = styled.div`
	font-family: Barlow Condensed;
	font-size: 14px;
	font-weight: 400;
	line-height: 17px;
	letter-spacing: 2.36px;
	text-transform: uppercase;
	color: #d0d6f9;
	margin-bottom: 8px;

	@media ${device.desktop} {
		font-size: 16px;
		line-height: 19px;
		letter-spacing: 2.7px;
	}
`;

const Name = styled.h3`
	margin-bottom: 16px;
`;

const Desc = styled.p``;

export const Vehicle = () => {
	return (
		<Container>
			<SliderWrapper>
				<CircleSlider />
			</SliderWrapper>
			<PicturePort src={vehiclePort}></PicturePort>
			<PictureLand src={vehicleLand}></PictureLand>
			<Hero>
				<Title>The terminology...</Title>
				<Name>Launch Vehicle</Name>
				<Desc>
					A launch vehicle or carrier rocket is a rocket-propelled
					vehicle used to carry a payload from Earth's surface to
					space, usually to Earth orbit or beyond. Our WEB-X carrier
					rocket is the most powerful in operation. Standing 150
					metres tall, it's quite an awe-inspiring sight on the launch
					pad!
				</Desc>
			</Hero>
		</Container>
	);
};

export const Capsule = () => {
	return (
		<Container>
			<SliderWrapper>
				<CircleSlider />
			</SliderWrapper>
			<PicturePort src={capsulePort}></PicturePort>
			<PictureLand src={capsuleLand}></PictureLand>
			<Hero>
				<Title>The terminology...</Title>
				<Name>SPACEPORT</Name>
				<Desc>
					A spaceport or cosmodrome is a site for launching (or
					receiving) spacecraft, by analogy to the seaport for ships
					or airport for aircraft. Based in the famous Cape Canaveral,
					our spaceport is ideally situated to take advantage of the
					Earth’s rotation for launch.
				</Desc>
			</Hero>
		</Container>
	);
};

export const Spaceport = () => {
	return (
		<Container>
			<SliderWrapper>
				<CircleSlider />
			</SliderWrapper>
			<PicturePort src={spaceportPort}></PicturePort>
			<PictureLand src={spaceportLand}></PictureLand>
			<Hero>
				<Title>The terminology...</Title>
				<Name>SPACE CAPSULE</Name>
				<Desc>
					A space capsule is an often-crewed spacecraft that uses a
					blunt-body reentry capsule to reenter the Earth's atmosphere
					without wings. Our capsule is where you'll spend your time
					during the flight. It includes a space gym, cinema, and
					plenty of other activities to keep you entertained.
				</Desc>
			</Hero>
		</Container>
	);
};
