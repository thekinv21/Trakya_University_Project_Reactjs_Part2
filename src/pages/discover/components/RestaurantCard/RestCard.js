import { Card, Image, Stack, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const RestCard = ({ res }) => {
	const navigate = useNavigate()

	return (
		<Card
			direction={{ base: 'column', sm: 'row' }}
			overflow='hidden'
			bg='blackAlpha.50'
			mb={5}
			cursor='pointer'
			onClick={() => navigate(`/restaurant/${res.id}`)}
		>
			<Stack maxW='100%' w='300px' h={200}>
				<Image
					objectFit='cover'
					w='100%'
					h='100%'
					src={res.restaurantImage}
					alt={res.restaurantName}
					draggable={false}
				/>
			</Stack>
			<Stack w='100%'>
				<Stack p={5}>
					<Stack spacing={2}>
						<Text fontSize={20}>{res.restaurantName}</Text>
						<Text fontSize={12}>Phone: {res.phone ? res.phone : 'Yok'}</Text>
						<Text fontSize={12}>Location: {res.city}</Text>
						<Text fontSize={12}>reviewsCount: {res.reviewsCount}</Text>
						<Text fontSize={12}>starCount: {res.starCount}</Text>
						<Text fontSize={12}>
							Work: {res.openingTime} &#8741; {res.closingTime}
						</Text>
					</Stack>
				</Stack>
			</Stack>
		</Card>
	)
}

export default RestCard
