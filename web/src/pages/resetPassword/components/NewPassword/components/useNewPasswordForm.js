import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { usePostNewPassword } from "../../../../../services/resetService/reset.service";

export const useNewPasswordForm = () => {
  const { mutate: setNewPassword } = usePostNewPassword();

  const navigation = useNavigate();

  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: "",
      password: "",
      pincode: "",
    },

    onSubmit: (values) => {
      const requestData = {
        mail: values.email,
        password: values.password,
        code: values.pincode,
      };

      if (!values.email || !values.password || !values.pincode)
        toast.warn("Zorunlu alanlari Doldurunuz!");
      else {
        new Promise(() => {
          setNewPassword(requestData, {
            onSuccess: () => {
              toast.success("Şifreniz Başariyla Değiştirildi!");

              setTimeout(() => {
                navigation("/signin");
              }, 3600);
            },

            onError: () => {
              toast.error("İşlem Başarisiz!");
            },
          });
        });
      }
    },
  });

  return {
    handleChange,
    handleSubmit,
    values,
  };
};
