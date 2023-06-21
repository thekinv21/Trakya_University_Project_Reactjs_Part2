import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { setAuth } from "../../../../store/auth/auth.slice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import LoginSchema from "./../LoginValidation/LoginValidation";
import { useLogin } from "../../../../services/authService/auth.service";

export const useAuth = () => {
  const [show, setShow] = useState(false);

  const { mutate: login } = useLogin();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },

      onSubmit: async (values, action) => {
        new Promise((resolve, reject) => {
          login(values, {
            onSuccess: (data) => {
              sessionStorage.setItem("token", JSON.stringify(data?.content));
              resolve(undefined);
              dispatch(
                setAuth({
                  myToken: data.accesToken,
                  myDetails: data.user,
                })
              );

              navigate("/main");
            },

            onError: () => {
              reject();
              toast.error("Kullanici Adi veya Şifre Yanliş!", {
                position: "top-center",
                autoClose: 1500,
              });
            },
          });
        });

        action.resetForm();
      },

      validationSchema: LoginSchema,
    });

  return {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
    handleBlur,
    show,
    setShow,
  };
};
