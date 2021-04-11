import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Card } from "react-bootstrap";

import PageHeader from "./../../components/PageHeader";

function Create() {
	document.title = "E-BPMS::New Application";

	const dispatch = useDispatch();
	const application = useSelector((state) => state.applicationsReducer.application);

	console.log(application);

	return (
		<Container fluid className="px-0">
			<PageHeader title="New Application" />
			<Card>
				<Card.Header></Card.Header>
				<Card.Body></Card.Body>
			</Card>
		</Container>
	);
}

export default Create;
