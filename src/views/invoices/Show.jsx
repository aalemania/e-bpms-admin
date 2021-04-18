import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Button, Card, Image, Col } from "react-bootstrap";
import { FiPrinter, FiMail } from "react-icons/fi";

import { isPaidStatusBadge } from "./../../reusables/badges.constants";

import PageHeader from "./../../components/PageHeader";

function Show() {
	const { uuid } = useParams();
	document.title = `E-BPMS::View Invoices ${uuid}`;

	useEffect(() => {
		console.log("get invoice");
	}, []);

	return (
		<Container fluid className="px-0">
			<PageHeader title="View Invoice" />

			<Button variant="primary" className="mr-2">
				<FiPrinter className="mr-1" />
				<small>Print invoice</small>
			</Button>

			<Button variant="primary" className="mr-2">
				<FiMail className="mr-1" />
				<small>Email to client</small>
			</Button>

			<Col lg={8} className="mt-5 mx-auto">
				<Card className="invoice-card mt-3">
					<Card.Body>
						<Container fluid className="px-0">
							<Container fluid className="invoice-header rounded-top d-flex bg-light">
								<Image src="/images/icons/brand-icon.ico" className="company-logo" />

								<div className="text-right ml-auto">
									<h5>Al Kashaf International Design and Engineering Consultancy</h5>
									<p>Al sadd St. Doha, Qatar</p>
									<p>P.O. Box:24693, Doha State of Qatar</p>
									<p>+974 4414 7729, +974 5594 0476</p>
									<p>info@alkashafqatar.com</p>
								</div>
							</Container>

							<Container className="invoice-details">
								<Container fluid className="d-flex">
									<div>
										<h6 className="text-dark" style={{ fontWeight: "500" }}>
											Recipient
										</h6>
										<small>Company &mdash;</small>
										<p>Personal</p>
										<small>Name &mdash;</small>
										<p>Patrick Policarpio</p>
										<small>Email &mdash;</small>
										<p>patrickpolicarpio08@gmail.com</p>
										<small>Contact no. &mdash;</small>
										<p>+639 09 849 6955, 02 889 0750</p>
									</div>

									<div className="text-right ml-auto">
										<h6 className="text-dark" style={{ fontWeight: "500" }}>
											Invoice
										</h6>
										<small>Invoice no. &mdash;</small>
										<p>p_zUvPdU1PKV</p>
										<small>Date issued &mdash;</small>
										<p>April 18, 2021</p>
										<small>Payment status &mdash;</small>
										<p className="mt-1">{isPaidStatusBadge(0)}</p>
									</div>
								</Container>

								<div style={{ minHeight: "200px" }}></div>

								<Container fluid className="d-flex">
									<h6 className="text-secondary">Payment for</h6>

									<h6 className="text-secondary ml-auto">Amount</h6>
								</Container>

								<br />

								<Container fluid className="d-flex">
									<p>Services Downpayment (50%)</p>

									<p className="ml-auto">QAR 500.00</p>
								</Container>

								<hr />

								<Container fluid className="d-flex">
									<h5 className="font-weight-bold">Total</h5>

									<h5 className="font-weight-bold ml-auto">QAR 500.00</h5>
								</Container>

								<br />
								<br />

								<Container fluid>
									<small className="text-muted">
										If you have any questions and/or concerns please contact us at <i>support@e-bpms.site</i>. Lorem ipsum dolor sit amet
										consectetur adipisicing elit. Mollitia et pariatur assumenda tempora eligendi temporibus?
									</small>
								</Container>

								<br />
								<br />

								<Container fluid>
									<h5 className="font-weight-bold text-danger text-center text-uppercase">This will be serve as the official receipt</h5>
								</Container>
							</Container>
						</Container>
					</Card.Body>
				</Card>
			</Col>
		</Container>
	);
}

export default Show;
