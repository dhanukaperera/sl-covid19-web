import React from "react";
import styled from "styled-components";
import CountUp from "react-countup";

const DashboardTile = ({ title, total, newCases, icon, bg }) => {
	return (
		<DashboardTileStyles bg={bg}>
			<Header>
				<img src={icon} alt="COIVD-19 status Sri Lanka" />
				<h1>{title}</h1>
				{newCases !== 0 && newCases && (
					<New>
						+
						<CountUp start={0} end={newCases ? newCases : 0} delay={0}>
							{({ countUpRef }) => (
								<>
									<span ref={countUpRef} />
								</>
							)}
						</CountUp>
					</New>
				)}
			</Header>
			<Count>
				<CountUp start={0} end={total ? total : 0} delay={0}>
					{({ countUpRef }) => (
						<>
							<span ref={countUpRef} />
						</>
					)}
				</CountUp>
			</Count>
		</DashboardTileStyles>
	);
};

export default DashboardTile;

const DashboardTileStyles = styled.div`
	width: 300px;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 1rem;
	box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.14);
	${props => {
		switch (props.bg) {
			case "warning":
				return {
					background: "linear-gradient(to right, #f7971e, #ffd200); "
				};
			case "danger":
				return {
					background: "linear-gradient(to right, #ed213a, #93291e);  "
				};
			case "success":
				return {
					background: "linear-gradient(to right, #11998e, #38ef7d); "
				};
			default:
		}
	}}
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
		font-weight: 320;
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
