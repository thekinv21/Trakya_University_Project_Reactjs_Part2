import { useFormik } from 'formik'

export const useRestSearch = ({ handleClick, initialValues }) => {
	const { values, handleChange, handleSubmit } = useFormik({
		initialValues: initialValues,

		onSubmit: () => {
			handleClick()
		},
	})

	const sortOptions = [
		{ key: 'restaurantName', value: 'Restoran Adina Göre' },
		{ key: 'reviewsCount', value: 'Popülerliğine Göre' },
		{ key: 'averageReviewStar', value: 'Yildiz Sayisina Göre' },
	]

	return {
		values,
		handleChange,
		handleSubmit,
		sortOptions,
	}
}
