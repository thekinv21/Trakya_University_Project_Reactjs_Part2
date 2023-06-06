import { usePutUser } from '../../../../services/userService/user.service'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const useEditForm = () => {
	const userInfo = JSON.parse(sessionStorage.getItem('token'))
	const userDetail = userInfo.user

	const { mutate: updateUser } = usePutUser()
	const navigate = useNavigate()

	const { values, handleSubmit, handleChange, handleBlur } = useFormik({
		initialValues: {
			user_photo: userDetail.profileImage,
			firstname: userDetail.name,
			lastname: userDetail.surname,
			email: userDetail.mail,
			username: userDetail.username,
		},
		onSubmit: values => {
			const requestData = {
				id: userDetail.id,
				username: values.username,
				name: values.firstname,
				surname: values.lastname,
				mail: values.email,
			}

			new Promise(() => {
				updateUser(requestData, {
					onSuccess: () => {
						return (
							toast.success('Bilgileriniz Güncellendi!'),
							setTimeout(() => {
								sessionStorage.removeItem('token')
								navigate('/')
							}, [4500])
						)
					},

					onError: () => {
						toast.error('Hata oluştu!')
					},
				})
			})
		},
	})

	return {
		values,
		handleBlur,
		handleChange,
		handleSubmit,
		userDetail,
	}
}
