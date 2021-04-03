import { Container, Card } from "react-bootstrap";

import LoginForm from "./../../components/forms/authentications/LoginForm";

const Login = () => {
	return (
		<Container
			fluid
			className="main-content-center"
			style={{ paddingTop: "6rem" }}
		>
			<div className="col-md-4col-lg-3 px-3">
				<Card className="authentication-card-container shadow-sm px-3">
					<Card.Body>
						<div className="text-center mb-4">
							<div className="mb-4">
								<img
									src="/images/icons/brand-icon.ico"
									alt="EBPMS Icon"
								/>
							</div>

							<h5 className="font-weight-bold">
								Electronic Building Permit System
							</h5>
						</div>

						<LoginForm />
					</Card.Body>
				</Card>
			</div>
		</Container>
	);
};

export default Login;
