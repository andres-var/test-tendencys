import React           from "react";
import { useForm }     from "react-hook-form";
import { connect }     from "react-redux";
import * as Yup        from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import AddProuct    from "./AddProuct";
import OrderActions from "Store/Actions/OrderActions";

const validate = Yup.object().shape({
	sku      : Yup.string().required("Este campo es requerido"),
	name     : Yup.string().required("Este campo es requerido"),
	quantity : Yup.number().required("Este campo es requerido").typeError("Este campo debe ser un número"),
	price    : Yup.number().required("Este campo es requerido").typeError("Este campo debe ser un número"),
}).required();

export const AddProuctContainer = ({
	add,
}) => {

	const { register, handleSubmit, formState : { errors } } = useForm({
		defaultValues : {
			sku      : "",
			name     : "",
			quantity : null,
			price    : null,
		},
		resolver : yupResolver(validate),
	});

	const onSubmit = (data) => {
		add(data);
	};

	const onError = (error) => {
		console.log(error);
	};

	return (
		<AddProuct
			errors={errors}
			onSubmit={handleSubmit(onSubmit, onError)}
			register={register}
		/>
	);
};

const mapStateToProps = ({ orderReducer }) => ({
	orders : orderReducer?.orders ?? [],
});

const mapDispatchToProps = dispatch => ({
	add : (order) => dispatch(OrderActions.add(order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProuctContainer);
