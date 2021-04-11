import { SET_ALERT, DISMISS_ALERT } from "./types";

const initialState = {
	alert: {
		show: false,
		variant: "info",
		message: "",
	},
};

export default function alertsReducer(state = initialState, action) {
	switch (action.type) {
		case SET_ALERT:
			return {
				...state,
				alert: action.payload,
			};

		case DISMISS_ALERT:
			return {
				...state,
				alert: {
					show: false,
					variant: "info",
					message: "",
				},
			};

		default:
			return {
				...state,
			};
	}
}
