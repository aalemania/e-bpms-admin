import store from "./../redux/reduxStore";

import { httpClient } from "./../api";
import { fetchApplications } from "./../redux/modules/applications";

const ApplicationRecordsService = {
	getAll: async (search = "", setLoading) => {
		try {
			let response = await httpClient.get("/application-records");
			console.log(response.data);
			store.dispatch(fetchApplications(response.data));
		} catch (err) {
		} finally {
			if (setLoading) setLoading(false);
		}
	},
};

export default ApplicationRecordsService;
