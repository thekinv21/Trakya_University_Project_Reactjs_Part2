import Avatar from '../../../assets/images/user1.png'
import {
	Menu,
	MenuButton,
	Image,
	MenuList,
	MenuCommand,
	Text,
	MenuDivider,
	MenuItem,
	Link,
} from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'

const NavbarDropdown = ({ username }) => {
	const LoggedLinks = useSelector(state => state.Link.LoginLinks)
	return (
		<Menu>
			<MenuButton>
				<Image src={Avatar} cursor='pointer' rounded={100} maxW='45px' />
			</MenuButton>

			<MenuList>
				{/*=================USERNAME================ */}
				<MenuCommand textAlign='center' mt={5}>
					<Text color='#000' fontSize={13}>
						{username ? username.toUpperCase() : 'User'}
					</Text>
					<Text fontSize={12} mt={2}>
						İşlemleri Seçiniz
					</Text>
				</MenuCommand>
				<MenuDivider mt={5} />
				{/*=================DROPDOWN LİST===============*/}
				{LoggedLinks.map((link, index) => (
					<Link key={index} href={link.href} fontSize={13}>
						<MenuItem p='10px 20px' icon={link.icon} _hover={{ color: '#000' }}>
							{link.name}
						</MenuItem>
					</Link>
				))}
			</MenuList>
		</Menu>
	)
}
export default NavbarDropdown
