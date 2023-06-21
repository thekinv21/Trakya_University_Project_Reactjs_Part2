import { useState } from 'react'

export const useReserveFilter = ({ reserveData }) => {
	const filterBy = [
		{ key: '1', value: 'İptal Edilen Rezervasyonlar' },
		{ key: '2', value: 'Mevcut Rezervasyonlar' },
		{ key: '3', value: 'Bütün Rezervasyonlar' },
	]

	const availables = reserveData.filter(
		reserve => reserve.bookingStatus === 'PENDING'
	)

	const cancelled = reserveData.filter(
		reserve => reserve.bookingStatus === 'CANCELLED'
	)

	const [filteredData, setFilteredData] = useState(availables)
	const [filter, setFilter] = useState('')

	const handleFilter = e => {
		e.preventDefault()

		if (filter === '1') setFilteredData(cancelled)
		else if (filter === '2') setFilteredData(availables)
		else if (filter === '3') setFilteredData(reserveData)
	}

	return {
		filterBy,
		setFilter,
		handleFilter,
		filteredData,
	}
}
