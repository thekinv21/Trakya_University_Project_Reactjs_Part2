import Map from '../../../../assets/images/MAP.png'
import { useFilter } from './useFilter'
import {
	Checkbox,
	CheckboxGroup,
	Heading,
	Image,
	Link,
	Stack,
	Text,
} from '@chakra-ui/react'

const FilterCard = () => {
	const { data, isLoading } = useFilter()

	if (isLoading) return <h1>Loading....</h1>

	return (
		<>
			<Stack
				direction='column'
				spacing={5}
				display={{ base: 'none', md: ' block' }}
				maxW={300}
				boxShadow='rgb(51 51 51 / 10%) 0px 1px 4px'
			>
				{/*==================MAP PNG================ */}

				<Link href='https://www.google.com/maps'>
					<Image
						src={Map}
						borderRadius={10}
						cursor='pointer'
						objectFit='cover'
					/>
				</Link>

				{/*=================FİLTER CARD================== */}
				<Stack
					bg='whiteAlpha.500'
					boxShadow='rgb(51 51 51 / 10%) 0px 1px 4px'
					borderRadius={10}
					p={5}
				>
					{/*=================FİLTER CARD SUBTİTLE============*/}

					<Heading fontSize={16} fontWeight={500}>
						ARAMA KRİTERLERİ
					</Heading>

					<Text
						w={['100%', '100%', '100%', '50%']}
						fontSize={10}
						bg='rgb(248, 179, 51)'
						color='#fff'
						size='xs'
						textAlign='center'
						borderRadius={5}
					>
						Online Rezervasyonalar
					</Text>

					<hr />

					{/*==================FİLTER CARD category================ */}

					<Heading fontSize={14} fontWeight={400} py={3}>
						MUTFAKTA MEVCUT OLANLAR
					</Heading>

					<CheckboxGroup colorScheme='messenger' fontSize='small'>
						<Stack
							mt={5}
							spacing={[1, 4]}
							direction='column'
							borderColor='rgba(0,0,0,0.3)'
						>
							{data.map(category => (
								<Checkbox
									value={category.categoryName}
									key={category.id}
									borderColor='rgba(0,0,0,0.3)'
									color='black'
									isDisabled
								>
									{category.categoryName}
								</Checkbox>
							))}
						</Stack>
					</CheckboxGroup>

					<hr />

					<Stack py={3} direction='column' spacing={3}></Stack>
				</Stack>
			</Stack>
		</>
	)
}

export default FilterCard
