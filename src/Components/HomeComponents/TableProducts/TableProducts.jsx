
import { isValidArray } from "Helpers";
import React            from "react";
import { Table }        from "reactstrap";
import ModalProduct     from "../ModalProduct";

const TableProducts = ({
	orders,
	loading,
	products,
	product,
	openModal,
	modal,
	setModal,
}) => {
	return (
		<>
			{ loading && <div>Cargando...</div> }

			{ products && isValidArray(products) && (
				<Table>
					<thead>
						<tr>
							<th>
								#
							</th>
							<th>
								 SKU
							</th>
							<th>
								Nombre
							</th>
							<th>
								Cantidad
							</th>
							<th>
								Precio
							</th>
						</tr>
					</thead>
					<tbody>
						{ orders.map((order, index) => (
							<tr key={index}>
								<th scope="row">
									{ index+1 }
								</th>
								<td>
									#{ order?.sku ?? "" }
								</td>
								<td>
									{ order?.name ?? "" }
								</td>
								<td>
									{ order?.quantity ?? 0 }
								</td>
								<td>
									 MXN <b>${ order?.price * order?.quantity ?? 0 }</b>
								</td>
							</tr>
						)) }
						{ products.map((product, index) => (
							<tr key={index} onClick={() => openModal(product)}>
								<th scope="row">
									{ product?.number ?? 0 }
								</th>
								<td>
									{ product?.name ?? "" }
								</td>
								<td>
									{ product?.billingAddress?.firstName ?? "" }
								</td>
								<td>
									{ product?.items.length ?? 0 }
								</td>
								<td>
									{product?.currency ?? "" } <b>${ product?.totals?.total ?? 0 }</b>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			) }

			<ModalProduct modal={modal} setModal={setModal} detail={product} />
		</>
	);
};

export default TableProducts;
