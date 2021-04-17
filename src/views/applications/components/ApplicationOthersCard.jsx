import React from "react";
import { Card, Form, Col, Button } from "react-bootstrap";

function ApplicationOthersCard({ data }) {
	return (
		<Card className="mb-3">
			<Card.Header>
				<p>Company Details Data</p>
			</Card.Header>
			<Card.Body>
				<Form className="normal-form">
					<Form.Group>
						<Form.Row>
							<Col lg={2}>
								<Form.Label>Quote #</Form.Label>
							</Col>

							<Col lg={10}>
								<input className="form-control" defaultValue={data.quote_no} />
							</Col>
						</Form.Row>
					</Form.Group>

					<Form.Group>
						<Form.Row>
							<Col lg={2}>
								<Form.Label>Client #</Form.Label>
							</Col>

							<Col lg={10}>
								<input className="form-control" defaultValue={data.client_no} />
							</Col>
						</Form.Row>
					</Form.Group>

					<Form.Group>
						<Form.Row>
							<Col lg={2}>
								<Form.Label>Client Name</Form.Label>
							</Col>

							<Col lg={10}>
								<input className="form-control" defaultValue={data.client_name} />
							</Col>
						</Form.Row>
					</Form.Group>

					<Form.Group>
						<Form.Row>
							<Col lg={2}>
								<Form.Label>Required works</Form.Label>
							</Col>

							<Col lg={10}>
								<input className="form-control" defaultValue={data.required_works} />
							</Col>
						</Form.Row>
					</Form.Group>

					<Form.Group>
						<Form.Row>
							<Col lg={2}>
								<Form.Label>Others</Form.Label>
							</Col>

							<Col lg={10}>
								<input className="form-control" defaultValue={data.others} />
							</Col>
						</Form.Row>
					</Form.Group>

					<Form.Group>
						<Form.Row>
							<Col lg={2}>
								<Form.Label>Services Fees</Form.Label>
							</Col>

							<Col lg={10}>
								<input className="form-control" defaultValue={data.services_fees} />
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

export default ApplicationOthersCard;
