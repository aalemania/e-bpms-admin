import Cookie from "js-cookie";

import { httpClient } from "./../api";
import { alertDialog } from "./../utils/alerts";

const AuthService = {
	login: async (credentials, setLoading = null) => {
		try {
			let response = await httpClient.post("/auth/user/login", credentials);

			Cookie.set("accessToken", response.data.accessToken);
			Cookie.set("user", response.data.user);
			Cookie.set("user_type", response.data.user_type);
			Cookie.set("user_login_verified", false);

			window.location = "/auth/login/verify-otp";
		} catch (err) {
			alertDialog({
				title: "Error",
				icon: "error",
				text: "Invalid user credentials, please try again",
			});
		} finally {
			if (setLoading) setLoading(false);
		}
	},

	logout: async () => {
		try {
			Cookie.remove("accessToken");
			Cookie.remove("user");
			Cookie.remove("user_type");

			window.location = "/auth/login";
		} catch {}
	},

	logoutAllSessions: async () => {},

	updatePassword: async () => {},

	requestUserOtp: async (email) => {},

	verifyUserLoginOtp: async (otp_code, setLoading = null) => {
		try {
			await httpClient.post("/auth/user/verify-otp", {
				otp_code,
			});

			alertDialog({
				title: "Verified",
				icon: "success",
				text:
					"Authentication verified, you will be redirected to dashboard in a bit ...",
			});

			window.location = "/";
		} catch (err) {
			alertDialog({
				title: "Error",
				icon: "error",
				text: "Invalid OTP, it may have been used or expired already",
			});
		} finally {
			if (setLoading) setLoading(false);
		}
	},

	verifyUserOtp: async (otpCode) => {},
};

export default AuthService;
