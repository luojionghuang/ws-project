import axios from 'axios'
import qs from 'qs'

// export default (url, params) => {
// 	return axios({
// 		method: 'post',
// 		url: url,
// 		timeout: 5000,
// 		params: params,
// 	})
// }
const fetchGet = (url, params) => {
	return axios.get(url, {
		params,
		timeout: 5000,
	})
}

const fetchPost = (url, params) => {
	return axios.post(url, qs.stringify(params), {
		timeout: 5000,
	})
	// return axios({
	// 	url: url,
	// 	method: 'post',
	// 	data: params,
	// })
}

export {
	fetchGet,
	fetchPost,
}