import { NavBar } from "../components/common/NavBar";
import { Login } from "../components/Login";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import { Preloader } from "../components/common/Preloader";

export const LoginPage = () => {
  const [isLogedIn] = useAuth();

  return isLogedIn == null ? (
    <Preloader />
  ) : isLogedIn ? (
    <Navigate from="/login" to="/" />
  ) : (
    <>
      <NavBar />
      <Login />
    </>
  );
};
