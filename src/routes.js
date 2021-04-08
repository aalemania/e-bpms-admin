import { Dashboard } from "./views/dashboard";

// Authentication
import {
	Login,
	ForgotPassword,
	VerifyLoginOtp,
	VerifyOtp,
} from "./views/authentication";

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
	{
		path: "/auth/forgot-password",
		exact: true,
		name: "Authentication Forgot Password",
		component: ForgotPassword,
	},
	{
		path: "/auth/login/verify-otp",
		exact: true,
		name: "Authentication Login Verify OTP",
		component: VerifyLoginOtp,
	},
	{
		path: "/auth/verify-otp",
		exact: true,
		name: "Authentication Verify OTP",
		component: VerifyOtp,
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
	{
		path: "*",
		exact: true,
		name: "Page not found",
		component: () => "No content",
	},
];

export default routes;
