import Title from '../title/title'
import CategoryItem from './CategoryItem/CategoryItem'
import { Box } from '@chakra-ui/react'
import React from 'react'

const Categories = () => {
	return (
		<Box className='container-fluid' textAlign='center' w='100%'>
			{/*===================CATEGORYLİST TİTLE================== */}

			<Title title='Mevcut Yemek Kategorileri' />

			<Box className='container pt-5' h={{ base: '42vh', md: '40vh' }}>
				{/*========================CATEGORY ITEM================*/}

				<CategoryItem />
			</Box>
		</Box>
	)
}

export default Categories
