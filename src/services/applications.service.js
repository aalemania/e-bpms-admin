import store from "./../redux/reduxStore";

import { httpClient } from "./../api";
import { fetchApplications } from "./../redux/modules/applications";

const ApplicationRecordsService = {
	getAll: async ({ search = "", status = "", payment_status = "", engineer_category = "" }, setLoading) => {
		try {
			let response = await httpClient.get(
				`/application-records?q=${search}&status=${status}&payment_status=${payment_status}&engineer_category=${engineer_category}`
			);

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
