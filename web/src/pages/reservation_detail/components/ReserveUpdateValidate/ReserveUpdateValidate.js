import * as yup from 'yup'

const ReserveUpdateSchema = yup.object().shape({
	phone: yup
		.string()
		.matches(
			/^(\+?9?0?\d{10})$/,
			'Geçerli bir Türkiye telefon numarasi giriniz'
		)
		.required('Telefon boş olamaz!'),

	reserveDate: yup.string().required('Tarih boş olamaz!'),
	reserveTime: yup.string().required('Saat boş olamaz!'),
	peopleCount: yup.string().required('Kişi Sayisi boş olamaz!'),
	status: yup.string().required('Rezerve Durumu boş olamaz!'),
})

export default ReserveUpdateSchema
