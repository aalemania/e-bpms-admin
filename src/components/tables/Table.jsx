import React from "react";
import { Container, Button } from "react-bootstrap";
import { FiRotateCw } from "react-icons/fi";
import DataTable from "react-data-table-component";

import TableLoader from "./TableLoader";

function Table({ headers = [], data = [], pagination = true, loading = false, handleSelectedRows = () => null }) {
	const TableNoDataPlaceholder = (
		<Container className="text-center py-5">
			<h6 className="text-muted">No data available</h6>
			<Button variant="secondary" size="sm" className="mt-2">
				<FiRotateCw className="mr-2" />
				<small>Reload page</small>
			</Button>
		</Container>
	);

	return (
		<DataTable
			noHeader
			wrap={true}
			allowOverflow={true}
			selectableRows={true}
			selectableRowsHighlight={true}
			clearSelectedRows={true}
			persistTableHead={true}
			pagination={pagination}
			columns={headers}
			data={data}
			progressPending={loading}
			progressComponent={<TableLoader />}
			noDataComponent={TableNoDataPlaceholder}
			onSelectedRowsChange={(rows) => handleSelectedRows(rows.selectedRows)}
		/>
	);
}

export default Table;
