import { useNavigate } from "react-router";
import useLocalStorage, { storageKeys } from "../../hooks/useLocalStorage";
import { StaticRoutes } from "../../routes/routes";
import Button from "../common/Button/Button";
import "./Header.scss";

const Header = () => {
  const { getItem, removeItem } = useLocalStorage();
  const navigate = useNavigate();
  const isLogged = getItem(storageKeys.login);
  const onLogout = () => {
    removeItem(storageKeys.login);
    navigate(StaticRoutes.login);
  };
  return (
    <div className="header">
      <Button onClick={() => navigate(StaticRoutes.login)} name="Login" />
      <Button onClick={() => navigate(StaticRoutes.register)} name="Register" />
      {isLogged && <Button onClick={onLogout} name="Logout" />}
    </div>
  );
};

export default Header;
