import {
	ADD_ORDER,
} from "Store/Constants/OrderConstants";

const initialState = {
	orders : [],
};

const orderteReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ORDER :
			return {
				...state,
				orders : [...state.orders, action?.payload],
			};
		default:
			return state;
	}
};

export default orderteReducer;
