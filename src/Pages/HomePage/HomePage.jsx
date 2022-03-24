import React from "react";
import "./HomePage.scss";

import {
	Row,
	Col,
	Nav,
	Card,
	TabPane,
	NavLink,
	NavItem,
	CardTitle,
	TabContent,
} from "reactstrap";
import AddProduct    from "Components/HomeComponents/AddProduct";
import TableProducts from "Components/HomeComponents/TableProducts";

function HomePage({
	activeTab,
	setActiveTab,
}) {
	return (
		<>
			<div id="HomePage">
				<Card className="p-4">
					<CardTitle>Test</CardTitle>
					<Nav tabs>
						<NavItem>
							<NavLink
								className={activeTab === "1" ? "active" : ""}
								onClick={() => setActiveTab("1")}
							>
								Agregar Productos
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								className={activeTab === "2" ? "active" : ""}
								onClick={() => setActiveTab("2")}
							>
								Productos Guardados
							</NavLink>
						</NavItem>
					</Nav>
					<TabContent activeTab={activeTab}>
						<TabPane tabId="1">
							<Row>
								<Col sm="12">
									<AddProduct />
								</Col>
							</Row>
						</TabPane>
						<TabPane tabId="2">
							<TableProducts />
						</TabPane>
					</TabContent>
				</Card>
			</div>
		</>
	);
}

export default HomePage;
