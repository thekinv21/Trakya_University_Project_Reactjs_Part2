import { axiosInstance } from '../api/apiInterceptor'
import { END_POINTS } from '../endpointService/endpoints.service'
import { useMutation, useQuery } from '@tanstack/react-query'

//*===============GET USER ACCESTOKEN==================

const getToken = () => {
	return JSON.parse(sessionStorage.getItem('token')).accessToken
}

//*===============GET RANDOM RESTAURANTS==================

export const useGetRandom = restLength => {
	const getRandom = async () => {
		const URL = END_POINTS.RESTAURANT_CONTROLLER.GET_RANDOM_RESTAURANT.replace(
			':length',
			restLength
		)

		const response = await axiosInstance.get(URL)

		if (!response.data || !response.data.content) {
			throw new Error(
				'Geçersiz veri alindi Bu hata Main componentin içinde RestItemda'
			)
		}

		return response.data.content
	}

	return useQuery(['randomRestaurants', restLength], getRandom)
}

//*====================GET RESTAURANTS===================

const getRestaurant = async () => {
	const myToken = getToken()
	const headers = {
		Authorization: `Bearer ${myToken}`,
	}

	const response = await axiosInstance.get(
		END_POINTS.RESTAURANT_CONTROLLER.GET_RESTAURANT,
		{ headers }
	)

	return response.data.content
}

export const useGetRestaurant = () => {
	return useQuery(['getRestaurant'], getRestaurant)
}

//*====================GET RESTAURANT BY ID===================

const getRestaurantById = async id => {
	const URL = END_POINTS.RESTAURANT_CONTROLLER.GET_RESTAURANT_BY_ID.replace(
		':id',
		id
	)

	const response = await axiosInstance.get(URL)
	return response.data.content
}

export const useGetRestaurantById = id => {
	return useQuery(['getRestaurant', id], () => getRestaurantById(id))
}

//*====================GET RESTAURANT EMPTY DATE==================

const getEmptyHours = async (id, date) => {
	const URL =
		END_POINTS.RESTAURANT_CONTROLLER.GET_RESTAURANT_EMPTY_HOURS.replace(
			':id',
			id
		).replace(':date', date)

	const response = await axiosInstance.get(URL)
	return response.data.content
}

export const useGetEmptyHours = (id, date) => {
	return useQuery(['getEmptyHours', id, date], () => getEmptyHours(id, date))
}

//*====================GET RESTAURANT REVİEWS=================

const getReviews = async restId => {
	const URL = END_POINTS.RESTAURANT_CONTROLLER.GET_RESTAURANT_REVİEWS.replace(
		':restId',
		restId
	)

	const myToken = getToken()
	const headers = {
		Authorization: `Bearer ${myToken}`,
	}

	const response = await axiosInstance.get(URL, restId, { headers })
	return response.data.content
}

export const useGetReviews = restId => {
	const { data, isLoading, refetch } = useQuery(['getReviews', restId], () =>
		getReviews(restId)
	)

	return { data, isLoading, refetch }
}

//*====================POST RESTAURANT REVİEW=================

const postReview = async ({ userId, restaurantId, star, content }) => {
	const URL = END_POINTS.RESTAURANT_CONTROLLER.POST_RESTAURANT_REVİEW

	const myToken = getToken()
	const headers = {
		Authorization: `Bearer ${myToken}`,
	}

	const response = await axiosInstance.post(
		URL,
		{ userId, restaurantId, star, content },
		{ headers }
	)

	return response.data.content
}

export const usePostReview = () => {
	return useMutation(postReview)
}
