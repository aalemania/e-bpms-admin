import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, ButtonGroup, Button, Row, Col } from "react-bootstrap";
import { FiSliders, FiFileText, FiDownloadCloud, FiTrash2 } from "react-icons/fi";

import {
	ApplicationRecordCard,
	ApplicationApplicantCard,
	ApplicationOwnerCard,
	ApplicationPropertyCard,
	ApplicationProjectCard,
	ApplicationOthersCard,
} from "./components";
import ApplicationsService from "./../../services/applications.service";
import PageHeader from "./../../components/PageHeader";
import PageLoader from "./../../components/PageLoader";

const newDataButtonAttr = {
	title: "New Application",
	url: "/application-records/new",
};

function Show() {
	document.title = "E-BPMS::View Application";

	const { uuid } = useParams();
	const application = useSelector((state) => state.applicationsReducer.application);

	const [loading, setLoading] = useState(true);

	const getApplication = async (applicationUuid) => {
		await ApplicationsService.get(applicationUuid, setLoading);
	};

	const handleDeleteApplication = () => console.log("delete application");

	useEffect(() => {
		getApplication(uuid);
	}, [uuid]);

	return (
		<Container fluid className="px-0">
			<PageHeader title="View Application" newDataButtonAttr={newDataButtonAttr} />

			<Container fluid className="d-flex px-0 mb-3">
				<ButtonGroup className="d-none">
					<Button variant="primary" className="border">
						<small>
							<FiFileText className="mr-2" />
							Export to PDF
						</small>
					</Button>
					<Button variant="primary" className="border">
						<small>
							<FiSliders className="mr-2" />
							Export to CSV
						</small>
					</Button>
					<Button variant="primary" className="border">
						<small>
							<FiDownloadCloud className="mr-2" />
							Download Permit
						</small>
					</Button>
				</ButtonGroup>

				<Button variant="danger" className="ml-auto" onClick={handleDeleteApplication}>
					<small>
						<FiTrash2 className="mr-2" />
						Delete Application
					</small>
				</Button>
			</Container>

			{loading && <PageLoader />}

			{!loading && (
				<Row>
					<Col lg={7} className="mx-auto">
						<h5 className="font-weight-bold mb-3">Application Data</h5>
						<ApplicationRecordCard data={application} />
						<ApplicationApplicantCard data={application.applicant_data} user={application.applicant_user} />
						<ApplicationOwnerCard data={application.owner_data} />
						<ApplicationPropertyCard data={application.property_data} />
						<ApplicationProjectCard data={application.project_data} />
						<ApplicationOthersCard data={application.others_data} />
					</Col>

					<Col lg={5}></Col>
				</Row>
			)}
		</Container>
	);
}

export default Show;
