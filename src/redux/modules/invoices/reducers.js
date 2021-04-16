import { FETCH_INVOICES, GET_INVOICE } from "./types";

const initialState = {
	invoices: [],
	invoice: null,
};

export default function invoicesReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_INVOICES:
			return {
				...state,
				invoices: action.payload,
			};

		case GET_INVOICE:
			return {
				...state,
				invoice: action.payload,
			};

		default:
			return {
				...state,
			};
	}
}
