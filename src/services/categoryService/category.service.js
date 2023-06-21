import { axiosInstance } from '../api/apiInterceptor'
import { END_POINTS } from '../endpointService/endpoints.service'
import { useQuery } from '@tanstack/react-query'

//*================GET CATEGORY====================
const getCategory = async () => {
	const response = await axiosInstance.get(
		END_POINTS.CATEGORY_CONTROLLER.GET_CATEGORY
	)
	return response.data.content
}

export const useGetCategory = () => {
	const { data, refetch, isLoading } = useQuery(['getCategory'], () =>
		getCategory()
	)
	return { data, refetch, isLoading }
}

//*=============GET CATEGORY BY ID=================

const getCategoryById = async id => {
	const URL = END_POINTS.CATEGORY_CONTROLLER.GET_CATEGORY_BY_ID.replace(
		':id',
		id
	)
	const response = await axiosInstance.get(URL)
	return response.data.content
}

export const useGetCategoryById = id => {
	return useQuery(['getCategoryById', id], () => getCategoryById(id))
}
