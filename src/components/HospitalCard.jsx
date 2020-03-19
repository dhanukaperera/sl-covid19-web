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
					<p>Tested Local : {cumulative_local} </p>
					<p>Tested Foreign : {cumulative_foreign} </p>
					<p>Total : {cumulative_total} </p>
				</div>

				<div>
					<p>Treatment local : {treatment_local} </p>
					<p>Treatment Foreign : {treatment_foreign} </p>
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
	width: 340px;
	margin: 1rem;
	border-radius: 6px;
	padding: 1rem;

	h3 {
		padding: 0 0.5rem;
	}
`;

const CardData = styled.div`
	display: flex;

	p {
	}
`;
