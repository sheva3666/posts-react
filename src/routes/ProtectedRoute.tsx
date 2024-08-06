import { useNavigate } from "react-router";
import useLocalStorage, { storageKeys } from "../hooks/useLocalStorage";
import { StaticRoutes } from "./routes";
import { ComponentType, useEffect } from "react";

interface ProtectedRouteProps<P> {
  component: ComponentType<P>;
  componentProps: P;
}

const ProtectedRoute = <P extends object>({
  component: Component,
  componentProps,
}: ProtectedRouteProps<P>) => {
  const navigate = useNavigate();
  const { getItem } = useLocalStorage();

  const logged = getItem(storageKeys.login);

  useEffect(() => {
    if (!logged) {
      navigate(StaticRoutes.login);
    }
  }, []);

  return <Component {...componentProps} />;
};

export default ProtectedRoute;
