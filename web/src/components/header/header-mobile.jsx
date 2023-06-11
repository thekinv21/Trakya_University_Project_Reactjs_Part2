import RezztoranLogo from '../../assets/svg/REZZ.svg'
import {
	Stack,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	DrawerHeader,
	Link,
	Image,
	DrawerBody,
	HStack,
	Text,
} from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'

const HeaderMobile = ({ isOpen, onClose }) => {
	const loggedInLinks = useSelector(state => state.Link.LoginLinks)
	const logoutLinks = useSelector(state => state.Link.LogoutLinks)
	const token = sessionStorage.getItem('token')
	const links = token ? loggedInLinks : logoutLinks

	return (
		isOpen && (
			<Stack display={{ md: 'none' }}>
				<Drawer
					isOpen={isOpen}
					placement='left'
					onClose={onClose}
					display='flex'
					flexDirection='column'
					alignItems='center'
					justifyItems='center'
				>
					<DrawerOverlay />
					<DrawerContent
						bg='rgb(0,0,0,0.7)'
						w='100%'
						h='100%'
						alignItems='center'
					>
						<DrawerCloseButton color='#fff' />
						<DrawerHeader cursor='pointer'>
							<Link href='/landing'>
								<Image src={RezztoranLogo} />
							</Link>
						</DrawerHeader>
						<DrawerBody>
							<Stack
								w='100%'
								h='100%'
								direction='column'
								alignItems='center'
								justifyContent='center'
								spacing='8'
							>
								{links.map((link, index) => (
									<HStack
										key={index}
										color='#fff'
										_hover={{
											textDecoration: 'none',
											p: '5px 20px',
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
							</Stack>
						</DrawerBody>
					</DrawerContent>
				</Drawer>
			</Stack>
		)
	)
}

export default HeaderMobile
