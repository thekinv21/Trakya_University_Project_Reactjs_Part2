import { useGetFilteredRest } from './../../services/filteredService/filter.service'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const useDiscover = ({ searchUrl }) => {
	const location = useLocation()
	const navigate = useNavigate()

	const [params, setParams] = useState({
		city: '',
		restaurantName: '',
		categories: '',
		sortDirection: 'DESC',
		sortField: 'averageReviewStar',
		pageSize: 5,
		currentPage: 0,
	})

	const handleSearch = () => {
		const searchParams = new URLSearchParams()
		const { city, restaurantName, categories, sortDirection, sortField } =
			params
		searchParams.set('city', city)
		searchParams.set('restaurantName', restaurantName)
		if (Array.isArray(categories)) {
			searchParams.set('categories', categories.join(','))
		} else {
			searchParams.set('categories', categories)
		}
		searchParams.set('sortDirection', sortDirection)
		searchParams.set('sortField', sortField)

		navigate(`?${searchParams.toString()}`)
	}

	useEffect(() => {
		const searchParams = new URLSearchParams(location.search)
		setParams(prevState => ({
			...prevState,
			city: searchParams.get('city') || '',
			categories: searchParams.get('categories')
				? searchParams.get('categories').split(',')
				: [],
			restaurantName: searchParams.get('restaurantName') || '',
			sortDirection: searchParams.get('sortDirection') || 'DESC',
			sortField: searchParams.get('sortField') || 'averageReviewStar',
			currentPage: Number(searchParams.get('page')) + 1 || 1,
		}))
	}, [location.search])

	const searchParams = new URLSearchParams(location.search)
	searchParams.set('size', params.pageSize.toString())
	const { data, isLoading, isError, error } = useGetFilteredRest(
		searchParams.toString()
	)
	const handlePageChange = page => {
		setParams(prevState => ({
			...prevState,
			currentPage: page,
		}))
		navigateWithPage(page - 1)
	}

	const handlePageSizeChange = (current, size) => {
		setParams(prevState => ({
			...prevState,
			pageSize: size,
			currentPage: 1,
		}))

		navigateWithPageSize(params.currentPage - 1, params.pageSize)
	}

	const navigateWithPage = page => {
		const urlParams = new URLSearchParams(location.search)
		urlParams.set('page', page.toString())
		urlParams.set('size', params.pageSize.toString())
		navigate(`?${urlParams.toString()}`)
	}

	const navigateWithPageSize = (page, size) => {
		const urlParams = new URLSearchParams(location.search)
		urlParams.set('page', page.toString())
		urlParams.set('size', size.toString())
		navigate(`?${urlParams.toString()}`)
	}
	const setParamField = (fieldName, value) => {
		setParams(prevState => ({
			...prevState,
			[fieldName]: value,
		}))
	}

	return {
		params,
		isLoading,
		isError,
		error,
		setParamField,
		handlePageChange,
		handlePageSizeChange,
		handleSearch,
		data,
	}
}
