
import React, { useEffect, useState } from "react";


import { instanceAxios } from "Helpers";
import TableProducts     from "./TableProducts";
import { connect }       from "react-redux";

const TableProductsContainer = ({
	orders,
}) => {

	const [loading, setLoading] = useState(false);
	const [products, setProducts] = useState([]);
	const [product, setProduct] = useState({});
	const [modal, setModal] = useState(false);

	const openModal = (product) => {
		setProduct(product);
		setModal(true);
	};

	const getProducts = async () => {
		setLoading(true);
		const res = await instanceAxios.get("/orders");

		if(res.statusText === "OK")	setProducts(res?.data?.orders);
		setLoading(false);

	};

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<TableProducts
			orders={orders}
			loading={loading}
			products={products}
			product={product}
			modal={modal}
			openModal={openModal}
			setModal={setModal}
		/>
	);
};

const mapStateToProps = ({ orderReducer }) => ({
	orders : orderReducer?.orders ?? [],
});

export default connect(mapStateToProps)(TableProductsContainer);
