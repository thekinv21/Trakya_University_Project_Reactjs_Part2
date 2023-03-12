import { END_POINTS } from "./end-points";
import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'

//=============== LOGIN =======================
const postLogin = async ({ username, password }) => {
    const response = await axios.post(END_POINTS.AUTH_CONTROLLER.LOGIN, { username, password })
    return response.data
}

export const useLogin = () => {
    return useMutation(postLogin)
}

//================= REGISTER ======================
const postRegister = async ({ username, mail, password, name, surname }) => {
    const response = await axios.post(END_POINTS.AUTH_CONTROLLER.REGISTER, { username, mail, password, name, surname })
    return response.data
}

export const useRegister = () => {
    return useMutation(postRegister)
}

// //============== ME =================
// const getMe = async () => {
//     const response = await axios.get(END_POINTS.AUTH_CONTROLLER.ME)
//     return response.data
// }

// export const useGetMe = () => {
//     const { data, refetch, isLoading } = useQuery(['getMe'], () => getMe())
//     return { data, refetch, isLoading }
// }