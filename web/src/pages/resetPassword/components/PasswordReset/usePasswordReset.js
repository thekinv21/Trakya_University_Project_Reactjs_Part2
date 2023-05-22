import { toast } from "react-toastify";
import { useReset } from "../../../../services/resetService/reset.service";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const usePasswordReset = () => {
  const navigate = useNavigate();

  const { mutate: Reset } = useReset();

  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (!email) toast.warn("E-mail boş olmaz!");
    else {
      const requestData = {
        mail: email,
      };

      new Promise(() => {
        Reset(requestData, {
          onSuccess: () => {
            return (
              toast.success("Mailinize şifre gönderildi!"),
              setTimeout(() => {
                navigate("/new_password");
              }, 3600)
            );
          },

          onError: () => {
            toast.error("İşlem Başarisiz!");
          },
        });
      });
    }

    setEmail("");
  };

  return {
    handleClick,
    handleChange,
  };
};
