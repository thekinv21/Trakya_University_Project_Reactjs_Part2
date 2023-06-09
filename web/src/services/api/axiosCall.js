import { axiosInstance } from './apiInterceptor'

const getToken = () => {
	return JSON.parse(sessionStorage.getItem('token')).accessToken
}

const headers = authRequired => {
	return authRequired ? { Authorization: `Bearer ${getToken()}` } : {}
}

export const axiosCall = {
	get: async (URL, params = null, authRequired = true) => {
		const response = await axiosInstance.get(URL, {
			headers: headers(authRequired),
			params,
		})
		return response.data
	},
	post: async (URL, data = null, authRequired = true) => {
		const response = await axiosInstance.post(URL, data, {
			headers: headers(authRequired),
		})
		return response.data
	},
	put: async (URL, data = null, authRequired = true) => {
		const response = await axiosInstance.put(URL, data, {
			headers: headers(authRequired),
		})
		return response.data
	},
	delete: async (URL, authRequired = true) => {
		const response = await axiosInstance.delete(URL, {
			headers: headers(authRequired),
		})
		return response.data
	},
}
