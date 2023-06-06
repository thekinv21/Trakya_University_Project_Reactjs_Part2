import UserSvg from './../../../../../src/assets/svg/user.svg'
import { Card, Stack, Image, Text, CardBody, Link } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'

const UserCard = ({ user }) => {
	const profileLinks = useSelector(state => state.Link.profileLinks)

	return (
		<Card
			minW='280px'
			maxW='300px'
			h='480px'
			display={{ base: 'none', md: 'block' }}
			bg='whiteAlpha.500'
		>
			<Stack h='100%' justifyContent='center' alignItems='center'>
				<Image pt={5} src={UserSvg} draggable={false} />
				<Text p={5} fontSize={14}>
					Hoşgeldin: {user ? user.toUpperCase() : 'User'}
				</Text>
				<CardBody
					p={5}
					mt={10}
					w='full'
					justifyContent='center'
					alignItems='center'
				>
					{profileLinks.map((link, index) => (
						<Link
							key={index}
							color='#000'
							href={link.href}
							borderTop='0.5px solid #c1c1c1'
							display='flex'
							alignItems='center'
							p='12px 4px'
							fontSize='14px'
							_hover={{
								borderLeft: '8px solid rgb(248, 179, 51)',
								color: 'orange',
							}}
						>
							<Text pr={3}>{link.icon}</Text>
							{link.name}
						</Link>
					))}
				</CardBody>
			</Stack>
		</Card>
	)
}

export default UserCard
