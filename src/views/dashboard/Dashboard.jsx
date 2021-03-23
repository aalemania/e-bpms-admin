import React from "react";
import { Container } from "react-bootstrap";

import PageHeader from "./../../components/PageHeader";

function Dashboard() {
  return (
    <Container fluid className="page-content">
      <PageHeader title="Dashboard Overview" />
    </Container>
  );
}

export default Dashboard;
