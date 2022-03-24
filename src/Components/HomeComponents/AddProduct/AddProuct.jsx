import React            from "react";
import { Button, Form } from "reactstrap";


import FormGroupComponent from "Components/Globals/FormGroupComponent";

const AddProuct = ({
	onSubmit,
	errors,
	register,
}) => {
	return (
		<>
			<Form className="p-2" onSubmit={onSubmit}>
				<FormGroupComponent
					name="sku"
					label="SKU"
					register={register}
					errors={errors}
					placeholder="Escribe un sku"
				/>
				<FormGroupComponent
					name="name"
					label="Nombre"
					register={register}
					errors={errors}
					placeholder="Escribe un nombre"
				/>
				<FormGroupComponent
					name="quantity"
					label="Cantidad"
					register={register}
					errors={errors}
					type="number"
					placeholder="Escribe una cantidad"
				/>
				<FormGroupComponent
					name="price"
					label="Precio"
					register={register}
					errors={errors}
					type="number"
					placeholder="Escribe un precio"
				/>

				<Button color="primary" type="submit">Guardar</Button>
			</Form>
		</>
	);
};

export default AddProuct;
