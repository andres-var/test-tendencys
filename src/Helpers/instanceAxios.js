import axios             from "axios";
import { APIURL, TOKEN } from "Config";

const instanceAxios = axios.create({
	baseURL : APIURL,
	timeout : 1000,
	headers : {
		Accept        : "application/json",
		Authorization : `${TOKEN}`,
	},
});

const responseSuccessHandler = (response) => response;

const responseErrorHandler = (error) => {
	if (error.response?.status === 401) {
		return Promise.reject(error);
	}
	return Promise.reject(error);
};

instanceAxios.interceptors.response.use(
	(response) => responseSuccessHandler(response),
	(error) => responseErrorHandler(error),
);

instanceAxios.CancelToken = axios.CancelToken;
instanceAxios.isCancel = axios.isCancel;

export default instanceAxios;
