import { axiosInstance } from '../api/apiInterceptor'
import { END_POINTS } from '../endpointService/endpoints.service'
import { useQuery } from '@tanstack/react-query'

const getFilterRestaurant = async (
	restaurantCity,
	restaurantName,
	page,
	size,
	sort
) => {
	const URL = `${END_POINTS.RESTAURANT_CONTROLLER.GET_RESTAURANT_FILTERED}?city=${restaurantCity}&restaurantName=${restaurantName}&page=${page}&size=${size}&sortField=${sort}`

	const response = await axiosInstance.get(URL)
	return response.data
}

export const useGetFilteredRest = (
	restaurantCity,
	restaurantName,
	page,
	size,
	sort
) => {
	const { data, isLoading, refetch } = useQuery(
		['filteredRestaurant', restaurantCity, restaurantName, page, size, sort],
		() => getFilterRestaurant(restaurantCity, restaurantName, page, size, sort)
	)

	return { data, isLoading, refetch }
}
