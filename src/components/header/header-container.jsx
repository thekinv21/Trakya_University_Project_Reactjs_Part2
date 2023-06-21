import { Flex } from '@chakra-ui/react'
import React from 'react'

const HeaderContainer = ({ children, active }) => {
	return (
		<Flex
			alignItems='center'
			justifyContent='space-between'
			h='10vh'
			p='35px'
			position='fixed'
			w='100%'
			top='0px'
			left='0px'
			bg={active ? 'transparent' : 'rgb(35,40,51)'}
			boxShadow='0 -1px 6px -1px rgba(0, 0, 0, 0.1)'
			zIndex='999'
		>
			{children}
		</Flex>
	)
}

export default HeaderContainer
