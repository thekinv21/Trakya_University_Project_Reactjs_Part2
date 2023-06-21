import Title from '../title/title'
import RestItem from './RestaurantItem/RestItem'
import { Box } from '@chakra-ui/react'
import React from 'react'

const Restaurants = () => {
	return (
		<Box className='container-fluid' textAlign='center' w='100%'>
			{/*====================RESTAURANTSLİST TİTLE=================== */}

			<Title title='Popüler Restoranlar' />

			{/*====================RESTAURANTSLİST CONTENT=================*/}

			<Box className='container pt-5' h={{ base: '60vh', md: '55vh' }}>
				{/*====================RESTAURANTSLİST SLİDER===============*/}

				<RestItem />
			</Box>
		</Box>
	)
}

export default Restaurants
