import { HStack, Text, Link } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'

const HeaderLink = () => {
	const loggedInLinks = useSelector(state => state.Link.LoginLinks)
	const logoutLinks = useSelector(state => state.Link.LogoutLinks)
	const token = sessionStorage.getItem('token')
	const links = token ? loggedInLinks : logoutLinks

	return (
		<HStack
			as='nav'
			display={['none', 'none', 'none', 'flex']}
			gap={10}
			fontSize={15}
		>
			{links.map((link, index) => (
				<HStack
					key={index}
					color='#fff'
					_hover={{
						textDecoration: 'none',
						p: '5px 40px',
						borderRadius: '5px',
						transition: 'all 0.5s',
						bgGradient: 'linear(to-r, red.500, yellow.500)',
					}}
				>
					<Text>{link.icon}</Text>
					<Link
						href={link.href}
						_hover={{
							textDecoration: 'none',
							color: '#fff',
						}}
					>
						{link.name}
					</Link>
				</HStack>
			))}
		</HStack>
	)
}

export default HeaderLink
