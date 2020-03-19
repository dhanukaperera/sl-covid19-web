import axios from "axios";
import { observable, transaction } from "mobx";
class DataStore {
	@observable
	_dataRegistry = {};
	async fetchData() {
		try {
			const response = await axios.get(
				"https://hpb.health.gov.lk/api/get-current-statistical"
			);
			transaction(() => {
				this._dataRegistry = response.data.data;
			});
			console.log(response);
		} catch (error) {
			console.error(error);
		}
	}
	async initData() {
		if (Object.keys(this._dataRegistry).length === 0) await this.fetchData();
	}
}

export default DataStore;
