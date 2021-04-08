import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const initialState = {};

const middlewares = [thunk];

const reduxStore = createStore(
	rootReducer,
	initialState,
	compose(
		applyMiddleware(middlewares[0]),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default reduxStore;
