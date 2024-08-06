import { useNavigate } from "react-router";
import useForm from "../../hooks/useForm";
import useLocalStorage, { storageKeys } from "../../hooks/useLocalStorage";
import { StaticRoutes } from "../../routes/routes";

import Form from "../../components/Form/Form";

const RegisterPage = () => {
  const { handleForm, formState } = useForm({ email: "", password: "" });
  const { setItems, getItem } = useLocalStorage();
  const navigate = useNavigate();

  const invalidEmail = getItem(storageKeys.users)?.find(
    (user: { email: string }) => user.email === formState.email
  );

  const disabled = !formState.email || !formState.password || invalidEmail;

  const onSubmit = () => {
    setItems(storageKeys.users, formState);
    navigate(StaticRoutes.login);
  };

  return (
    <>
      {invalidEmail && <p>User with given email already exist</p>}
      <Form
        isDisabled={disabled}
        handleEmailChange={(e) => handleForm("email", e.target.value)}
        handlePasswordChange={(e) => handleForm("password", e.target.value)}
        onSubmit={onSubmit}
        emailValue={formState.email}
        passwordValue={formState.password}
        submitButtonLabel="Register"
      />
    </>
  );
};

export default RegisterPage;
