import { useGetCategory } from './../../../../services/categoryService/category.service'

export const useFilter = () => {
	const { data, isLoading } = useGetCategory()

	return {
		data,
		isLoading,
	}
}
