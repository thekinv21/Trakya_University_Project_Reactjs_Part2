import Container from '../../components/container/Container'
import UserCard from '../profile/components/user-card/UserCard'
import ReservationFilter from './components/ReservationFilter/ReservationFilter'
import { useResevation } from './useReservation'
import { Box } from '@chakra-ui/react'
import { ToastContainer } from 'react-toastify'

const Reservations = () => {
	const { data, isLoading } = useResevation()
	if (isLoading) return data

	return (
		<Container>
			<Box className='container-sm p-5' display='flex' gap={5}>
				{/*==================RESERVATİON PAGE USERCARD============*/}
				<UserCard />

				{/*==================RESERVATİONS CONTAİNER============== */}
				<Box
					className='container-sm'
					display='flex'
					flexDirection='column'
					gap={5}
				>
					{/*==================RESERVATİON FİLTER CARD=============*/}

					<ReservationFilter reserveData={data} />
					<ToastContainer />
				</Box>
			</Box>
		</Container>
	)
}

export default Reservations
