import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Container, Card, Form, Col, Button, InputGroup } from "react-bootstrap";
import { FiXCircle, FiSearch } from "react-icons/fi";
import Select from "react-select";

import {
	filterByApplicationStatusOptions,
	filterByPaymentStatusOptions,
	filterByEngineerCategoryOptions,
} from "../../reusables/dropdown-options.constant";
import { application_records_table_header } from "./../../components/tables/headers";
import ApplicationsService from "./../../services/applications.service";
import PageHeader from "./../../components/PageHeader";
import Table from "./../../components/tables/Table";

function List() {
	document.title = "E-BPMS::Applications";

	const applications = useSelector((state) => state.applicationsReducer.applications);

	const searchRef = useRef(null);

	const [filters, setFilters] = useState({
		status: "",
		payment_status: "",
		engineer_category: "",
	});
	const [selectedData, setSelectedData] = useState([]);
	const [search, setSearch] = useState("");
	const [loading, setLoading] = useState(true);

	const getProducts = (search) => {
		setLoading(true);
		ApplicationsService.getAll(search, setLoading);
	};

	useEffect(() => {
		getProducts({
			search: search,
			...filters,
		});
	}, [search, filters]);

	const handleResetFilter = () => {
		setFilters({
			status: "",
			payment_status: "",
			engineer_category: "",
		});
	};

	const handleSearch = (e) => {
		e.preventDefault();
		setSearch(searchRef.current.value);
	};

	const handleFilterByStatus = (status) => setFilters({ ...filters, status: status.value });

	const handleFilterByPaymentStatus = (payment_status) => setFilters({ ...filters, payment_status: payment_status.value });

	const handleFilterByEngineerCategory = (engineer_category) => setFilters({ ...filters, engineer_category: engineer_category.value });

	const handleSelectedRows = (selectedRows) => setSelectedData(selectedRows);

	return (
		<Container fluid className="px-0">
			<PageHeader title="Applications" breadcrumbStr="Applications \ List" />

			<Card>
				<Card.Header>
					<div className="row table-filters">
						<Form className="col-lg-6">
							<Form.Row>
								<Col>
									<Form.Group>
										<Select
											isSearchable={false}
											options={filterByApplicationStatusOptions}
											onChange={handleFilterByStatus}
											defaultValue={[{ label: "All", value: "" }]}
										/>
										<div>
											<small>Filter by Status</small>
										</div>
									</Form.Group>
								</Col>

								<Col>
									<Form.Group>
										<Select
											isSearchable={false}
											options={filterByPaymentStatusOptions}
											onChange={handleFilterByPaymentStatus}
											defaultValue={[{ label: "All", value: "" }]}
										/>
										<div>
											<small>Filter by Payment Status</small>
										</div>
									</Form.Group>
								</Col>

								<Col className="d-none">
									<Form.Group>
										<Select
											isSearchable={false}
											options={filterByEngineerCategoryOptions}
											onChange={handleFilterByEngineerCategory}
											defaultValue={[{ label: "All", value: "" }]}
										/>
										<div>
											<small>Filter by Engineer Category</small>
										</div>
									</Form.Group>
								</Col>
							</Form.Row>

							{(filters.status !== "" || filters.payment_status !== "") && (
								<div className="pt-2">
									<Button variant="danger" size="sm" onClick={handleResetFilter}>
										<FiXCircle className="mr-1" /> <small>Clear Filters</small>
									</Button>
								</div>
							)}
						</Form>

						<Form className="col-lg-6 px-0" onSubmit={handleSearch}>
							<InputGroup className="col-lg-6 ml-auto">
								<input className="form-control" placeholder="Search ..." ref={searchRef} />
								<InputGroup.Append className="pl-1">
									<Button variant="light" onClick={handleSearch}>
										<FiSearch />
									</Button>
								</InputGroup.Append>
							</InputGroup>
						</Form>
					</div>
				</Card.Header>

				<Card.Body>
					<Table headers={application_records_table_header} data={applications} loading={loading} handleSelectedRows={handleSelectedRows} />
				</Card.Body>
			</Card>
		</Container>
	);
}

export default List;
