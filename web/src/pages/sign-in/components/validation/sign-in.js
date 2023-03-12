import * as yup from "yup";

const signInSchema = yup.object().shape({
  username: yup.string().required("Username boş birakilamaz"),
  password: yup.string().required("Parola boş birakilamaz"),
});

export default signInSchema;
