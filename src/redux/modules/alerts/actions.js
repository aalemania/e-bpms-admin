import { SET_ALERT, DISMISS_ALERT } from "./types";

export const setAlert = (payload) => (dispatch) => {
	dispatch({ type: SET_ALERT, payload: payload });
};

export const dismissAlert = (payload) => (dispatch) => {
	dispatch({ type: DISMISS_ALERT, payload: payload });
};
