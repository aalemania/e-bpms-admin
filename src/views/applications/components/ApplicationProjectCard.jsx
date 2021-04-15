import React from "react";
import { Card, Form, Col, Button } from "react-bootstrap";

function ApplicationProjectCard({ data }) {
	return (
		<Card className="mb-3">
			<Card.Header>
				<p>Project Data</p>
			</Card.Header>
			<Card.Body>
				<Form className="normal-form">
					<Form.Group>
						<Form.Row>
							<Col lg={2}>
								<Form.Label>Type</Form.Label>
							</Col>

							<Col lg={10}>
								<input className="form-control" defaultValue={data.type} />
							</Col>
						</Form.Row>
					</Form.Group>

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
								<Form.Label>No. of floors</Form.Label>
							</Col>

							<Col lg={10}>
								<input className="form-control" defaultValue={data.no_of_floors} />
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

export default ApplicationProjectCard;
