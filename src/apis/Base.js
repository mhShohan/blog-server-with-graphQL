import axios from "axios";

class BaseAPI {
	constructor(url) {
		this.url = url;
	}

	setHeaders() {
		axios.defaults.headers.common['x-access-token'] = localStorage.getItem('token');
		axios.defaults.headers.common['Content-Type'] = 'application/json';
	}

	async get(query = {}, endpoint = "") {
		try {
			this.setHeaders();
			const uri = this.url + endpoint;
			const response = await axios.get(uri, { params: query });
			return { error: false, data: response.data };
		} catch (error) {
			return this.handleNetworkError(error);
		}
	}

	async post(data, endpoint = "") {
		try {
			this.setHeaders();

			const uri = this.url + endpoint;
			
			const response = await axios.post(uri, data);
			return { error: false, data: response.data };
		} catch (error) {
			return this.handleNetworkError(error);
		}
	}

	handleNetworkError(error) {
		if (error.response) {
			return { error: true, data: error.response.data, errors: error.response.data?.errors || { message: "failed" } };
		} else if (error.request) {
			return { error: true, data: error.request };
		} else {
			return { error: true, data: error.message };
		}
	}


}

export default BaseAPI;