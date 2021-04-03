import Cookie from "js-cookie";

import { httpClient } from "./../api";

const AuthenticationService = {
	login: async (credentials) => {
		let response = await httpClient.post(`/auth/user/login`, credentials);

		console.log(response.data);

		return response;
	},
};

export default AuthenticationService;
