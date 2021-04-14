import { FETCH_APPLICATIONS, GET_APPLICATION, ADD_APPLICATION, DELETE_APPLICATION } from "./types";

export const fetchApplications = (payload) => (dispatch) => {
	dispatch({ type: FETCH_APPLICATIONS, payload: payload });
};

export const getApplication = (payload) => (dispatch) => {
	dispatch({ type: GET_APPLICATION, payload: payload });
};

export const addApplication = (payload) => (dispatch) => {
	dispatch({ type: ADD_APPLICATION, payload: payload });
};

export const deleteApplication = (payload) => (dispatch) => {
	dispatch({ type: DELETE_APPLICATION, payload: payload });
};
