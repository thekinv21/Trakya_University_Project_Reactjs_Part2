import SelectSortBy from '../../../../components/shared/selects/SelectSort'
import DatePickerComponent from './../../../../components/shared/datepicker/DatePickerComponent'
import SelectClock from './../../../../components/shared/selects/SelectClock'
import SelectComponent from './../../../../components/shared/selects/SelectComponent'
import styles from './ReservetaionUpdate.module.css'
import { useReservationUpdate } from './useReservationUpdate'
import { Form, Input, Button } from 'antd'

const ReservationUpdate = ({ restaurantDetail, reservationDetail }) => {
	const { TextArea } = Input

	const {
		peopleLength,
		status,
		values,
		handleChange,
		handleSubmit,
		handleBlur,
		errors,
		touched,
		emptyHours,
		emptyLoading,
	} = useReservationUpdate({
		restaurantDetail,
		reservationDetail,
	})

	return (
		<>
			<Form layout='vertical' className={styles.form} onFinish={handleSubmit}>
				<Form.Item>
					<h3 className={styles.title}>Rezervasyonu Güncelle</h3>
				</Form.Item>

				{/*=======================UPDATE PHONE=====================*/}
				<Form.Item>
					<Input
						type='tel'
						name='phone'
						placeholder={errors.phone ? errors.phone : '+905'}
						status={errors.phone && touched.phone ? 'error' : ''}
						autoComplete='off'
						value={values.phone}
						onChange={handleChange}
					/>
				</Form.Item>

				{/*===================UPDATE RESERVE STATUS====================*/}
				<Form.Item>
					<SelectSortBy
						name='status'
						options={status}
						getValue={value => {
							values.status = value
						}}
						status={errors.status && touched.status ? 'error' : ''}
						placeholder={
							errors.status && touched.status ? errors.status : 'Rezerve Durumu'
						}
					/>
				</Form.Item>
				{/*=======================UPDATE TARİH======================*/}
				<Form.Item>
					<DatePickerComponent
						name={'reserveDate'}
						busyDates={['2023-05-21']}
						status={errors.reserveDate && touched.reserveDate ? 'error' : ''}
						placeholder={
							errors.reserveDate && touched.reserveDate
								? errors.reserveDate
								: 'Tarih Seçiniz'
						}
						onChange={value => {
							values.reserveDate = value ? value.format('YYYY-MM-DD') : null
						}}
						onBlur={handleBlur}
					/>
				</Form.Item>

				{/*=======================UPDATE SAAT=======================*/}
				<Form.Item>
					<SelectClock
						name='reserveTime'
						options={emptyLoading ? [] : emptyHours}
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

				{/*===================UPDATE KİŞİ SAYİSİ====================*/}
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
				{/*===================UPDATE NOTE====================*/}
				<Form.Item>
					<TextArea
						name='note'
						placeholder='Güncellenecek yorumunuz!'
						autoSize={{ minRows: 2, maxRows: 6 }}
						value={values.note}
						onChange={handleChange}
					/>
				</Form.Item>

				{/*===================RESERVE UPDATE BUTTON====================*/}
				<Form.Item>
					<Button
						type='primary'
						htmlType='submit'
						className={styles.reserveButton}
					>
						Rezervasyonu Güncelle
					</Button>
				</Form.Item>
			</Form>
		</>
	)
}

export default ReservationUpdate
