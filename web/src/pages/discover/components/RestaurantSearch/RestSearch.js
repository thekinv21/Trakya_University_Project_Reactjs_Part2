import SelectSortBy from './../../../../components/shared/selects/SelectSort'
import RestaurantItems from './../RestaurantItems/RestaurantItems'
import { useRestSearch } from './useRestSearch'
import { Box, Heading, Card, Button } from '@chakra-ui/react'
import { Input } from 'antd'

const RestSearch = ({
	cityRef,
	restaurantNameRef,
	initialValues,
	handleClick,
	page,
	setCurrentPage,
	setSelectedSortOption,
	rest,
}) => {
	const { values, handleChange, handleSubmit, sortOptions } = useRestSearch({
		initialValues,
		handleClick,
	})

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

				{/*=====================SEARCH RESTAURANTS===================*/}

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
							ref={cityRef}
							name='city'
							value={values.city}
							onChange={handleChange}
							placeholder='Şehire Göre'
							autoComplete='off'
						/>
					</Box>

					{/*========================NAME GÖRE======================*/}

					<Box w='100%'>
						<Input
							name='restaurantName'
							ref={restaurantNameRef}
							value={values.restaurantName}
							onChange={handleChange}
							placeholder='Restoran İsmi'
							autoComplete='off'
						/>
					</Box>

					{/*========================SIRALA======================*/}

					<Box w='100%'>
						<SelectSortBy
							name={'sortBy'}
							options={sortOptions}
							placeholder='Siralamayi Seçiniz'
							getValue={selectedValue => {
								setSelectedSortOption(selectedValue)
								values.sortField = selectedValue
							}}
						/>
					</Box>

					{/*=====================ARAMA BUTONU===================*/}

					<Button
						type='submit'
						w='100%'
						colorScheme='messenger'
						color='#fff'
						fontWeight='regular'
						fontSize='small'
						size='sm'
						onClick={handleSubmit}
					>
						Filtrele
					</Button>
				</Box>
			</Card>

			{/*=====================RESTAURANTS LİST==================*/}

			<RestaurantItems
				currentPage={page}
				setCurrentPage={setCurrentPage}
				rest={rest}
			/>
		</>
	)
}
export default RestSearch
