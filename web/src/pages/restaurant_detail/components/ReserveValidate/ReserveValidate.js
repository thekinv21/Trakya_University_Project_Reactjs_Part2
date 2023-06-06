import * as yup from 'yup'

const ReserveSchema = yup.object().shape({
	name: yup.string().required('Zorunlu alan boş birakilamaz'),

	phone: yup
		.string()
		.matches(
			/^(\+?9?0?\d{10})$/,
			'Geçerli bir Türkiye telefon numarasi giriniz'
		)
		.required('Zorunlu alan boş birakilamaz'),

	reserveDate: yup.string().required('Zorunlu alan boş birakilamaz'),
	reserveTime: yup.string().required('Zorunlu alan boş birakilamaz'),
	peopleCount: yup.string().required('Zorunlu alan boş birakilamaz'),
})

export default ReserveSchema
