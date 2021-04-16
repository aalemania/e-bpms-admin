import { combineReducers } from "redux";

import { alertsReducer } from "./modules/alerts";
import { applicationsReducer } from "./modules/applications";
import { invoicesReducer } from "./modules/invoices";

export default combineReducers({
	alertsReducer,
	applicationsReducer,
	invoicesReducer,
});
