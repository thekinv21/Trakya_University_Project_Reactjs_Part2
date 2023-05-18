import { useFormik } from "formik";
import RegisterValidation from "../RegisterValidation/RegisterValidation";
import { useRegister } from "../../../../api/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";

export const useAuthRegister = () => {
  const [show, setShow] = useState(false);

  const { mutate: register } = useRegister();

  const navigate = useNavigate();

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        name: "",
        surname: "",
        mail: "",
        password: "",
        username: "",
      },

      onSubmit: async (values, action) => {
        new Promise(() => {
          register(values, {
            onSuccess: () => {
              navigate("/signin");

              toast.success("Yeni hesap oluşturuldu!", {
                position: "top-center",
                autoClose: 1500,
              });

              action.resetForm();
            },

            onError: () => {},
          });
        });

        action.resetForm();
      },

      validationSchema: RegisterValidation,
    });

  return {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
    show,
    setShow,
  };
};
