import axios from "axios";
import { apiUrl } from "./constants";

export const httpClient = axios.create({
	baseURL: apiUrl,
});
