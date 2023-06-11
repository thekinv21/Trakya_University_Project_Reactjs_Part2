import Container from '../../components/container/Container'
import FilterCard from './components/RestaurantFilter/FilterCard'
import RestSearch from './components/RestaurantSearch/RestSearch'
import { Box } from '@chakra-ui/react'

const Discover = () => {
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
					<RestSearch />
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
