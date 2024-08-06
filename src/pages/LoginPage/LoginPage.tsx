import { useState } from "react";
import { useNavigate } from "react-router";

import { StaticRoutes } from "../../routes/routes";
import useLocalStorage, { storageKeys } from "../../hooks/useLocalStorage";
import useForm from "../../hooks/useForm";

import Form from "../../components/Form/Form";

const LoginPage = () => {
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  const { handleForm, formState } = useForm({ email: "", password: "" });
  const { getItem, setItem } = useLocalStorage();
  const navigate = useNavigate();

  const disabled = !formState.email || !formState.password;

  const onSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    const registeredUsers = getItem(storageKeys.users);
    if (
      registeredUsers?.find(
        (user: { email: string; password: string }) =>
          user.email === formState.email && user.password === formState.password
      )
    ) {
      setItem(storageKeys.login, { logged: formState.email });
      navigate(StaticRoutes.posts);
    } else setIncorrectPassword(true);
  };
  return (
    <>
      {incorrectPassword && <p>Incorrect user email or password</p>}
      <Form
        isDisabled={disabled}
        handleEmailChange={(e) => handleForm("email", e.target.value)}
        handlePasswordChange={(e) => handleForm("password", e.target.value)}
        onSubmit={(e) => onSubmit(e)}
        emailValue={formState.email}
        passwordValue={formState.password}
        submitButtonLabel="Login"
      />
    </>
  );
};

export default LoginPage;
