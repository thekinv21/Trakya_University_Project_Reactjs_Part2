import * as yup from 'yup'

const ReserveSchema = yup.object().shape({
	name: yup.string().required('Telefon alani boş olamaz!'),

	phone: yup
		.string()
		.matches(
			/^(\+?9?0?\d{10})$/,
			'Geçerli bir Türkiye telefon numarasi giriniz'
		)
		.required('Telefon alani boş olamaz!'),

	reserveDate: yup.string().required('Tarih alani boş olamaz!'),
	reserveTime: yup.string().required('Saat alani boş olamaz!'),
	peopleCount: yup.string().required('Kişi sayisi alani boş olamaz!'),
})

export default ReserveSchema
