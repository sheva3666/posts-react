import { useNavigate } from "react-router";
import useLocalStorage, { storageKeys } from "../hooks/useLocalStorage";
import { StaticRoutes } from "./routes";
import { ComponentType } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProtectedRoute = <P extends object>(Component: ComponentType<P>) => {
  const navigate = useNavigate();
  const { getItem } = useLocalStorage();

  return (props: P) => {
    const logged = getItem(storageKeys.login);

    if (!logged) {
      navigate(StaticRoutes.login);
      return null;
    }

    return <Component {...props} />;
  };
};

export default ProtectedRoute;
