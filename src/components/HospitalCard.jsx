import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const HospitalCard = ({ hospitalData }) => {
	const { t, i18n } = useTranslation();
	const {
		cumulative_local,
		cumulative_foreign,
		cumulative_total,
		treatment_local,
		treatment_foreign,
		treatment_total,
		hospital
	} = hospitalData;

	const translateName = () => {
		const selectedLan = i18n.language;
		switch (selectedLan) {
			case "sn":
				return hospital.name_si;
			case "ta":
				return hospital.name_ta;
			default:
				return hospital.name;
		}
	};

	return (
		<HospitalCardStyles>
			<h3>{translateName()}</h3>
			<CardData>
				<div>
					<h4>{t("TESTED")}</h4>
					<p>
						{t("LOCAL")} : {cumulative_local}{" "}
					</p>
					<p>
						{t("FOREIGN")} : {cumulative_foreign}{" "}
					</p>
					<p>
						{t("TOTAL")} : {cumulative_total}{" "}
					</p>
				</div>

				<div>
					<h4> {t("TREATMENT")}</h4>
					<p>
						{t("LOCAL")} : {treatment_local}{" "}
					</p>
					<p>
						{t("FOREIGN")} : {treatment_foreign}{" "}
					</p>
					<p>
						{t("TOTAL")} : {treatment_total}{" "}
					</p>
				</div>
			</CardData>
		</HospitalCardStyles>
	);
};

export default HospitalCard;

const HospitalCardStyles = styled.div`
	display: flex;
	flex-direction: column;

	margin: 1rem;
	border-radius: 6px;
	padding: 1rem;
	box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.14);

	background: #4b6cb7; /* fallback for old browsers */
	background: -webkit-linear-gradient(
		to top,
		#182848,
		#4b6cb7
	); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(
		to top,
		#182848,
		#4b6cb7
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

	h3 {
		padding: 0 0.5rem;
		text-align: center;
		max-width: 300px;
		font-weight: 300;
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
`;
