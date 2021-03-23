import React from "react";
import { Container } from "react-bootstrap";
import DataTable from "react-data-table-component";

function Table({
  headers = [],
  data = [],
  pagination = true,
  loading = false,
  empty = false,
  newRecordURL = "",
}) {
  const TableNoDataPlaceholder = (
    <Container className="text-center py-5">
      <h6 className="text-muted">No data available</h6>
    </Container>
  );

  return (
    <DataTable
      noHeader
      striped
      pagination={pagination}
      columns={headers}
      data={data}
      progressPending={loading}
      noDataComponent={TableNoDataPlaceholder}
    />
  );
}

export default Table;
