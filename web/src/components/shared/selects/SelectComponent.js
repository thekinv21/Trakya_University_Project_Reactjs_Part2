import { Select } from 'antd'

const SelectComponent = ({
	options,
	placeholder,
	getValue,
	name,
	status,
	onBlur,
}) => {
	return (
		<Select
			name={name}
			style={{ width: '100%', fontSize: '14px' }}
			onChange={getValue}
			placeholder={placeholder}
			status={status}
			onBlur={onBlur}
		>
			{options.map((option, index) => {
				return <Select.Option value={option} key={index} />
			})}
		</Select>
	)
}

export default SelectComponent
