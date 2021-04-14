import { FETCH_APPLICATIONS, GET_APPLICATION, ADD_APPLICATION, DELETE_APPLICATION } from "./types";

const initialState = {
	applications: [],
	application: null,
};

export default function applicationsReducers(state = initialState, action) {
	switch (action.type) {
		case FETCH_APPLICATIONS:
			return {
				...state,
				applications: action.payload,
			};

		case GET_APPLICATION:
			return {
				...state,
				application: action.payload,
			};

		case ADD_APPLICATION:
			return {
				...state,
				applications: [...state.applications, action.payload],
			};

		default:
			return {
				...state,
			};
	}
}
