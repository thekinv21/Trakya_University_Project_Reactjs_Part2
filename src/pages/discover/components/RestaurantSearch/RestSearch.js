import RestaurantItem from '../RestaurantItem/RestaurantItem'
import { useDiscover } from './../../useDiscover'
import { Box, Card, Heading } from '@chakra-ui/react'
import { Button, Input, Select } from 'antd'

const RestSearch = () => {
	const {
		params,
		isLoading,
		isError,
		error,
		setParamField,
		handlePageChange,
		handlePageSizeChange,
		handleSearch,
		data,
	} = useDiscover({
		searchUrl: '',
	})
	const {
		city,
		restaurantName,
		sortDirection,
		sortField,
		pageSize,
		currentPage,
		// categories,
	} = params

	if (isLoading) {
		return <div>Loading...</div>
	}

	if (isError) {
		return <div>Error: {error.message}</div>
	}
	return (
		<>
			<Card
				p={5}
				overflow='hidden'
				bg='whiteAlpha.500'
				boxShadow='rgb(51 51 51 / 10%) 0px 1px 4px'
				mb={5}
			>
				{/*=====================SEARCH CARD TITLE==================== */}

				<Box mb={5} w='100%'>
					<Heading
						fontWeight='semibold'
						fontSize={['14px', '16px', '18px', '20px']}
					>
						EDİRNEDEKİ RESTORANLAR
					</Heading>
				</Box>

				{/*=====================SEARCH CARD SUBTITLE==================*/}

				<Heading fontWeight='semibold' fontSize='small' mb={5} color='orange'>
					Masa Bul :
				</Heading>

				<Box
					as='form'
					display='flex'
					flexDirection={{ base: 'column', md: 'row' }}
					alignItems='center'
					justifyContent='center'
					gap={5}
				>
					{/*======================ŞEHİRE GÖRE==================*/}

					<Box w='100%'>
						<Input
							type='text'
							value={city}
							placeholder='Şehir'
							onChange={e => setParamField('city', e.target.value)}
						/>
					</Box>

					{/*======================NAME GÖRE==================*/}

					<Box w='100%'>
						<Input
							type='text'
							placeholder='Restoran'
							value={restaurantName}
							onChange={e => setParamField('restaurantName', e.target.value)}
						/>
					</Box>

					{/*========================AZALAN ARTANA======================*/}

					<Box w='100%'>
						<Select
							style={{ width: '100%' }}
							value={sortDirection}
							onChange={value => setParamField('sortDirection', value)}
						>
							<Select.Option value='DESC'>Azalan</Select.Option>
							<Select.Option value='ASC'>Artan</Select.Option>
						</Select>
					</Box>

					{/*========================SIRALA======================*/}

					<Box w='100%'>
						<Select
							style={{ width: '100%' }}
							value={sortField}
							onChange={value => setParamField('sortField', value)}
						>
							<Select.Option value='restaurantName'>
								Restoran İsmine Göre
							</Select.Option>
							<Select.Option value='reviewsCount'>
								Yorum Sayisina Göre
							</Select.Option>
							<Select.Option value='averageReviewStar'>
								Yildiz Sayisina Göre
							</Select.Option>
						</Select>
					</Box>

					{/*=====================ARAMA BUTONU===================*/}

					<Button
						style={{ width: '100%' }}
						type='primary'
						onClick={handleSearch}
					>
						Filtrele
					</Button>
				</Box>

				<RestaurantItem
					data={data}
					currentPage={currentPage}
					pageSize={pageSize}
					handlePageChange={handlePageChange}
					handlePageSizeChange={handlePageSizeChange}
				/>
			</Card>
		</>
	)
}
export default RestSearch
