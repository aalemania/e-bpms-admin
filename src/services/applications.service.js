import store from "./../redux/reduxStore";

import { httpClient } from "./../api";
import { fetchApplications, getApplication } from "./../redux/modules/applications";
import { setAlert } from "./../redux/modules/alerts";

const ApplicationRecordsService = {
	getAll: async ({ search = "", status = "", payment_status = "", engineer_category = "" }, setLoading) => {
		try {
			let response = await httpClient.get(
				`/application-records?q=${search}&status=${status}&payment_status=${payment_status}&engineer_category=${engineer_category}`
			);

			store.dispatch(fetchApplications(response.data));
		} catch (err) {
			store.dispatch(setAlert({ show: true, variant: "danger", message: "Failed to fetch data, something went wrong" }));
		} finally {
			if (setLoading) setLoading(false);
		}
	},

	get: async (applicationUuid, setLoading) => {
		try {
			let response = await httpClient.get(`/application-records/get-by-uuid/${applicationUuid}`);

			store.dispatch(getApplication(response.data));
		} catch (err) {
			store.dispatch(setAlert({ show: true, variant: "danger", message: "Failed to fetch data, something went wrong" }));
		} finally {
			if (setLoading) setLoading(false);
		}
	},

	add: async (data) => {},

	delete: async (applicationId) => {},
};

export default ApplicationRecordsService;
