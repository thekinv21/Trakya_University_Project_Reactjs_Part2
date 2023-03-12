import { END_POINTS } from "./end-points";
import  {useQuery }from '@tanstack/react-query'
import axios from 'axios'

//========= GET MENU BY ID ========

const getMenuById = async (id) => {
    const URL = END_POINTS.MENU_CONTROLLER.GET_MENU_BY_ID.replace(':id', id)
    const response = await axios.get(URL)
    return response.data
}

export const useGetMenuById = (id) => {
    const {data, refetch, isLoading} = useQuery(['getMenuById', id], () => getMenuById(id))
    return {data, refetch, isLoading}
}