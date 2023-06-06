import { useReserveUpdate } from '../../../../services/reserveService/reserve.service'
import { useGetEmptyHours } from '../../../../services/restaurantService/restaurant.service'
import ReserveUpdateSchema from '../ReserveUpdateValidate/ReserveUpdateValidate'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const useReservationUpdate = ({
	restaurantDetail,
	reservationDetail,
}) => {
	const { data: emptyHours, isLoading: emptyLoading } = useGetEmptyHours(
		restaurantDetail.id,
		reservationDetail.reservationDate
	)

	const { mutate: UpdateReserve } = useReserveUpdate()

	const navigate = useNavigate()

	const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
		useFormik({
			initialValues: {
				phone: '',
				status: '',
				reserveDate: '',
				reserveTime: '',
				peopleCount: '',
				note: '',
			},

			onSubmit: values => {
				const requestData = {
					id: reservationDetail.id,
					userId: reservationDetail.user.id,
					restaurantId: restaurantDetail.id,
					phone: values.phone,
					reservationDate: values.reserveDate,
					reservationTime: values.reserveTime,
					personCount: values.peopleCount,
					note: values.note,
					bookingStatus: values.status,
				}

				new Promise(() => {
					UpdateReserve(requestData, {
						onSuccess: () => {
							return (
								toast.success('Rezervasyon Güncellendi!'),
								setTimeout(() => {
									navigate('/reservations')
								}, [5000])
							)
						},
						onError: () => {
							toast.error('İşlem Başarisiz!')
						},
					})
				})
			},

			validationSchema: ReserveUpdateSchema,
		})

	const peopleLength = Array.from({ length: 25 }, (_, index) => index + 1)
	const status = [
		{ key: 'PENDING', value: 'PENDING' },
		{ key: 'CANCELLED', value: 'CANCELLED' },
	]

	return {
		peopleLength,
		status,
		values,
		handleChange,
		handleSubmit,
		handleBlur,
		errors,
		touched,
		emptyHours,
		emptyLoading,
	}
}
