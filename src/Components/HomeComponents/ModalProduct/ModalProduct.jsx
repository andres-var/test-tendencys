import { isValidArray } from "Helpers";
import {
	Modal,
	Button,
	ModalBody,
	ModalHeader,
	ModalFooter,
} from "reactstrap";

const ModalProduct = ({
	modal,
	detail,
	setModal,
}) => {
	return (
		<Modal toggle={ () => setModal(false) } isOpen={ modal }>
			<ModalHeader>Detalle { detail?.billingAddress?.firstName ?? "" }</ModalHeader>

			<ModalBody>
				Articulos :
				{ isValidArray(detail?.items) ? detail?.items.map((item, index) => (
					<>
						<div key={index} className="p-1">
							<p className="mb-0">Nombre: <span className="text-muted">{ item?.name ?? "" }</span></p>
							<p className="mb-0">Cantidad: <span className="text-muted">{ item?.quantity ?? 0 }</span></p>
							<p className="mb-0">Precio: <span className="text-muted">{ item?.price * item?.quantity ?? 0 }</span></p>
							<hr />
						</div>
					</>
				)) : <p>Sin articulos</p> }

				<p className="mt-1 mb-0">Subtotal: <b>${ detail?.totals?.subtotal ?? 0 }</b></p>
				<p className="mt-1 mb-0">Tax: <b>${ detail?.totals?.tax ?? 0 }</b></p>
				<p className="mt-1 mb-0">Total: <b>${ detail?.totals?.total ?? 0 }</b></p>
			</ModalBody>

			<ModalFooter>
				<Button color="primary" onClick={ () => setModal(false) }>Cerrar</Button>
			</ModalFooter>
		</Modal>
	);
};

export default ModalProduct;
