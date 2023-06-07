import Logo from '../../assets/brand/searchLogo.svg'
import RezztoranLogo from '../../assets/svg/REZZ.svg'
import NavbarContainer from './components/navbar-container'
import NavbarDropdown from './components/navbar-dropdown'
import NavbarHamburger from './components/navbar-hamburger'
import NavbarMobile from './components/navbar-mobile'
import { useDisclosure, Image, Link } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
	const userInfo = JSON.parse(sessionStorage.getItem('token'))
	const username = userInfo.user.username

	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<React.Fragment>
			{/*-------------------Navbar Container------------------ */}
			<NavbarContainer>
				{/*-------------------Navbar hamburger menu------------------ */}
				<NavbarHamburger isOpen={isOpen} onClose={onClose} onOpen={onOpen} />

				{/*-------------------Navbar Logo------------------ */}

				<Link href='/main'>
					<Image
						cursor='pointer'
						w={['60px', '60px', '80px', '90px']}
						src={Logo}
						draggable='false'
						display={['none', 'none', 'none', 'block']}
					/>
				</Link>

				{/*-------------------Navbar Rezztoran Logo------------------ */}

				<Image
					h='60px'
					w={['130px', '160px', '160px', '220px']}
					src={RezztoranLogo}
					draggable='false'
				/>

				{/*-------------------Navbar UserLogo and Dropdown------------------ */}

				<NavbarDropdown username={username} />

				{/*-------------------Navbar Mobile Responsive------------------ */}

				<NavbarMobile openMobile={isOpen} closeMobile={onClose} />
			</NavbarContainer>
		</React.Fragment>
	)
}

export default Navbar
