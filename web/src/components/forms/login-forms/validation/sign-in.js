import * as yup from 'yup'


const signInSchema = yup.object().shape({

    username : yup.string().required('Username boş birakilamaz'),
    password : yup.string().min(6).required('En az 6 karakter içermeli')

})

export default signInSchema