import "./LoginPage.scss";
import Input from "../common/Input/Input";
import Button from "../common/Button/Button";
import useForm from "../../hooks/useForm";
import useLocalStorage, { storageKeys } from "../../hooks/useLocalStorage";
import { useNavigate } from "react-router";
import { useState } from "react";
import { StaticRoutes } from "../../routes/routes";

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
      <form className="login-form">
        <Input
          onChange={(e) => handleForm("email", e.target.value)}
          placeholder="Email"
          value={formState.email}
        />
        <Input
          onChange={(e) => handleForm("password", e.target.value)}
          placeholder="Password"
          value={formState.password}
          type="password"
        />
        <Button disabled={disabled} name="Login" onClick={(e) => onSubmit(e)} />
      </form>
    </>
  );
};

export default LoginPage;
