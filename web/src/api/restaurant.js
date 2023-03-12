import { END_POINTS } from "./end-points";
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

//========== GET RESTAURANT ============
const getRestaurant = async () => {
    const response = await axios.get(END_POINTS.RESTAURANT_CONTROLLER.GET_RESTAURANT)
    return response.data
}

export const useGetRestaurant = () => {
    const { data, refetch, isLoading } = useQuery(['getRestaurant'], () => getRestaurant())
    return { data, refetch, isLoading }
}

//========== GET RESTAURANT BY ID ==========
const getRestaurantById = async (id) => {
    const URL = END_POINTS.RESTAURANT_CONTROLLER.GET_RESTAURANT_BY_ID.replace(':id', id)
    const response = await axios.get(URL)
    return response.data
}

export const useGetRestaurantById = (id) => {
    const { data, refetch, isLoading } = useQuery(['getRestaurant', id], () => getRestaurantById(id))
    return { data, refetch, isLoading }
}