import { forwardRef } from "react";
import { Input }      from "reactstrap";

const InputComponent = forwardRef((props, ref) => (
	<Input
		{...props}
		innerRef={ref}
	/>
));

export default InputComponent;
