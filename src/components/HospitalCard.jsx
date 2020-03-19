import React from "react";
import styled from "styled-components";

const HospitalCard = ({ hospitalData }) => {
	const {
		cumulative_local,
		cumulative_foreign,
		cumulative_total,
		treatment_local,
		treatment_foreign,
		treatment_total,
		hospital
	} = hospitalData;

	return (
		<HospitalCardStyles>
			<h3> {hospital.name} </h3>
			<CardData>
				<div>
					<h4>Tested</h4>
					<p> Local : {cumulative_local} </p>
					<p> Foreign : {cumulative_foreign} </p>
					<p>Total : {cumulative_total} </p>
				</div>

				<div>
					<h4>Treatment</h4>
					<p> local : {treatment_local} </p>
					<p> Foreign : {treatment_foreign} </p>
					<p>Total : {treatment_total} </p>
				</div>
			</CardData>
		</HospitalCardStyles>
	);
};

export default HospitalCard;

const HospitalCardStyles = styled.div`
	display: flex;
	flex-direction: column;
	border: 1px solid;

	margin: 1rem;
	border-radius: 6px;
	padding: 1rem;

	h3 {
		padding: 0 0.5rem;
		text-align: center;
		max-width: 300px;
	}
`;

const CardData = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	div {
		width: 150px;
		text-align: center;
	}

	p {
	}
`;
