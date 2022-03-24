import React     from "react";
import PropTypes from "prop-types";


import {
	Label,
	FormGroup,
} from "reactstrap";
import InputComponent from "Components/Globals/InputComponent";

const FormGroupComponent = ({
	name,
	type = "text",
	label,
	errors,
	register = () => {},
	...rest
}) => {
	return (
		<div>
			<FormGroup>
				{ label && <Label>{ label }</Label> }
				<InputComponent
					addon
					type={type}
					name={ name }
					autoComplete="off"
					invalid={!!errors?.[name]}
					{...register(name)}
					{...rest}
				/>
			</FormGroup>
		</div>
	);
};

FormGroupComponent.propTypes = {
	name     : PropTypes.string.isRequired,
	type     : PropTypes.string.isRequired,
	label    : PropTypes.string,
	errors   : PropTypes.object,
	register : PropTypes.func.isRequired,
};


export default FormGroupComponent;
