import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { FiPlusCircle } from "react-icons/fi";

function PageHeader({
  title = "",
  showActionButtons = false,
  actionButtonAttributes = {
    title: "",
    redirectTo: "",
  },
  breadcrumbStr = "",
}) {
  let history = useHistory();

  const redirectTo = (path) => history.push(path);

  return (
    <Container fluid className="px-0">
      <p className="text-muted mb-3">{breadcrumbStr}</p>

      <Container
        fluid
        className="page-header align-items-baseline d-flex px-0 "
      >
        <h3>{title}</h3>

        {showActionButtons && (
          <Button
            variant="primary"
            onClick={() => redirectTo(actionButtonAttributes.redirectTo)}
            className="ml-auto"
          >
            <FiPlusCircle className="mr-2" />
            {actionButtonAttributes.title}
          </Button>
        )}
      </Container>
    </Container>
  );
}

export default PageHeader;
