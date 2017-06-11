import axios from 'axios'
import qs from 'qs'

let ipPre = process.env.NODE_ENV === 'production' ? '' : 'http://127.0.0.1:9000'

// export default (url, params) => {
// 	return axios({
// 		method: 'post',
// 		url: url,
// 		timeout: 5000,
// 		params: params,
// 	})
// }
const fetchGet = (url, params) => {
	return axios.get(ipPre + url, {
		params,
		timeout: 5000,
	})
}

const fetchPost = (url, params) => {
	return axios.post(ipPre + url, qs.stringify(params), {
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