import { useGetReserveById } from '../../services/reserveService/reserve.service'
import { useParams } from 'react-router-dom'

export const useReservationDetail = () => {
	const { reserveId } = useParams()

	const { data, isLoading } = useGetReserveById(reserveId)

	return {
		reserveId,
		data,
		isLoading,
	}
}
