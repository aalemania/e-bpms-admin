import React from "react";
import { Card, Form, Col } from "react-bootstrap";

import { setPaymentStatusStr } from "./../../../reusables/status.constants";

function ApplicationRecordCard({ data }) {
	return (
		<Card className="mb-3">
			<Card.Header>
				<p>Appliction Record Data</p>
			</Card.Header>
			<Card.Body>
				<Form className="normal-form">
					<Form.Group>
						<Form.Row>
							<Col lg={2}>
								<Form.Label>UUID</Form.Label>
							</Col>

							<Col lg={10}>
								<input className="form-control" defaultValue={data.uuid} readOnly />
							</Col>
						</Form.Row>
					</Form.Group>

					<Form.Group>
						<Form.Row>
							<Col lg={2}>
								<Form.Label>Status</Form.Label>
							</Col>

							<Col lg={10}>
								<input className="form-control" defaultValue={data.status} readOnly />
							</Col>
						</Form.Row>
					</Form.Group>

					<Form.Group>
						<Form.Row>
							<Col lg={2}>
								<Form.Label>Payment Status</Form.Label>
							</Col>

							<Col lg={10}>
								<input className="form-control" defaultValue={setPaymentStatusStr(data.payment_status)} readOnly />
							</Col>
						</Form.Row>
					</Form.Group>
				</Form>
			</Card.Body>
		</Card>
	);
}

export default ApplicationRecordCard;
