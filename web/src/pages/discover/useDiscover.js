import { useGetFilteredRest } from './../../services/filteredService/filter.service'
import { useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export const useDiscover = () => {
	const cityRef = useRef()
	const restaurantNameRef = useRef()

	const [searchParams, setSearchParams] = useSearchParams()

	const [selectedSortOption, setSelectedSortOption] = useState(
		searchParams.get('sortField' || '')
	)
	const page = searchParams.get('page')

	//*===================PAGİNATİON===================

	const [currentPage, setCurrentPage] = useState(page || 0)

	const sortField = searchParams.get('sortField') || ''
	const restaurantName = searchParams.get('restaurantName') || ''
	const city = searchParams.get('city') || ''
	const size = searchParams.get('size') || '4'

	const [initialValues, setInitialValues] = useState({
		restaurantName: restaurantName,
		city: city,
		sortField: sortField,
	})

	const { data: rest, isLoading } = useGetFilteredRest(
		city,
		restaurantName,
		page - 1,
		size,
		sortField
	)

	const handleClick = async () => {
		window.location.href = `/discover?city=${
			cityRef.current.input.value
		}&restaurantName=${restaurantNameRef.current.input.value}&page=${
			page - 1
		}&size=${size}&sortField=${selectedSortOption}`
	}

	const setPage = e => {
		setSearchParams({
			...searchParams,
			page: e,
			city: initialValues.city,
			restaurantName: initialValues.restaurantName,
			sortField: initialValues.sortField,
		})
		setCurrentPage(e)
	}

	return {
		cityRef,
		restaurantNameRef,
		selectedSortOption,
		setSelectedSortOption,
		initialValues,
		handleClick,
		page,
		rest,
		isLoading,
		currentPage,
		setPage,
		setInitialValues,
	}
}
