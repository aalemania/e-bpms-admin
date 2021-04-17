import React from "react";
import { Card, Form, Col, Button } from "react-bootstrap";

function ApplicationPropertyCard({ data }) {
	return (
		<Card className="mb-3">
			<Card.Header>
				<p>Property Data</p>
			</Card.Header>
			<Card.Body>
				<Form className="normal-form">
					<Form.Group>
						<Form.Row>
							<Col lg={2}>
								<Form.Label>Pin #</Form.Label>
							</Col>

							<Col lg={10}>
								<input className="form-control" defaultValue={data.pin_no} />
							</Col>
						</Form.Row>
					</Form.Group>

					<Form.Group>
						<Form.Row>
							<Col lg={2}>
								<Form.Label>Location</Form.Label>
							</Col>

							<Col lg={10}>
								<input className="form-control" defaultValue={data.location} />
							</Col>
						</Form.Row>
					</Form.Group>

					<Form.Group>
						<Form.Row>
							<Col lg={2}>
								<Form.Label>Municipality</Form.Label>
							</Col>

							<Col lg={10}>
								<input className="form-control" defaultValue={data.municipality} />
							</Col>
						</Form.Row>
					</Form.Group>

					<Form.Group>
						<Form.Row>
							<Col lg={2}>
								<Form.Label>Street #</Form.Label>
							</Col>

							<Col lg={10}>
								<input className="form-control" defaultValue={data.street_no} />
							</Col>
						</Form.Row>
					</Form.Group>

					<Form.Group>
						<Form.Row>
							<Col lg={2}>
								<Form.Label>Street name</Form.Label>
							</Col>

							<Col lg={10}>
								<input className="form-control" defaultValue={data.street_name} />
							</Col>
						</Form.Row>
					</Form.Group>

					<Form.Group>
						<Form.Row>
							<Col lg={2}>
								<Form.Label>Real estate #</Form.Label>
							</Col>

							<Col lg={10}>
								<input className="form-control" defaultValue={data.real_estate_no} />
							</Col>
						</Form.Row>
					</Form.Group>

					<Form.Group>
						<Form.Row>
							<Col lg={2}>
								<Form.Label>Land #</Form.Label>
							</Col>

							<Col lg={10}>
								<input className="form-control" defaultValue={data.land_no} />
							</Col>
						</Form.Row>
					</Form.Group>

					<Form.Group>
						<Form.Row>
							<Col lg={2}>
								<Form.Label>Title deed</Form.Label>
							</Col>

							<Col lg={10}>
								<input className="form-control" defaultValue={data.title_deed} />
							</Col>
						</Form.Row>
					</Form.Group>

					<Form.Group>
						<Form.Row>
							<Col lg={2}>
								<Form.Label>Area space</Form.Label>
							</Col>

							<Col lg={10}>
								<input className="form-control" defaultValue={data.area_space} />
							</Col>
						</Form.Row>
					</Form.Group>

					<Form.Group>
						<Form.Row>
							<Col lg={2}>
								<Form.Label>Total build-up area</Form.Label>
							</Col>

							<Col lg={10}>
								<input className="form-control" defaultValue={data.total_build_up_area} />
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

export default ApplicationPropertyCard;
