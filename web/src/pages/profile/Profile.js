import Container from '../../components/container/Container'
import UserCard from './components/user-card/UserCard'
import UserEdit from './components/user-edit-card/UserEdit'
import { Box } from '@chakra-ui/react'
import { ToastContainer } from 'react-toastify'

const Profile = () => {
	return (
		<Container>
			<Box
				className='container d-flex flex-row justify-content-center pt-5 '
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
