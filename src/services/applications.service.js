import store from "./../redux/reduxStore";

import { httpClient } from "./../api";
import { fetchApplications } from "./../redux/modules/applications";

const ApplicationRecordsService = {
	getAll: async (search = "", setLoading) => {
		try {
			let response = await httpClient.get(`/application-records?q=${search}`);
			store.dispatch(fetchApplications(response.data));
		} catch (err) {
		} finally {
			if (setLoading) setLoading(false);
		}
	},

	get: async (applicationId) => {},

	add: async (data) => {},

	destroy: async (applicationId) => {},
};

export default ApplicationRecordsService;
