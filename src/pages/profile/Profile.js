import Container from '../../components/container/Container'
import UserCard from './components/user-card/UserCard'
import UserEdit from './components/user-edit-card/UserEdit'
import { Box } from '@chakra-ui/react'
import { ToastContainer } from 'react-toastify'

const Profile = () => {
	return (
		<Container>
			<Box
				display='flex'
				alignContent='center'
				justifyContent='center'
				flexDirection='row'
				pt={10}
				gap={10}
			>
				<UserCard />

				<UserEdit />
			</Box>

			<ToastContainer />
		</Container>
	)
}

export default Profile
