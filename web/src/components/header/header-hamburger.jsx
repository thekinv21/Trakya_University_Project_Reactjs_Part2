import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import React from 'react'

const HeaderHamburger = ({ isOpen, onClose, onOpen }) => {
	return (
		<IconButton
			size='lg'
			icon={isOpen ? <CloseIcon /> : <HamburgerIcon fontSize={25} />}
			display={{ md: 'none', base: 'block' }}
			onClick={isOpen ? onClose : onOpen}
			color='#ddd'
			bg='transparent'
			fontWeight={700}
			_hover={{ bg: 'gray.700' }}
		/>
	)
}

export default HeaderHamburger
