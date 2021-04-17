import { Dashboard } from "./views/dashboard";

// Authentication
import { Login, ForgotPassword, VerifyLoginOtp, VerifyOtp } from "./views/authentication";

// Applications
import { ApplicationList, ApplicationCreate, ApplicationShow } from "./views/applications/";

// Invoices
import { InvoiceList, InvoiceShow } from "./views/invoices";

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
		path: "/applications/:uuid/show",
		exact: true,
		name: "View Application",
		component: ApplicationShow,
	},

	// Invoices
	{
		path: "/invoices",
		exact: true,
		name: "Invoices",
		component: InvoiceList,
	},
	{
		path: "/invoices/:uuid/show",
		exact: true,
		name: "View Invoice",
		component: InvoiceShow,
	},

	// Page not found
	{
		path: "*",
		exact: true,
		name: "Page not found",
		component: () => "No content",
	},
];

export default routes;
