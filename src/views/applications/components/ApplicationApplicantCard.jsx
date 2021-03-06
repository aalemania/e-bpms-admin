import React from "react";
import { Card, Form, Col, Button } from "react-bootstrap";

function ApplicationApplicantCard({ data, user }) {
	const formatUserName = (user) => {
		const { first_name, last_name } = user;

		return first_name + " " + last_name;
	};

	return (
		<Card className="mb-3">
			<Card.Header>
				<p>Applicant Data</p>
			</Card.Header>
			<Card.Body>
				<Form className="normal-form">
					<Form.Group>
						<Form.Row>
							<Col lg={2}>
								<Form.Label>Name</Form.Label>
							</Col>

							<Col lg={10}>
								<input className="form-control" defaultValue={formatUserName(user)} readOnly />
							</Col>
						</Form.Row>
					</Form.Group>

					<Form.Group>
						<Form.Row>
							<Col lg={2}>
								<Form.Label>Type of applicant</Form.Label>
							</Col>

							<Col lg={10}>
								<input className="form-control" defaultValue={data.type_of_applicant} />
							</Col>
						</Form.Row>
					</Form.Group>

					<Form.Group>
						<Form.Row>
							<Col lg={2}>
								<Form.Label>License #</Form.Label>
							</Col>

							<Col lg={10}>
								<input className="form-control" defaultValue={data.type_of_applicant} />
							</Col>
						</Form.Row>
					</Form.Group>

					<Form.Group>
						<Form.Row>
							<Col lg={2}>
								<Form.Label>Mobile #</Form.Label>
							</Col>

							<Col lg={10}>
								<input className="form-control" defaultValue={data.type_of_applicant} />
							</Col>
						</Form.Row>
					</Form.Group>

					<div className="text-right border-top pt-3">
						<Button variant="success">
							<small>Update Information</small>
						</Button>
					</div>
				</Form>
			</Card.Body>
		</Card>
	);
}

export default ApplicationApplicantCard;
