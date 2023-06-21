export const useRestSearch = () => {
	const sortOptions = [
		{ key: 'restaurantName', value: 'Restoran Adina Göre' },
		{ key: 'reviewsCount', value: 'Popülerliğine Göre' },
		{ key: 'averageReviewStar', value: 'Yildiz Sayisina Göre' },
	]

	return {
		sortOptions,
	}
}
