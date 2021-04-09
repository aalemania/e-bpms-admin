import React, { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import {
	Container,
	Card,
	Form,
	Col,
	Badge,
	ButtonGroup,
	Button,
} from "react-bootstrap";
import { FiEdit, FiTrash2, FiEye } from "react-icons/fi";
import Select from "react-select";

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
			return <Badge variant="success">Building Permit Fees (Paid)</Badge>;

		default:
			return <Badge variant="danger">No Payments (Pending)</Badge>;
	}
};

const filterByStatusOptions = [
	{
		label: "Pending",
		value: "pending",
	},
	{
		label: "On-hold",
		value: "on-hold",
	},
	{
		label: "Approved",
		value: "approved",
	},
	{
		label: "Declined",
		value: "declined",
	},
];

const filterByPaymentStatusOptions = [
	{
		label: "Service Fees Downpayment (50%)",
		value: "services-dp-50%",
	},
	{
		label: "Service Fees Downpayment (Full)",
		value: "services-dp-completion",
	},
	{
		label: "Building Permit Fees (Paid)",
		value: "building-permit-fees",
	},
	{
		label: "To Pay",
		value: "to-pau",
	},
];

const filterByEngineerCategoryOptions = [
	{
		label: "Category",
		value: "category",
	},
];

function List() {
	document.title = "E-BPMS::Applications";

	const applications = useSelector(
		(state) => state.applicationsReducer.applications
	);

	const [search, setSearch] = useState("");
	const [loading, setLoading] = useState(true);

	let actionButtonAttributes = {
		title: "New Application",
		redirectTo: "/applications/create",
	};

	const tableHeader = useMemo(
		() => [
			{
				name: "Record ID",
				selector: "uuid",
				sortable: false,
			},
			{
				name: "Project Name",
				selector: "project_data.name",
				sortable: false,
			},
			{
				name: "Payment Status",
				selector: "payment",
				sortable: false,
				cell: (row) => setPaymentStatus(row.payment.length),
			},

			{
				name: "Status",
				selector: "id",
				sortable: false,
				cell: (row) => <Badge variant="success">Approved</Badge>,
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

	const getProducts = (search) => {
		setLoading(true);
		ApplicationsService.getAll(search, setLoading);
	};

	useEffect(() => {
		getProducts(search);
	}, [search]);

	const handleFilterByStatus = (value) => console.log(value);

	const handleFilterByPaymentStatus = (value) => console.log(value);

	const handleFilterByEngineerCategory = (value) => console.log(value);

	return (
		<Container fluid className="px-0">
			<PageHeader
				title="Applications"
				breadcrumbStr="Applications \ List"
				showActionButtons={true}
				actionButtonAttributes={actionButtonAttributes}
			/>

			<Card>
				<Card.Header>
					<div className="row table-filters">
						<Form className="col-lg-6">
							<Form.Row>
								<Col>
									<Form.Group>
										<Select
											options={filterByStatusOptions}
											onChange={handleFilterByStatus}
										/>
										<div>
											<small>Filter by Status</small>
										</div>
									</Form.Group>
								</Col>

								<Col>
									<Form.Group>
										<Select
											options={filterByPaymentStatusOptions}
											onChange={handleFilterByPaymentStatus}
										/>
										<div>
											<small>Filter by Payment Status</small>
										</div>
									</Form.Group>
								</Col>

								<Col>
									<Form.Group>
										<Select
											options={filterByEngineerCategoryOptions}
											onChange={handleFilterByEngineerCategory}
										/>
										<div>
											<small>Filter by Engineer Category</small>
										</div>
									</Form.Group>
								</Col>
							</Form.Row>
						</Form>

						<Form className="col-lg-6">
							<Form.Group className="col-lg-6 px-0 ml-auto">
								<input
									type="text"
									className="form-control"
									placeholder="Search ..."
									onChange={(e) => setSearch(e.target.value)}
								/>
								<div>
									<small>Search in all fields</small>
								</div>
							</Form.Group>
						</Form>
					</div>
				</Card.Header>

				<Card.Body>
					<Table headers={tableHeader} data={applications} loading={loading} />
				</Card.Body>
			</Card>
		</Container>
	);
}

export default List;
