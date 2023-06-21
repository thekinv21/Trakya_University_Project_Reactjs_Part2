import EditForm from './EditForm'
import { Card } from '@chakra-ui/react'

const UserEdit = () => {
	return (
		<Card
			minW={['100%', '495px', '440px', '530px']}
			maxW={['340px', '340px', '340px', '530px']}
			p={5}
			display='flex'
			flexDirection='column'
			justifyContent='center'
			alignItems='center'
			bg='whiteAlpha.500'
		>
			<EditForm />
		</Card>
	)
}

export default UserEdit
