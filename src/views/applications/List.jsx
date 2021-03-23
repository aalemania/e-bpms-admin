import React from "react";
import { Container, Card } from "react-bootstrap";

import PageHeader from "./../../components/PageHeader";

function List() {
  let actionButtonAttributes = {
    title: "New Application",
    redirectTo: "/applications/create",
  };

  return (
    <Container fluid className="px-0">
      <PageHeader
        title="Applications"
        breadcrumbStr="Applications \ List"
        showActionButtons={true}
        actionButtonAttributes={actionButtonAttributes}
      />
      <Card>
        <Card.Body></Card.Body>
      </Card>
    </Container>
  );
}

export default List;
