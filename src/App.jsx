import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import CountUp from "react-countup";
import GitHubButton from "react-github-btn";
import styled from "styled-components";
import DashboardTile from "./components/DashboardTile";
import HospitalCard from "./components/HospitalCard";
import Loader from "./components/Loader";
import { useStore } from "./store/RootStore";

const App = observer(() => {
	const { stores } = useStore();
	const { dataStore } = stores;

	useEffect(() => {
		dataStore.initData();
	}, []);

	const {
		update_date_time,
		local_new_cases,
		local_total_cases,
		local_deaths,
		local_new_deaths,
		local_recovered,
		hospital_data,
		local_total_number_of_individuals_in_hospitals
	} = dataStore._dataRegistry;

	const renderData = () => {
		return (
			<>
				<InfoContainer>
					<DashboardTile
						bg={"warning"}
						icon={"icons/cases.svg"}
						title="Cases"
						total={local_total_cases}
						newCases={local_new_cases}
					/>

					<DashboardTile
						bg={"danger"}
						icon={"icons/deaths.svg"}
						title="Deaths"
						total={local_new_deaths}
						newCases={local_deaths}
					/>

					<DashboardTile
						bg={"success"}
						icon={"icons/recovered.svg"}
						title="Recovered"
						total={local_recovered}
						newCases={null}
					/>
				</InfoContainer>
				<h2>Hospital Status</h2>
				<TotalHospitalCount>
					Total Individuals in Hospitals :
					<span>
						<CountUp
							start={0}
							end={
								local_total_number_of_individuals_in_hospitals
									? local_total_number_of_individuals_in_hospitals
									: 0
							}
							delay={0}
						>
							{({ countUpRef }) => (
								<>
									<span ref={countUpRef} />
								</>
							)}
						</CountUp>
					</span>
				</TotalHospitalCount>
				<HospitalListContainer>
					{hospital_data &&
						hospital_data.map((hospital, index) => {
							return <HospitalCard hospitalData={hospital} key={index} />;
						})}
				</HospitalListContainer>
			</>
		);
	};

	return (
		<DashboardStyles>
			<h1>Sri Lanka COVID-19 Status</h1>

			{dataStore.isLoading ? <Loader /> : renderData()}

			<p>Last Updated : {update_date_time}</p>
			<p>Data Source : www.hpb.health.gov.lk </p>

			<GitHubButton
				href="https://github.com/dhanukaperera/sl-covid19-web"
				data-size="large"
				aria-label="Star dhanukaperera/sl-covid19-web on GitHub"
			>
				Star
			</GitHubButton>
		</DashboardStyles>
	);
});

export default App;

const DashboardStyles = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 2rem;

	h1 {
		padding: 0 1rem;
		text-align: center;
	}

	h1,
	h2,
	h3 {
		font-weight: 300;
		text-align: center;
	}
`;

const InfoContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;

const HospitalListContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
`;

const TotalHospitalCount = styled.div`
	font-size: 20px;
	border: 1px solid;
	padding: 1rem;
	text-align: center;
	border-radius: 6px;
	margin: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media screen and (min-width: 600px) {
		flex-direction: row;
	}

	span {
		color: #e74c3c;
		font-weight: 600;
		font-size: 30px;
		padding: 0 0.5rem;
	}
`;
