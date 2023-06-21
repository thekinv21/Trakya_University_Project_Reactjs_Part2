import * as yup from "yup";

const RegisterValidation = yup.object().shape({
  name: yup.string().required("Ad Boş Olamaz"),
  surname: yup.string().required("Soyad Boş Olamaz"),
  username: yup.string().required("Username Boş Olamaz"),
  mail: yup.string().email().required("Geçerli mail giriniz"),
  password: yup.string().required("Parola Boş Birakilamaz"),
});

export default RegisterValidation;
