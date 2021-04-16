import store from "./../redux/reduxStore";

import { httpClient } from "./../api";
import { fetchInvoices } from "./../redux/modules/invoices";

const InvoicesService = {
	getAll: async ({ search = "" }, setLoading) => {
		try {
			let response = await httpClient.get("/invoices");

			store.dispatch(fetchInvoices(response.data));
			console.log(response.data);
		} catch (err) {
		} finally {
			if (setLoading) setLoading(false);
		}
	},
};

export default InvoicesService;
