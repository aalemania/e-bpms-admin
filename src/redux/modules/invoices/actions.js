import { FETCH_INVOICES, GET_INVOICE } from "./types";

export const fetchInvoices = (payload) => (dispatch) => {
	dispatch({ type: FETCH_INVOICES, payload: payload });
};

export const getInvoice = (payload) => (dispatch) => {
	dispatch({ type: GET_INVOICE, payload: payload });
};
