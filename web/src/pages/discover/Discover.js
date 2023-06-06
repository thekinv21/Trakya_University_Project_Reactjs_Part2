import Container from '../../components/container/Container'
import FilterCard from './components/RestaurantFilter/FilterCard'
import RestSearch from './components/RestaurantSearch/RestSearch'
import { useDiscover } from './useDiscover'
import { Box } from '@chakra-ui/react'

const Discover = () => {
	const {
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
	} = useDiscover()

	if (isLoading) return rest

	return (
		<Container>
			<Box
				className='container'
				display={{ base: 'block', md: 'flex' }}
				gap={5}
				overflow='hidden'
				pt={50}
			>
				{/*===============DISCOVER SEARCH AND MAP=============== */}

				<Box
					className='container'
					display='flex'
					flexDirection='column'
					mb={50}
					maxW={880}
				>
					<RestSearch
						cityRef={cityRef}
						restaurantNameRef={restaurantNameRef}
						selectedSortOption={selectedSortOption}
						setSelectedSortOption={setSelectedSortOption}
						initialValues={initialValues}
						handleClick={handleClick}
						page={page}
						rest={rest}
						currentPage={currentPage}
						setCurrentPage={setPage}
						setInitialValues={setInitialValues}
					/>
				</Box>

				{/*=====================DISCOVER FİLTER================== */}

				<Box>
					<FilterCard />
				</Box>
			</Box>
		</Container>
	)
}

export default Discover
