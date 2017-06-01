import axios from 'axios'

export default (url, params) => {
	return axios({
		method: 'post',
		url: url,
		timeout: 5000,
		params: params,
	})
}