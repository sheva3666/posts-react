import Input from "../common/Input/Input";
import Button from "../common/Button/Button";
import useForm from "../../hooks/useForm";
import useLocalStorage, { storageKeys } from "../../hooks/useLocalStorage";
import { useNavigate } from "react-router";
import "./RegisterPage.scss";

export interface RegisterPageProps {}

const RegisterPage: React.FC<RegisterPageProps> = () => {
  const { handleForm, formState } = useForm({ email: "", password: "" });
  const { setItems, getItem } = useLocalStorage();
  const navigate = useNavigate();

  const invalidEmail = getItem(storageKeys.users)?.find(
    (user: { email: string }) => user.email === formState.email
  );

  console.log(invalidEmail);

  const disabled = !formState.email || !formState.password || invalidEmail;

  const onSubmit = () => {
    setItems(storageKeys.users, formState);
    navigate("/login");
  };
  return (
    <>
      {invalidEmail && <p>User with given email already exist</p>}
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
        <Button disabled={disabled} name="Register" onClick={onSubmit} />
      </form>
    </>
  );
};

export default RegisterPage;