import store from "./../redux/reduxStore";

import { httpClient } from "./../api";
import { fetchApplications } from "./../redux/modules/applications";
import { setAlert } from "./../redux/modules/alerts";

const ApplicationRecordsService = {
	getAll: async ({ search = "", status = "", payment_status = "", engineer_category = "" }, setLoading) => {
		try {
			let response = await httpClient.get(
				`/application-records?q=${search}&status=${status}&payment_status=${payment_status}&engineer_category=${engineer_category}`
			);

			store.dispatch(fetchApplications(response.data));
		} catch (err) {
			if (err.response.status === 500) {
				store.dispatch(setAlert({ show: true, variant: "danger", message: "Failed to fetch data, something went wrong" }));
			}
		} finally {
			if (setLoading) setLoading(false);
		}
	},

	get: async (applicationId) => {},

	add: async (data) => {},

	destroy: async (applicationId) => {},
};

export default ApplicationRecordsService;
