import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./scss/style.scss";

const loading = (
	<div className="pt-3 text-center">
		<div className="sk-spinner sk-spinner-pulse"></div>
	</div>
);

// Containers
const DashboardLayout = React.lazy(() => import("./containers/TheLayout"));

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<React.Suspense fallback={loading}>
					<Switch>
						<Route
							path="/"
							name="Home"
							render={(props) => <DashboardLayout {...props} />}
						/>
					</Switch>
				</React.Suspense>
			</BrowserRouter>
		);
	}
}

export default App;
