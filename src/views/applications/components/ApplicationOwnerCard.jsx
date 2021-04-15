import React from "react";
import { Card, Form, Col, Button } from "react-bootstrap";

function ApplicationOwnerCard({ data }) {
	return (
		<Card className="mb-3">
			<Card.Header>
				<p>Owner Data</p>
			</Card.Header>
			<Card.Body>
				<Form className="normal-form">
					<Form.Group>
						<Form.Row>
							<Col lg={2}>
								<Form.Label>Name</Form.Label>
							</Col>

							<Col lg={10}>
								<input className="form-control" defaultValue={data.name} />
							</Col>
						</Form.Row>
					</Form.Group>

					<Form.Group>
						<Form.Row>
							<Col lg={2}>
								<Form.Label>License #</Form.Label>
							</Col>

							<Col lg={10}>
								<input className="form-control" defaultValue={data.license_no} />
							</Col>
						</Form.Row>
					</Form.Group>

					<Form.Group>
						<Form.Row>
							<Col lg={2}>
								<Form.Label>Mobile #</Form.Label>
							</Col>

							<Col lg={10}>
								<input className="form-control" defaultValue={data.mobile_no} />
							</Col>
						</Form.Row>
					</Form.Group>

					<Form.Group>
						<Form.Row>
							<Col lg={2}>
								<Form.Label>Comments</Form.Label>
							</Col>

							<Col lg={10}>
								<input className="form-control" defaultValue={data.comments} />
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

export default ApplicationOwnerCard;
