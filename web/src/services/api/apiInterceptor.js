import { END_POINTS } from '../endpointService/endpoints.service'
import axios from 'axios'

export const axiosInstance = axios.create({ baseURL: END_POINTS.BASE_URL })

axiosInstance.interceptors.response.use(
	response => {
		return response
	},
	error => {
		console.log(`auth error ${error}`)

		setTimeout(() => {
			window.location.href = `/signin`
		}, [3000])

		return Promise.reject(error)
	}
)
