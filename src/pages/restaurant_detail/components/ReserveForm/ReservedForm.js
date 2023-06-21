import DatePickerComponent from '../../../../components/shared/datepicker/DatePickerComponent'
import SelectClock from '../../../../components/shared/selects/SelectClock'
import SelectComponent from '../../../../components/shared/selects/SelectComponent'
import styles from './ReservedForm.module.css'
import { useReservedForm } from './useReservedForm'
import { Form, Input, Button } from 'antd'

const ReservedForm = ({ restaurantInfo }) => {
	const { TextArea } = Input

	const {
		peopleLength,
		data,
		isLoading,
		handleChange,
		handleSubmit,
		handleBlur,
		values,
		errors,
		touched,
	} = useReservedForm({ restaurantInfo })

	return (
		<Form layout='vertical' className={styles.form} onFinish={handleSubmit}>
			<Form.Item>
				<h1 className={styles.title}>Rezervasyon Formu</h1>
			</Form.Item>
			{/*=======================NAME=====================*/}
			<Form.Item>
				<Input
					name='name'
					placeholder={errors.name ? errors.name : 'Adiniz'}
					value={values.name}
					onChange={handleChange}
					autoComplete='off'
					status={errors.name && touched.name ? 'error' : ''}
					onBlur={handleBlur}
				/>
			</Form.Item>

			{/*=======================PHONE=====================*/}
			<Form.Item>
				<Input
					type='tel'
					name='phone'
					placeholder={errors.phone ? errors.phone : '+905'}
					value={values.phone}
					onChange={handleChange}
					autoComplete='off'
					status={errors.phone && touched.phone ? 'error' : ''}
				/>
			</Form.Item>
			{/*=======================TARİH======================*/}
			<Form.Item>
				<DatePickerComponent
					name={'reserveDate'}
					placeholder={
						errors.reserveDate && touched.reserveDate
							? errors.reserveDate
							: 'Tarih Seçiniz'
					}
					busyDates={restaurantInfo.busyDates}
					onChange={value => {
						values.reserveDate = value ? value.format('YYYY-MM-DD') : null
					}}
					status={errors.reserveDate && touched.reserveDate ? 'error' : ''}
					onBlur={handleBlur}
				/>
			</Form.Item>

			{/*=======================SAAT=======================*/}
			<Form.Item>
				<SelectClock
					name='reserveTime'
					options={isLoading ? [] : data}
					placeholder={
						errors.reserveTime && touched.reserveTime
							? errors.reserveTime
							: 'Saat Seçiniz'
					}
					getValue={value => {
						values.reserveTime = value
					}}
					status={errors.reserveTime && touched.reserveTime ? 'error' : ''}
					onBlur={handleBlur}
				/>
			</Form.Item>

			{/*===================KİŞİ SAYİSİ====================*/}
			<Form.Item>
				<SelectComponent
					name='peopleCount'
					options={peopleLength}
					getValue={value => {
						values.peopleCount = value
					}}
					status={errors.peopleCount && touched.peopleCount ? 'error' : ''}
					placeholder={
						errors.peopleCount && touched.peopleCount
							? errors.peopleCount
							: 'Kişi Saiyisi'
					}
					onBlur={handleBlur}
				/>
			</Form.Item>
			{/*===================NOTE====================*/}
			<Form.Item>
				<TextArea
					name='note'
					placeholder='Herhangi bir not yaziniz!'
					autoSize={{ minRows: 2, maxRows: 6 }}
					value={values.note}
					onChange={handleChange}
				/>
			</Form.Item>

			{/*===================RESERVE BUTTON====================*/}
			<Form.Item>
				<Button
					htmlType='submit'
					type='primary'
					className={styles.reserveButton}
				>
					Rezervasyon Yap!
				</Button>
			</Form.Item>
		</Form>
	)
}

export default ReservedForm
