import RezztoranLogo from '../../assets/svg/REZZ.svg'
import { resetAuth } from '../../store/auth/auth.slice'
import HeaderContainer from './header-container'
import HeaderHamburger from './header-hamburger'
import HeaderLink from './header-links'
import HeaderMobile from './header-mobile'
import { Stack, useDisclosure, Image, Flex, Button } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Header = () => {
	const isLogged = sessionStorage.getItem('token')

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const [active, setActive] = useState(true)

	const { isOpen, onOpen, onClose } = useDisclosure()

	const doLogout = e => {
		e.preventDefault()

		sessionStorage.removeItem('token')
		dispatch(resetAuth())
		navigate('/signin')
	}

	const doLogin = e => {
		e.preventDefault()
		navigate('/signin')
	}

	const changeBackground = () => {
		if (window.scrollY >= 80) {
			setActive(false)
		} else {
			setActive(true)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', changeBackground)
		return () => {
			window.removeEventListener('scroll', changeBackground)
		}
	}, [])

	return (
		<Stack>
			<HeaderContainer active={active}>
				<HeaderHamburger isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
				<Flex
					w='100%'
					alignItems='center'
					justifyContent={{ base: 'flex-end', md: 'space-between' }}
				>
					<Image
						w={{ base: '130px', md: '200px' }}
						src={RezztoranLogo}
						cursor='pointer'
						display={{ base: 'none', md: 'block' }}
					/>
					<HeaderLink />
					{isLogged ? (
						<Button
							size='sm'
							colorScheme='red'
							fontWeight={100}
							w={120}
							onClick={doLogout}
						>
							Çıkış
						</Button>
					) : (
						<Button
							size='sm'
							colorScheme='green'
							fontWeight={100}
							w={120}
							onClick={doLogin}
						>
							Giriş
						</Button>
					)}
				</Flex>
			</HeaderContainer>
			<HeaderMobile isOpen={isOpen} onClose={onClose} />
		</Stack>
	)
}

export default Header
