import { useCreateReserve } from '../../../../services/reserveService/reserve.service'
import { useGetEmptyHours } from '../../../../services/restaurantService/restaurant.service'
import ReserveSchema from '../ReserveValidate/ReserveValidate'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'

export const useReservedForm = ({ restaurantInfo }) => {
	const { mutate: CreateBook } = useCreateReserve()
	const userData = JSON.parse(sessionStorage.getItem('token'))

	const navigate = useNavigate()

	const todayDate = new Date()

	const { data, isLoading } = useGetEmptyHours(
		restaurantInfo.id,
		todayDate.toISOString().slice(0, 10)
	)

	const { values, handleChange, handleSubmit, handleBlur, touched, errors } =
		useFormik({
			initialValues: {
				name: '',
				phone: '',
				reserveDate: '',
				reserveTime: '',
				peopleCount: '',
				note: '',
			},

			onSubmit: values => {
				const requestData = {
					userId: userData.user.id,
					restaurantId: restaurantInfo.id,
					phone: values.phone,
					reservationDate: values.reserveDate,
					reservationTime: values.reserveTime,
					personCount: values.peopleCount,
					note: values.note,
				}

				new Promise(() => {
					CreateBook(requestData, {
						onSuccess: () => {
							return (
								toast.success('Rezervasyon Oluşturuldu!'),
								setTimeout(() => {
									navigate('/reservations')
								}, [4800])
							)
						},
						onError: () => {
							toast.error('Rezervasyon Yaparken Hata oluştu!')
						},
					})
				})
			},

			validationSchema: ReserveSchema,
		})

	const peopleLength = Array.from({ length: 25 }, (_, index) => index + 1)

	return {
		peopleLength,
		data,
		isLoading,
		handleChange,
		handleSubmit,
		handleBlur,
		values,
		errors,
		touched,
	}
}
