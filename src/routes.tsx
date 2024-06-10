import LoginPage from "./components/LoginPage/LoginPage";
import Posts from "./components/Posts/Posts";
import RegisterPage from "./components/RegisterPage/RegisterPage";

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
    Component: Posts,
  },
];
