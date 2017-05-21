import axios from 'axios'

export default (url, params) => {
	return axios({
		url: url,
		type: 'post',
		timeout: 5000,
		params: params,
	});
}