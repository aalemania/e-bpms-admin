import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Container, Card, Form, Col, Button, InputGroup } from "react-bootstrap";
import { FiXCircle, FiSearch } from "react-icons/fi";
import Select from "react-select";

import { filterByApplicationStatusOptions } from "../../reusables/dropdown-options.constant";
import { invoices_records_table_header } from "./../../components/tables/headers";
import InvoicesService from "./../../services/invoices.service";
import PageHeader from "./../../components/PageHeader";
import Table from "./../../components/tables/Table";

function List() {
	document.title = "E-BPMS::Invoices";

	const invoices = useSelector((state) => state.invoicesReducer.invoices);

	const searchRef = useRef(null);

	const [filters, setFilters] = useState({
		applicant: "",
	});
	const [selectedData, setSelectedData] = useState([]);
	const [search, setSearch] = useState("");
	const [loading, setLoading] = useState(true);

	const getInvoices = (search) => {
		setLoading(true);
		InvoicesService.getAll(search, setLoading);
	};

	useEffect(() => {
		getInvoices("");
	}, [search, filters]);

	useState(() => {
		console.log(selectedData);
	}, [selectedData]);

	const handleResetFilter = () => {
		setFilters({
			applicant: "",
		});
	};

	const handleSearch = (e) => {
		e.preventDefault();
		setSearch(searchRef.current.value);
	};

	const handleFilterByStatus = (status) => setFilters({ ...filters, status: status.value });

	const handleSelectedRows = (selectedRows) => setSelectedData(selectedRows);

	return (
		<Container fluid className="px-0">
			<PageHeader title="Applications" breadcrumbStr="Applications \ List" />

			<Card>
				<Card.Header>
					<div className="row table-filters">
						<Form className="col-lg-6">
							<Form.Row>
								<Col lg={4}>
									<Form.Group>
										<Select
											isSearchable={false}
											options={filterByApplicationStatusOptions}
											onChange={handleFilterByStatus}
											defaultValue={[{ label: "All", value: "" }]}
										/>
										<div>
											<small>Filter by Applicant</small>
										</div>
									</Form.Group>
								</Col>
							</Form.Row>

							{filters.applicant !== "" && (
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
					<Table headers={invoices_records_table_header} data={invoices} loading={loading} handleSelectedRows={handleSelectedRows} />
				</Card.Body>
			</Card>
		</Container>
	);
}

export default List;
