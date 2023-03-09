import * as yup from "yup";

const signUpSchema = yup.object().shape({
  username: yup.string().required("Username Boş Olamaz"),
  email: yup.string().email().required("Geçerli e-mail giriniz"),
  phone_number: yup
    .number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required("Geçerli telefon numarasi giriniz"),
  password: yup.string().min(6).required("En az 6 karakter içermeli"),
});

export default signUpSchema;
