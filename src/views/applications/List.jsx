import React, { useEffect, useMemo } from "react";
import { connect } from "react-redux";
import { Container, Card, Badge, ButtonGroup, Button } from "react-bootstrap";
import { FiEdit, FiTrash2, FiEye, FiFilter } from "react-icons/fi";

import ApplicationsService from "./../../services/applications.service";
import PageHeader from "./../../components/PageHeader";
import Table from "./../../components/tables/Table";

const setPaymentStatus = (paymentLength) => {
	switch (paymentLength) {
		case 1:
			return <Badge variant="primary">Service Fees Downpayment (50%)</Badge>;

		case 2:
			return <Badge variant="info">Service Fees Downpayment (Full)</Badge>;

		case 3:
			return <Badge variant="success">Business Permit Fees</Badge>;

		default:
			return <Badge variant="danger">No Payments (Pending)</Badge>;
	}
};

function List({ applications }) {
	document.title = "E-BPMS::Applications";

	let actionButtonAttributes = {
		title: "New Application",
		redirectTo: "/applications/create",
	};

	const tableHeader = useMemo(
		() => [
			{
				name: "Record ID",
				selector: "uuid",
				sortable: true,
			},
			{
				name: "Project Name",
				selector: "project_data.name",
				sortable: true,
			},
			{
				name: "Payment Status",
				selector: "payment",
				sortable: true,
				cell: (row) => setPaymentStatus(row.payment.length),
			},
			{
				name: "Actions",
				selector: "id",
				sortable: false,
				cell: (row) => (
					<ButtonGroup className="datatable_actionButtons">
						<Button size="sm" variant="light">
							<FiEdit className="mr-1" /> Manage
						</Button>
						<Button size="sm" variant="light">
							<FiEye className="mr-1" /> View Receipts
						</Button>
						<Button size="sm" variant="light">
							<FiTrash2 className="mr-1" /> Delete
						</Button>
					</ButtonGroup>
				),
			},
		],
		[]
	);

	useEffect(() => {
		ApplicationsService.getAll();
	}, []);

	return (
		<Container fluid className="px-0">
			<PageHeader
				title="Applications"
				breadcrumbStr="Applications \ List"
				showActionButtons={true}
				actionButtonAttributes={actionButtonAttributes}
			/>

			<Card>
				<Card.Body>
					<Table headers={tableHeader} data={applications} />
				</Card.Body>
			</Card>
		</Container>
	);
}

const mapState = (state) => ({
	applications: state.applicationsReducer.applications,
});

export default connect(mapState, null)(List);
