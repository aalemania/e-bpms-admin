import { Dashboard } from "./views/dashboard";

// Authentication
import { Login } from "./views/authentication";

// Applications
import { ApplicationList, ApplicationCreate } from "./views/applications/";

const routes = [
	// Dashboard
	{ path: "/", exact: true, name: "Dashboard", component: Dashboard },

	// Authentication
	{
		path: "/auth/login",
		exact: true,
		name: "Authentication Login",
		component: Login,
	},

	// Applications
	{
		path: "/applications",
		exact: true,
		name: "Applications",
		component: ApplicationList,
	},
	{
		path: "/applications/create",
		exact: true,
		name: "New Application",
		component: ApplicationCreate,
	},
];

export default routes;
