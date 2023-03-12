import { END_POINTS } from "./end-points";
import  {useMutation, useQuery }from '@tanstack/react-query'
import axios from 'axios'

//========== DELETE USER =========
const deleteUser = async (id) => {
    const URL = END_POINTS.USER_CONTROLLER.DELETE_USER.replace(':id',id)
    const response = await axios.delete(URL)
    return response.data
}

export const useDeleteUser = () => {
    return useMutation(deleteUser)
}

//=========== RESET USER PASSWORD =======
const postResetUserPassword = async (values={mail, password}) => {
    const resetData = {
        mail: values.mail,
        password: values.password,
        code: 0
    }
    const response = await axios.post(END_POINTS.USER_CONTROLLER.POST_RESET_PASSWORD,resetData)
    return response.data
}

export const usePostResetUserPassword = () => {
    return useMutation(postResetUserPassword)
}