import { useState } from "react";
import { useHistory } from "react-router";
import { helpHttp } from "../../helpers/helpHttp";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useState(null);

	let history = useHistory();
	
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
		setAuth(false)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if (Object.keys(errors).length === 0) {
      //alert("Enviando formulario...");
      setLoading(true);
      helpHttp()
        .post("http://127.0.0.1:8000/accounts/api/login/", {
          body: form,
          headers: {
            "Content-Type": "application/json",
            Accept: "appliction/json",
          },
        })
        .then((res) => {
					console.log(res);
					if (res.err) {
						setAuth(true)
						/* setTimeout(() => {
							setResponse(false);	
						}, 5000); */
					} else {
						history.push('/')
					}
					setForm(initialForm);
          setLoading(false);
        });
    } else {
      return;
    }
  };

  return {
    form,
    errors,
    loading,
    auth,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
