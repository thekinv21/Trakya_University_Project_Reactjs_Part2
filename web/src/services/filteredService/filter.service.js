// import { axiosInstance } from '../api/apiInterceptor'
import { axiosInstance } from '../api/apiInterceptor'
import { END_POINTS } from '../endpointService/endpoints.service'
import { useQuery } from '@tanstack/react-query'

const getFilterRestaurant = async searchParams => {
	const response = await axiosInstance.get(
		END_POINTS.RESTAURANT_CONTROLLER.GET_RESTAURANT_FILTERED,
		{ params: searchParams }
	)
	return response.data
}

export const useGetFilteredRest = searchParams => {
	const { data, isLoading, refetch } = useQuery(
		['filteredRestaurant', searchParams.toString()],
		() => getFilterRestaurant(new URLSearchParams(searchParams))
	)
	return { data, refetch, isLoading }
}
