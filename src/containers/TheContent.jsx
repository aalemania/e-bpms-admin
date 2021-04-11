import React, { Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Alert } from "react-bootstrap";
import { Redirect, Route, Switch } from "react-router-dom";
import { CContainer, CFade } from "@coreui/react";

import { dismissAlert } from "./../redux/modules/alerts";

// routes config
import routes from "../routes";

const loading = (
	<div className="pt-3 text-center">
		<div className="sk-spinner sk-spinner-pulse"></div>
	</div>
);

const TheContent = () => {
	const dispatch = useDispatch();
	const alert = useSelector((state) => state.alertsReducer.alert);

	const handleDismissAlert = () => dispatch(dismissAlert());

	return (
		<main className="c-main">
			<CContainer fluid>
				{alert.show && (
					<Alert variant={alert.variant} onClose={handleDismissAlert} dismissible>
						Error &mdash; failed to fetch data, something went wrong!
					</Alert>
				)}
				<Suspense fallback={loading}>
					<Switch>
						{routes.map((route, idx) => {
							return (
								route.component && (
									<Route
										key={idx}
										path={route.path}
										exact={route.exact}
										name={route.name}
										render={(props) => (
											<CFade>
												<route.component {...props} />
											</CFade>
										)}
									/>
								)
							);
						})}
						<Redirect from="/" to="/dashboard" />
					</Switch>
				</Suspense>
			</CContainer>
		</main>
	);
};

export default React.memo(TheContent);
