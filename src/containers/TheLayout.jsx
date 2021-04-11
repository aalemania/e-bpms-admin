import React from "react";
import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import { TheContent, TheSidebar, TheFooter, TheHeader } from "./index";
import {
	Login,
	Register,
	ForgotPassword,
	VerifyLoginOtp,
	VerifyOtp,
} from "../views/authentication";

const TheLayout = () => {
	const location = useLocation();

	const AuthenticationLayout = () => (
		<Container fluid className="authentication-container">
			<div className="bg-overlay"></div>
			{location.pathname === "/auth/login" && <Login />}
			{location.pathname === "/auth/register" && <Register />}
			{location.pathname === "/auth/forgot-password" && <ForgotPassword />}
			{location.pathname === "/auth/login/verify-otp" && <VerifyLoginOtp />}
			{location.pathname === "/auth/verify-otp" && <VerifyOtp />}
		</Container>
	);

	const DashboardLayout = () => (
		<div className="c-app c-default-layout">
			<TheSidebar />
			<div className="c-wrapper">
				<TheHeader />
				<div className="c-body min-vh-100">
					<TheContent />
				</div>
				<TheFooter />
			</div>
		</div>
	);

	return location.pathname.includes("auth") ? (
		<AuthenticationLayout />
	) : (
		<DashboardLayout />
	);
};

export default TheLayout;
