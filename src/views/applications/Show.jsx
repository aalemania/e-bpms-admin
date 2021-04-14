import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, ButtonGroup, Button } from "react-bootstrap";
import { FiSliders, FiFileText, FiDownloadCloud } from "react-icons/fi";

import { ApplicationRecordCard, ApplicationPropertyCard } from "./components";
import ApplicationsService from "./../../services/applications.service";
import PageHeader from "./../../components/PageHeader";
import PageLoader from "./../../components/PageLoader";

function Show() {
	document.title = "E-BPMS::View Application";

	const { uuid } = useParams();
	const application = useSelector((state) => state.applicationsReducer.application);

	const [loading, setLoading] = useState(true);

	const getApplication = async (applicationUuid) => {
		await ApplicationsService.get(applicationUuid, setLoading);
	};

	useEffect(() => {
		getApplication(uuid);
	}, []);

	return (
		<Container fluid className="px-0">
			<PageHeader title="View Application" />

			<ButtonGroup className="mb-3">
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

			{loading && <PageLoader />}

			{!loading && (
				<>
					<ApplicationRecordCard data={application} />
					<ApplicationPropertyCard data={application.property_data} />
				</>
			)}
		</Container>
	);
}

export default Show;
