import axios from 'axios';

const http = axios.create({
	baseURL: 'https://65776e86197926adf62e489f.mockapi.io/api/v1/'
});

export default {
	get: http.get,
	post: http.post,
	put: http.put,
	delete: http.delete,
	patch: http.patch
};
