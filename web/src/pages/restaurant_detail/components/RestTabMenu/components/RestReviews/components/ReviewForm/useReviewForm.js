import { usePostReview } from '../../../../../../../../services/restaurantService/restaurant.service'
import { toast } from 'react-toastify'

export const useReviewForm = ({ restaurantId, refetch }) => {
	const userDetail = JSON.parse(sessionStorage.getItem('token'))

	const { mutate: CreateReview } = usePostReview()

	const onFinish = async values => {
		const requestData = {
			userId: userDetail.user.id,
			restaurantId: restaurantId,
			star: values.rating,
			content: values.review,
		}

		new Promise(() => {
			CreateReview(requestData, {
				onSuccess: () => {
					toast.success('Restorana Yorum Yaptiniz!')
					setTimeout(() => {
						refetch()
					}, 3000)
				},

				onError: error => {
					toast.error(error.response.data.error)
				},
			})
		})
	}

	const desc = ['Berbat', 'Kötü', 'Normal', 'İyi', 'Muhteşem']
	return {
		onFinish,
		desc,
	}
}
