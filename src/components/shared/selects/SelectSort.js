import { Select } from 'antd'

const SelectSortBy = ({
	options,
	getValue,
	name,
	placeholder,
	status,
	onBlur,
}) => {
	return (
		<Select
			name={name}
			style={{ width: '100%' }}
			onChange={getValue}
			placeholder={placeholder}
			status={status}
			onBlur={onBlur}
		>
			{options.map(option => {
				return (
					<Select.Option
						children={option.value}
						value={option.key}
						key={option.key}
					/>
				)
			})}
		</Select>
	)
}

export default SelectSortBy
