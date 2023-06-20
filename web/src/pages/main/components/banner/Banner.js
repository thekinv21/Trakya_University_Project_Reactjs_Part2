import BannerBackground from '../../../../assets/images/banner.jpg'
import { Heading, Stack, Text } from '@chakra-ui/react'

const Banner = () => {
	return (
		<>
			<Stack maxW='100vw' h='80vh'>
				<Stack
					w='100%'
					h='100%'
					bgImage={BannerBackground}
					bgPosition='center'
					bgRepeat='no-repeat'
				>
					<Stack w='100%' h='100%' bg='rgba(0,0,0,0.6)'>
						<Stack alignItems='center' justifyContent='center' h='100%'>
							<Heading
								fontFamily='cursive'
								fontSize={['3em', '5em', '6em', '10em']}
								fontWeight='700'
								mb={10}
								color='#ddd'
							>
								Rezztoran
							</Heading>

							<Text
								fontSize={{ base: 20, md: 28 }}
								fontWeight='300'
								color='#fff'
								pb={10}
							>
								Bizimle Kolay
							</Text>
						</Stack>
					</Stack>
				</Stack>
			</Stack>
		</>
	)
}

export default Banner
