import React, { useEffect } from "react";
import { Container, Card } from "react-bootstrap";

import PageHeader from "./../../components/PageHeader";

function Create() {
  return (
    <Container fluid className="px-0">
      <PageHeader title="New Application" />
      <Card>
        <Card.Body></Card.Body>
      </Card>
    </Container>
  );
}

export default Create;
