import React from "react";
import { Container } from "react-bootstrap";

function PageHeader({ title = "", newDataButtonAttr = {}, breadcrumbStr = "" }) {
	return (
		<Container fluid className="px-0">
			<p className="text-muted mb-3 d-none" style={{ fontSize: ".85rem" }}>
				{breadcrumbStr}
			</p>

			<Container fluid className="page-header align-items-baseline d-flex px-0 ">
				<h3>{title}</h3>
			</Container>
		</Container>
	);
}

export default PageHeader;
