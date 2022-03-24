import { toast } from "react-toastify";
// Import
import "react-confirm-alert/src/react-confirm-alert.css";

import {
	ADD_ORDER,
} from "Store/Constants/OrderConstants";

const add = (data) => async (dispatch, getState) => {
	dispatch(addSuccess(data));
	toast.success("Se agrego correctamente");
};

const addSuccess = (data) => ({
	type    : ADD_ORDER,
	payload : {
	  ...data,
	},
});


const OrderActions = {
	add,
};

export default OrderActions;
