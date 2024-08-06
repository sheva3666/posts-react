import LoginPage from "../pages/LoginPage/LoginPage";
import Posts from "../pages/Posts/Posts";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import ProtectedRoute from "./ProtectedRoute";

export const StaticRoutes = {
  login: "/login",
  register: "/register",
  posts: "/posts",
  postDetails: "/post/:postId",
};

export const routes = [
  {
    path: StaticRoutes.login,
    Component: LoginPage,
  },
  {
    path: StaticRoutes.register,
    Component: RegisterPage,
  },
  {
    path: StaticRoutes.posts,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Component: (props: any) => (
      <ProtectedRoute component={Posts} componentProps={props} />
    ),
  },
];
