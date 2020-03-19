import React, { useEffect } from "react";
import { useStore } from "./Stores/RootStore";
import { observer } from "mobx-react-lite";

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
		local_recovered
	} = dataStore._dataRegistry;

	return <div></div>;
});

export default App;
