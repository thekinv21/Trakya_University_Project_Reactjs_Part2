import { END_POINTS } from '../endpointService/endpoints.service'
import { axiosInstance } from './../api/apiInterceptor'
import { useMutation } from '@tanstack/react-query'

//*===================GET ACCESTOKEN==================

const getToken = () => {
	return JSON.parse(sessionStorage.getItem('token')).accessToken
}

//?==============PUT USER============
const putUser = async requestData => {
	const URL = END_POINTS.USER_CONTROLLER.PUT_USER

	const myToken = getToken()
	const headers = {
		Authorization: `Bearer ${myToken}`,
	}

	const response = await axiosInstance.put(URL, requestData, { headers })
	return response.data
}

export const usePutUser = () => {
	return useMutation(putUser)
}
