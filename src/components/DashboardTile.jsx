import React from "react";
import styled from "styled-components";

const DashboardTile = ({ title, total, newCases, icon }) => {
	return (
		<DashboardTileStyles>
			<Header>
				<img src={icon} alt="" />
				<h1>{title}</h1>
				<New>+{newCases}</New>
			</Header>
			<Count>{total}</Count>
		</DashboardTileStyles>
	);
};

export default DashboardTile;

const DashboardTileStyles = styled.div`
	width: 300px;
	border: 1px solid;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 1rem;
`;

const Header = styled.div`
	display: flex;
	align-items: center;
	border-bottom: 1px solid;
	width: 100%;
	h1 {
		font-size: 26px;
		letter-spacing: 0;
		line-height: 19px;
		font-weight: 300;
		margin-right: auto;
	}

	img {
		padding: 0 1rem;
		height: 32px;
	}
`;

const New = styled.p`
	font-size: 26px;
	letter-spacing: 0;
	line-height: 19px;
	font-weight: 800;
	padding: 0 1rem;
`;

const Count = styled.p`
	font-size: 50px;
	font-weight: 400;
	letter-spacing: 0;
	line-height: 24px;
`;
