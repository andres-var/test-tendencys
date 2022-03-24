import { combineReducers } from "redux";

// Import Own Components
import orderReducer from "./orderReducer";

export const reducers = {
	orderReducer,
};

const rootReducers = combineReducers(reducers);

export default rootReducers;
