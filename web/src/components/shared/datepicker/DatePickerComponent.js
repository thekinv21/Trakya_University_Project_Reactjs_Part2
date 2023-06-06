import { DatePicker } from 'antd'
import moment from 'moment'

const DatePickerComponent = ({
	onChange,
	name,
	busyDates,
	status,
	placeholder,
	onBlur,
}) => {
	//*==============DATEPİCKER STYLES================
	const style = {
		width: '100%',
	}

	//*============= ALL DİSABLEDDATES================
	const disabledDates = busyDates.map(date => moment(date))

	function disabledDate(current) {
		// Disable all Sundays and past Dates
		if (current.day() === 0 || current < moment().add(-1, 'day')) {
			return true
		}

		// Disable specific dates
		return disabledDates.some(date => current.isSame(date, 'day'))
	}
	return (
		<DatePicker
			disabledDate={disabledDate}
			format='YYYY-MM-DD'
			name={name}
			style={style}
			onChange={onChange}
			placeholder={placeholder}
			status={status}
			onBlur={onBlur}
		/>
	)
}

export default DatePickerComponent
