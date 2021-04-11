import { combineReducers } from "redux";

import { alertsReducer } from "./modules/alerts";
import { applicationsReducer } from "./modules/applications";

export default combineReducers({
	alertsReducer,
	applicationsReducer,
});
