import { END_POINTS } from '../endpointService/endpoints.service'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

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

	const response = await axios.put(URL, requestData, { headers })
	return response.data
}

export const usePutUser = () => {
	return useMutation(putUser)
}
